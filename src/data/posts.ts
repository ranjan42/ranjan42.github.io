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
      <h2>Building Raft in Go</h2>
      <p>Raft is a consensus algorithm that is designed to be easy to understand. It decomposes the problem into three subproblems:</p>
      <ul>
        <li>Leader Election</li>
        <li>Log Replication</li>
        <li>Safety</li>
      </ul>
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
