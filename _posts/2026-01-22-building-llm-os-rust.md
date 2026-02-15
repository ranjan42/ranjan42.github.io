---
layout: post
title: "Building an AI-First Operating System in Rust from Scratch"
date: 2026-01-22 10:27:00 +0530
categories: [Rust, AI, Operating Systems]
tags: [rust, llm, andrej-karpathy, osdev, bare-metal, ai-agent]
---

# Building an AI-First Operating System in Rust from Scratch

What happens when you invert the entire operating system? Instead of a kernel serving human users through a GUI, the kernel serves a single entity — an AI Agent — that *is* the userland. This is the premise behind Andrej Karpathy's "LLM OS" concept, and in this post, I'll lay out a concrete roadmap for building it from scratch in Rust on bare metal.

This isn't a toy project. It's a design exercise that forces you to rethink every layer of the stack: memory management becomes context window management, the filesystem becomes a vector store, and system calls become tool invocations.

---

## Why Rust?

Before diving in, the language choice deserves a brief justification:

- **No garbage collector.** You cannot afford GC pauses when you're managing interrupt handlers and DMA buffers.
- **Zero-cost abstractions.** Traits, generics, and ownership give you high-level ergonomics without runtime overhead.
- **`#![no_std]` ecosystem.** Rust has first-class support for freestanding binaries. Crates like `bootloader`, `x86_64`, `volatile`, and `linked_list_allocator` mean you aren't reinventing every wheel.
- **Memory safety at compile time.** In kernel development, a use-after-free isn't a segfault — it's silent memory corruption that surfaces hours later. Rust eliminates this class of bugs entirely.

---

## The Karpathy LLM OS Architecture

Karpathy's insight is deceptively simple: map every traditional OS concept to its LLM equivalent.

| Traditional OS | LLM OS Equivalent |
|---|---|
| CPU | The Large Language Model — processes tokens instead of machine instructions |
| RAM | Context Window — fast, volatile working memory for the current reasoning chain |
| Disk / Filesystem | RAG + Embeddings — long-term memory stored as vectors, retrieved by semantic similarity |
| Processes | Agents / Tool-use threads — concurrent reasoning chains |
| System Calls | Tool Invocations — the agent "calls" a calculator, a Python interpreter, or a web search |
| Peripherals | Multimodal I/O — microphone (speech-to-text), camera (vision embeddings), display (rendered output) |
| Scheduler | Orchestrator — decides which agent gets the next inference cycle |

The key shift: in a traditional OS, the human is the "outer loop" and the CPU is the "inner loop." In the LLM OS, the **agent is the outer loop** and the hardware is just infrastructure.

---

## Phase 1: The Bare-Metal Rust Kernel

Since we're building from scratch, we can't use Rust's standard library (`std`) — it depends on an existing OS for threads, file I/O, and memory allocation. Everything starts with a `#![no_std]` freestanding binary.

I recommend following the bootloader methodology from Philipp Oppermann's excellent [Writing an OS in Rust](https://os.phil-opp.com/) series, adapted for our AI-first architecture.

### 1.1 The Entry Point

```rust
#![no_std]
#![no_main]

use core::panic::PanicInfo;
use bootloader::{entry_point, BootInfo};

entry_point!(kernel_main);

fn kernel_main(boot_info: &'static BootInfo) -> ! {
    // Phase 1: Hardware foundation
    gdt::init();                    // Global Descriptor Table
    interrupts::init_idt();         // Interrupt Descriptor Table
    unsafe { interrupts::PICS.lock().initialize() };  // Programmable Interrupt Controllers
    x86_64::instructions::interrupts::enable();

    // Phase 2: Memory subsystem
    let phys_mem_offset = VirtAddr::new(
        boot_info.physical_memory_offset.into_option().unwrap()
    );
    let mut mapper = unsafe { memory::init(phys_mem_offset) };
    let mut frame_allocator = unsafe {
        memory::BootInfoFrameAllocator::init(&boot_info.memory_map)
    };
    allocator::init_heap(&mut mapper, &mut frame_allocator)
        .expect("heap initialization failed");

    // Phase 3: Boot the Agent
    agent::init();

    // Halt loop — interrupts will wake us
    loop {
        x86_64::instructions::hlt();
    }
}

#[panic_handler]
fn panic(info: &PanicInfo) -> ! {
    serial_println!("KERNEL PANIC: {}", info);
    loop {
        x86_64::instructions::hlt();
    }
}
```

