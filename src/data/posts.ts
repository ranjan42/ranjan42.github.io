export type Category = 'note' | 'deep-dive' | 'project';
export type Topic = 'SRE' | 'Kubernetes' | 'Databases' | 'System Design' | 'Programming' | 'Cloud';

export interface Post {
  id: string;
  title: string;
  description: string;
  category: Category;
  topic: Topic;
  tags: string[];
  date: string;
  content: string; // Markdown or HTML
}

export const posts: Post[] = [
  {
    id: 'sre-error-budgets',
    title: 'Implementing Error Budgets',
    description: 'A practical guide to defining and using error budgets in your SRE practice.',
    category: 'note',
    topic: 'SRE',
    tags: ['SRE', 'Reliability', 'Process'],
    date: '2023-11-10',
    content: `
      <h2>Implementing Error Budgets</h2>
      <p>Error budgets are the core metric for SREs. They bridge the gap between development speed and system reliability.</p>
      <h3>Formula</h3>
      <p><code>Error Budget = 1 - SLO</code></p>
      <p>If your SLO is 99.9%, your error budget is 0.1% of requests.</p>
    `
  },
  {
    id: 'k8s-networking-internals',
    title: 'Kubernetes Networking Internals',
    description: 'Understanding CNI, Services, and Ingress from the ground up.',
    category: 'deep-dive',
    topic: 'Kubernetes',
    tags: ['Kubernetes', 'Networking', 'Infrastructure'],
    date: '2023-12-01',
    content: `
      <h2>Kubernetes Networking Model</h2>
      <p>Every pod gets its own IP address. Containers within a pod share the network namespace (IP and localhost).</p>
      <h3>CNI Plugins</h3>
      <p>The Container Network Interface (CNI) standardizes how drivers configure network interfaces.</p>
    `
  },
  {
    id: 'raft-consensus',
    title: 'Implementing Raft Consensus in Go',
    description: 'A hands-on project building a distributed key-value store using the Raft algorithm.',
    category: 'project',
    topic: 'Databases',
    tags: ['Go', 'Distributed Systems', 'Consensus'],
    date: '2024-01-15',
    content: `
      <h2 class="text-2xl font-bold mb-4">Implementing Raft Consensus in Go</h2>
      <p class="mb-4">Raft is a practical consensus algorithm designed for understandability. It ensures a replicated log is consistent across nodes, even in the presence of failures. A production‑grade implementation focuses on three pillars: <strong>Leader Election</strong>, <strong>Log Replication</strong>, and <strong>Safety</strong>.</p>

      <figure class="my-6">
        <img src="/assets/diagrams/raft-overview.svg" alt="Raft overview: leader election and log replication"
             class="max-w-full h-auto rounded-lg shadow" />
        <figcaption class="text-sm text-slate-500 mt-2">Leader appends client commands to a replicated log and ensures commit via majority (quorum).</figcaption>
      </figure>

      <h3 class="text-xl font-semibold mt-8 mb-2">Cluster Roles</h3>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Leader:</strong> Handles client writes, replicates log entries, advances commitIndex.</li>
        <li><strong>Follower:</strong> Passive; responds to AppendEntries/RequestVote; timeouts trigger election.</li>
        <li><strong>Candidate:</strong> Initiates election, requests votes from peers.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-8 mb-2">Leader Election</h3>
      <p class="mb-2">Each follower starts an election after a randomized timeout (e.g., 150–300ms) without heartbeats. Candidates vote for themselves, then solicit votes. A node becomes leader on majority.</p>
      <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto"><code>type Role int
const (
  Follower Role = iota
  Candidate
  Leader
)

type Raft struct {
  id           int
  term         int
  votedFor     *int
  role         Role
  log          []LogEntry
  commitIndex  int
  lastApplied  int
  nextIndex    map[int]int
  matchIndex   map[int]int
}

func (r *Raft) startElection() {
  r.term++
  r.role = Candidate
  r.votedFor = &r.id
  votes := 1
  for peer := range r.peers {
    if r.requestVote(peer) {
      votes++
    }
  }
  if votes &gt;= r.quorum() {
    r.becomeLeader()
  }
}</code></pre>

      <h3 class="text-xl font-semibold mt-8 mb-2">Log Replication</h3>
      <p class="mb-2">Leaders append client commands to their log and send <code>AppendEntries(term, leaderId, prevLogIndex, prevLogTerm, entries, leaderCommit)</code> to followers. Followers ensure log consistency using <em>prevLogIndex</em>/<em>prevLogTerm</em>, deleting conflicts then appending new entries.</p>
      <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto"><code>type LogEntry struct {
  Term  int
  Index int
  Cmd   []byte // opaque state machine command
}

func (r *Raft) appendEntries(peer int) bool {
  prevIdx := r.nextIndex[peer] - 1
  prevTerm := r.log[prevIdx].Term
  entries := r.log[r.nextIndex[peer]:]
  ok := r.sendAppend(peer, prevIdx, prevTerm, entries, r.commitIndex)
  if ok {
    r.matchIndex[peer] = prevIdx + len(entries)
    r.nextIndex[peer] = r.matchIndex[peer] + 1
    r.updateCommitIndex()
  } else {
    r.nextIndex[peer]-- // backoff to find matching prefix
  }
  return ok
}</code></pre>

      <h3 class="text-xl font-semibold mt-8 mb-2">Safety and Commit</h3>
      <p class="mb-2">Leaders compute a new <code>commitIndex</code> when a log index is stored by a majority and the entry term equals the current term. Applying committed entries to the state machine occurs in order.</p>
      <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto"><code>func (r *Raft) updateCommitIndex() {
  for idx := len(r.log) - 1; idx &gt; r.commitIndex; idx-- {
    replicated := 1
    for peer := range r.peers {
      if r.matchIndex[peer] &gt;= idx {
        replicated++
      }
    }
    if replicated &gt;= r.quorum() &amp;&amp; r.log[idx].Term == r.term {
      r.commitIndex = idx
      r.applyCommitted()
      return
    }
  }
}</code></pre>

      <h3 class="text-xl font-semibold mt-8 mb-2">Failure Scenarios</h3>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Leader crash:</strong> Followers timeout → election. New leader must have the most up‑to‑date log.</li>
        <li><strong>Network partitions:</strong> Minority partition cannot achieve quorum; safety preserved.</li>
        <li><strong>Conflicting logs:</strong> Consistency via <em>prevLogIndex</em>/<em>prevLogTerm</em> and conflict deletion.</li>
      </ul>

      <h3 class="text-xl font-semibold mt-8 mb-2">Persistence</h3>
      <p class="mb-2">Persist <em>currentTerm</em>, <em>votedFor</em>, and log to stable storage before responding. On restart, reload and resume.</p>

      <h3 class="text-xl font-semibold mt-8 mb-2">Client Interaction</h3>
      <p class="mb-2">Clients send writes to the leader. Followers redirect. Reads can be linearized by ensuring leadership (e.g., lease or quorum read).</p>

      <h3 class="text-xl font-semibold mt-8 mb-2">Minimal RPCs</h3>
      <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto"><code>// RequestVote(term, candidateId, lastLogIndex, lastLogTerm) -&gt; (term, voteGranted)
// AppendEntries(term, leaderId, prevLogIndex, prevLogTerm, entries[], leaderCommit) -&gt; (term, success)</code></pre>

      <p class="mt-8">This one‑page overview maps directly to a Go implementation: define node roles and persistent state, implement election and replication RPCs, and drive commitIndex via majority. Add snapshots to bound log size, and use randomized timeouts to avoid split votes.</p>
    `
  },
  {
    id: 'db-indexing-strategies',
    title: 'Effective Database Indexing Strategies',
    description: 'Learn how to speed up your SQL queries by 100x using proper indexing.',
    category: 'note',
    topic: 'Databases',
    tags: ['SQL', 'Performance', 'B-Tree'],
    date: '2023-12-05',
    content: `
      <h2 class="text-2xl font-bold mb-4">Understanding B-Trees</h2>
      <p class="mb-4">Most relational databases use B-Trees for indexing. Understanding how they work is key to optimization.</p>
    `
  }
];

/*
TEMPLATE FOR NEW POST:
Copy and paste this object into the array above.

  {
    id: 'your-url-slug',
    title: 'Your Post Title',
    description: 'A short summary for the card view.',
    category: 'note', // or 'deep-dive' or 'project'
    topic: 'System Design', // or 'SRE', 'Kubernetes', etc.
    tags: ['Tag1', 'Tag2'],
    date: 'YYYY-MM-DD',
    content: `
      <h2>Section Title</h2>
      <p>Your content here. You can use HTML tags.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    `
  },
*/
