# Tech Notes & Engineering Deep Dives

Welcome to my technical knowledge base — a curated collection of engineering notes, system design deep dives, experiments, and real-world learnings from building and operating large-scale systems.

This site is hosted via GitHub Pages and is intended to be a living document that evolves with hands-on experience.

## What You’ll Find Here

This repository covers topics across software engineering, infrastructure, and distributed systems, including but not limited to:

### System Design & Architecture
- Distributed systems
- Database internals
- Scalability patterns
- CAP theorem, consistency models, consensus

### Site Reliability Engineering (SRE)
- SLIs, SLOs, and error budgets
- Incident response and postmortems
- Reliability and resilience patterns
- Capacity planning

### Cloud & Platform Engineering
- Kubernetes (from basics to internals)
- Networking (L4/L7, load balancers)
- GitOps and platform automation
- Observability (metrics, logs, traces)

### Databases & Storage
- Redis-like systems
- Raft and consensus algorithms
- Persistence engines
- Vector databases and ANN search

### Programming & Internals
- Python (for automations),Go (backend for cloud), Rust (secondary language), Bash(everything else )
- Concurrency and performance
- Memory models
- OS and networking fundamentals

### Experiments & Side Projects
- Proofs of concept
- Design explorations
- Performance benchmarks

## Repository Structure

```
.
├── index.md                # Homepage
├── notes/                  # Short-form notes
│   ├── sre/
│   ├── kubernetes/
│   └── databases/
├── deep-dives/             # Long-form articles
├── projects/               # Hands-on implementations
├── diagrams/               # Architecture diagrams
├── assets/                 # Images and media
└── README.md               # This file
```

## Running Locally

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Deployment

This site is built with React and Vite. To deploy to GitHub Pages:

```bash
npm run deploy
```