**What's happening here:** We initialize the CPU's descriptor tables, set up interrupt handling (so the keyboard, timer, and network card can talk to us), bring up virtual memory with paging, carve out a heap so we can use `alloc::Vec` and `alloc::String`, and finally hand control to the agent.

### 1.2 Memory Management

The heap allocator is critical. We need dynamic allocation for the agent's context window, token buffers, and embedding vectors. A linked-list allocator works for bootstrapping, but for production you'd want a slab allocator or buddy system:

```rust
use linked_list_allocator::LockedHeap;

#[global_allocator]
static ALLOCATOR: LockedHeap = LockedHeap::empty();

pub const HEAP_START: usize = 0x_4444_4444_0000;
pub const HEAP_SIZE: usize = 1024 * 1024; // 1 MiB initial heap

pub fn init_heap(
    mapper: &mut impl Mapper<Size4KiB>,
    frame_allocator: &mut impl FrameAllocator<Size4KiB>,
) -> Result<(), MapToError<Size4KiB>> {
    let page_range = {
        let heap_start = VirtAddr::new(HEAP_START as u64);
        let heap_end = heap_start + HEAP_SIZE - 1u64;
        let heap_start_page = Page::containing_address(heap_start);
        let heap_end_page = Page::containing_address(heap_end);
        Page::range_inclusive(heap_start_page, heap_end_page)
    };

    for page in page_range {
        let frame = frame_allocator
            .allocate_frame()
            .ok_or(MapToError::FrameAllocationFailed)?;
        let flags = PageTableFlags::PRESENT | PageTableFlags::WRITABLE;
        unsafe {
            mapper.map_to(page, frame, flags, frame_allocator)?.flush();
        }
    }

    unsafe {
        ALLOCATOR.lock().init(HEAP_START as *mut u8, HEAP_SIZE);
    }

    Ok(())
}
```

### 1.3 Driver Layer

At minimum, we need three drivers to make the agent functional:

| Driver | Purpose | Why the Agent Needs It |
|---|---|---|
| **Serial/UART** | Text I/O over COM port | Debugging + basic agent output before display driver is ready |
| **Network (virtio-net)** | TCP/IP stack | Agent must reach an LLM inference API (or run inference locally) |
| **Disk (virtio-blk / ATA)** | Persistent storage | RAG vector store, conversation logs, embeddings |

The network driver is the most critical — without it, the agent can't think.

---

## Phase 2: The Agent Runtime

This is where traditional OS development diverges. Instead of building a shell for a human user, we build a runtime for an AI agent.

### 2.1 The Agent Core

```rust
pub struct Agent {
    context_window: ContextWindow,
    tool_registry: ToolRegistry,
    memory_store: VectorStore,
    inference_client: InferenceClient,
    orchestrator: Orchestrator,
}

impl Agent {
    pub fn init() -> Self {
        let mut agent = Agent {
            context_window: ContextWindow::new(MAX_TOKENS),
            tool_registry: ToolRegistry::new(),
            memory_store: VectorStore::new(),
            inference_client: InferenceClient::connect("inference-server:8080"),
            orchestrator: Orchestrator::new(),
        };

        // Register built-in tools
        agent.tool_registry.register("calculator", tools::calculator);
        agent.tool_registry.register("web_search", tools::web_search);
        agent.tool_registry.register("read_file", tools::read_file);
        agent.tool_registry.register("write_file", tools::write_file);
        agent.tool_registry.register("run_code", tools::run_code);
        agent.tool_registry.register("memory_store", tools::memory_store);
        agent.tool_registry.register("memory_recall", tools::memory_recall);

        agent.run_loop();
        agent
    }

    fn run_loop(&mut self) -> ! {
        loop {
            // 1. Gather input (interrupts, network messages, timers)
            let input = self.orchestrator.next_input();

            // 2. Build prompt with context
            self.context_window.push_message(Role::User, &input);
            let prompt = self.context_window.serialize();

            // 3. Run inference
            let response = self.inference_client.complete(&prompt);

            // 4. Parse and execute tool calls
            if let Some(tool_calls) = response.tool_calls() {
                for call in tool_calls {
                    let result = self.tool_registry.execute(&call.name, &call.args);
                    self.context_window.push_message(Role::Tool, &result);
                }
                // Re-run inference with tool results
                continue;
            }

            // 5. Output response
            self.context_window.push_message(Role::Assistant, &response.text);
            self.orchestrator.emit_output(&response.text);
        }
    }
}
```

