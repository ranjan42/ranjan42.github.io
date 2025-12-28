import { Link } from 'react-router-dom';
import { BookOpen, Server, Database, Cloud, Code, FlaskConical } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Tech Notes & Engineering Deep Dives
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A curated collection of engineering notes, system design deep dives, experiments, and real-world learnings from building large-scale systems.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/solutions"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Browse Knowledge Base
              </Link>
              <a href="https://github.com" className="text-sm font-semibold leading-6 text-slate-900">
                View on GitHub <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Explore Topics</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From Internals to Architecture
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                <Server className="h-5 w-5 flex-none text-indigo-600" />
                System Design & SRE
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">Distributed systems, scalability patterns, SLIs/SLOs, and resilience engineering.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                <Cloud className="h-5 w-5 flex-none text-indigo-600" />
                Cloud & Platform
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">Kubernetes internals, networking, GitOps, and observability.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                <Database className="h-5 w-5 flex-none text-indigo-600" />
                Databases & Storage
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">Internals of persistence engines, consensus algorithms (Raft), and vector search.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                <Code className="h-5 w-5 flex-none text-indigo-600" />
                Programming & Internals
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">Go language deep dives, concurrency models, memory management, and OS fundamentals.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                <FlaskConical className="h-5 w-5 flex-none text-indigo-600" />
                Experiments
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">Proofs of concept, design explorations, and performance benchmarks.</p>
              </dd>
            </div>
             <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                <BookOpen className="h-5 w-5 flex-none text-indigo-600" />
                Deep Dives
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                <p className="flex-auto">Long-form articles dissecting complex technologies and architectural decisions.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Home;