### 2.2 Context Window as RAM

The context window is the agent's working memory. Unlike traditional RAM that stores arbitrary bytes, it stores a structured sequence of messages (tokens). Managing it well is the difference between a useful agent and one that forgets what it was doing:

```rust
pub struct ContextWindow {
    messages: VecDeque<Message>,
    max_tokens: usize,
    current_tokens: usize,
}

impl ContextWindow {
    pub fn push_message(&mut self, role: Role, content: &str) {
        let token_count = tokenize(content).len();

        // Eviction policy: drop oldest non-system messages when full
        while self.current_tokens + token_count > self.max_tokens {
            if let Some(evicted) = self.evict_oldest() {
                // Optionally summarize evicted messages to long-term memory
                self.summarize_and_store(&evicted);
            } else {
                break; // Only system prompt remains
            }
        }

        self.messages.push_back(Message { role, content: content.into() });
        self.current_tokens += token_count;
    }

    fn evict_oldest(&mut self) -> Option<Message> {
        // Never evict the system prompt (index 0)
        if self.messages.len() <= 1 {
            return None;
        }
        let msg = self.messages.remove(1)?; // Remove oldest non-system message
        self.current_tokens -= tokenize(&msg.content).len();
        Some(msg)
    }

    fn summarize_and_store(&self, message: &Message) {
        // Compress evicted context into long-term memory (RAG store)
        // This is the "swap to disk" equivalent
    }
}
```

**The analogy is precise:** when RAM is full, the OS pages data to disk. When the context window is full, the agent summarizes old messages and stores them in the vector database. Retrieval-Augmented Generation is literally virtual memory for LLMs.

### 2.3 Tool Invocations as System Calls

In a traditional OS, user programs make system calls (`read()`, `write()`, `fork()`) to request kernel services. In the LLM OS, the agent makes **tool calls** to interact with the outside world:

```rust
pub struct ToolRegistry {
    tools: BTreeMap<String, Box<dyn Tool>>,
}

pub trait Tool: Send + Sync {
    fn name(&self) -> &str;
    fn description(&self) -> &str;
    fn execute(&self, args: &Value) -> Result<String, ToolError>;
}

// Example: Calculator tool
pub struct Calculator;

impl Tool for Calculator {
    fn name(&self) -> &str { "calculator" }

    fn description(&self) -> &str {
        "Evaluate a mathematical expression. Input: {\"expr\": \"2 + 2 * 3\"}"
    }

    fn execute(&self, args: &Value) -> Result<String, ToolError> {
        let expr = args["expr"].as_str().ok_or(ToolError::InvalidArgs)?;
        let result = eval_math(expr)?;
        Ok(format!("{}", result))
    }
}
```

The tool registry is functionally equivalent to a syscall table. The agent's output is parsed for structured tool-call tokens, the kernel dispatches to the appropriate handler, and the result is fed back into the next inference cycle.

---

## Phase 3: Long-Term Memory (The Vector Filesystem)

A traditional filesystem organizes data by path (`/home/user/notes.txt`). The LLM OS organizes data by **semantic similarity** — you don't look up a file by name, you describe what you're looking for and the system retrieves the most relevant chunks.

### 3.1 The Vector Store

```rust
pub struct VectorStore {
    entries: Vec<MemoryEntry>,
}

pub struct MemoryEntry {
    pub id: u64,
    pub content: String,
    pub embedding: Vec<f32>,    // 1536-dim for text-embedding-ada-002
    pub metadata: Metadata,
    pub timestamp: u64,
}

impl VectorStore {
    pub fn store(&mut self, content: &str, embedding: Vec<f32>) {
        let entry = MemoryEntry {
            id: self.next_id(),
            content: content.into(),
            embedding,
            metadata: Metadata::default(),
            timestamp: crate::time::now(),
        };
        self.entries.push(entry);
    }

    pub fn recall(&self, query_embedding: &[f32], top_k: usize) -> Vec<&MemoryEntry> {
        let mut scored: Vec<_> = self.entries.iter()
            .map(|entry| {
                let similarity = cosine_similarity(&entry.embedding, query_embedding);
                (entry, similarity)
            })
            .collect();

        scored.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
        scored.into_iter().take(top_k).map(|(entry, _)| entry).collect()
    }
}

fn cosine_similarity(a: &[f32], b: &[f32]) -> f32 {
    let dot: f32 = a.iter().zip(b).map(|(x, y)| x * y).sum();
    let mag_a: f32 = a.iter().map(|x| x * x).sum::<f32>().sqrt();
    let mag_b: f32 = b.iter().map(|x| x * x).sum::<f32>().sqrt();
    if mag_a == 0.0 || mag_b == 0.0 { return 0.0; }
    dot / (mag_a * mag_b)
}
```

### 3.2 Memory Hierarchy

Just like a CPU has L1/L2/L3 caches, RAM, and disk, the LLM OS has a memory hierarchy:

```
┌───────────────────────────────┐
│  System Prompt (always in     │  ← "L1 Cache" — never evicted
│  context, ~500 tokens)        │
├───────────────────────────────┤
│  Recent Messages              │  ← "RAM" — the context window
│  (up to max_tokens)           │
├───────────────────────────────┤
│  Summarized History           │  ← "L2 Cache" — compressed summaries
│  (retrieved on demand)        │    of evicted conversations
├───────────────────────────────┤
│  Vector Store (RAG)           │  ← "Disk" — all past knowledge,
│  (semantic retrieval)         │    retrieved by similarity search
├───────────────────────────────┤
│  External APIs                │  ← "Network" — web search, databases,
│  (tool calls)                 │    live data from the outside world
└───────────────────────────────┘
```

This hierarchy enables the agent to have effectively **infinite memory** while operating within a fixed context window. The cost model mirrors hardware: "closer" memory is faster (no extra inference) but limited; "farther" memory has higher latency (requires a retrieval step) but is unbounded.

---

## Phase 4: The Orchestrator (Scheduler)

A traditional OS scheduler multiplexes CPU time across processes. The LLM OS orchestrator multiplexes **inference cycles** across tasks:

```rust
pub struct Orchestrator {
    task_queue: VecDeque<Task>,
    active_task: Option<Task>,
    interrupt_handlers: BTreeMap<InterruptType, fn(&str) -> Task>,
}

pub struct Task {
    pub id: u64,
    pub priority: Priority,
    pub description: String,
    pub status: TaskStatus,
}

impl Orchestrator {
    pub fn next_input(&mut self) -> String {
        // Check for hardware interrupts (keyboard, network, timer)
        if let Some(interrupt) = self.poll_interrupts() {
            return self.handle_interrupt(interrupt);
        }

        // Check task queue
        if let Some(task) = self.task_queue.pop_front() {
            self.active_task = Some(task.clone());
            return task.description;
        }

        // Idle — agent can do background work (memory consolidation, etc.)
        "No pending tasks. Perform memory consolidation or await input.".into()
    }
}
```

**Interesting design question:** Should the orchestrator support preemption? In a traditional OS, the timer interrupt preempts a running process. In the LLM OS, you could interrupt a long reasoning chain if a higher-priority task arrives — but you'd need to save and restore the context window state, which is expensive.

---

## Phase 5: Multimodal I/O (Peripherals)

The final layer connects the agent to the physical world:

| Peripheral | Traditional OS | LLM OS |
|---|---|---|
| Keyboard | Key codes → stdin | Key codes → tokenizer → agent input |
| Display | Framebuffer → pixels | Agent output → renderer → framebuffer |
| Microphone | PCM audio → `/dev/audio` | PCM audio → Whisper → tokens → agent input |
| Camera | Raw frames → `/dev/video` | Raw frames → CLIP/Vision → embeddings → agent input |
| Network | Packets → TCP/IP stack | Packets → tool results / inference API |

The display driver is particularly interesting. The agent doesn't "print to stdout" — it emits structured output (markdown, HTML, SVG) that a rendering engine converts to pixels on the framebuffer. The agent is effectively its own window manager.

---

## The Complete Boot Sequence

Putting it all together, here's what happens when you power on the LLM OS:

```
1. BIOS/UEFI → Bootloader (GRUB/bootloader crate)
2. Bootloader → kernel_main()
3. GDT, IDT, PIC initialization
4. Page table setup, heap allocation
5. Serial driver init (early debug output)
6. Network driver init (virtio-net or e1000)
7. Disk driver init (virtio-blk or ATA)
8. Vector store loaded from disk
9. Agent::init()
   ├── ContextWindow created (system prompt loaded)
   ├── ToolRegistry populated
   ├── InferenceClient connected
   └── Agent enters run_loop()
10. Agent is now "alive" — waiting for input
```

From step 10 onward, the agent is in control. It processes inputs, reasons about them, calls tools, and emits outputs. The kernel is invisible — it just keeps the hardware humming.

---

## Open Questions and Future Work

This design raises several fascinating questions that I'm still thinking through:

1. **Where does inference run?** On-device (requires GPU driver + CUDA/ROCm in kernel space) or off-device (requires only a network stack, but adds latency and a dependency on external infrastructure)?

2. **Multi-agent scheduling.** Can we run multiple agents concurrently, each with their own context window, and have the orchestrator schedule inference cycles across them? This starts to look like traditional process scheduling, but over a GPU instead of a CPU.

3. **Security model.** In a traditional OS, rings and page tables isolate processes. How do you isolate agents from each other? Tool-call permissions? Context window sandboxing?

4. **Self-modification.** The agent could theoretically modify its own system prompt, tool registry, or even kernel code. Should this be allowed? What guardrails are needed?

5. **Persistence and crash recovery.** If the system crashes mid-inference, how do you restore the agent's state? The context window needs checkpointing, similar to process core dumps.

---

## Getting Started

If you want to follow along and build this yourself, here's the minimal setup:

```bash
# Install Rust nightly (required for #![no_std] kernel dev)
rustup install nightly
rustup component add rust-src --toolchain nightly
rustup component add llvm-tools-preview --toolchain nightly

# Install bootimage tool
cargo install bootimage

# Create the project
cargo new llm-os --edition 2021
cd llm-os

# Run with QEMU
cargo bootimage
qemu-system-x86_64 -drive format=raw,file=target/x86-64/debug/bootimage-llm-os.bin
```

Start with Oppermann's tutorials for the kernel foundation, then diverge at the point where you'd normally build a shell — build the agent runtime instead.

---

## Conclusion

The LLM OS isn't science fiction. Every component I've described maps to well-understood systems programming concepts. The context window is RAM with an eviction policy. The vector store is a content-addressed filesystem. Tool calls are system calls. The orchestrator is a scheduler.

What makes it exciting is the *inversion*: the AI isn't a program running on the OS — the AI **is** the OS. Every design decision flows from that single architectural choice.

The full source code will be published on [GitHub](https://github.com/ranjan42) as the project matures. If you're interested in OS development, AI systems, or Rust, I'd love to hear from you.

---

*Further reading:*
- [Andrej Karpathy — "LLM OS" Tweet Thread](https://twitter.com/kaborez)
- [Writing an OS in Rust — Philipp Oppermann](https://os.phil-opp.com/)
- [The Rust `#![no_std]` Book](https://docs.rust-embedded.org/book/)
- [go-dav-os — A freestanding OS kernel in Go](https://github.com/dmarro89/go-dav-os) *(a project I contribute to)*
