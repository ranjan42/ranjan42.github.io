import { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts, Category, Topic } from '../data/posts';
import { Calendar, ArrowRight, Filter } from 'lucide-react';

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<Topic | 'all'>('all');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTopic = selectedTopic === 'all' || post.topic === selectedTopic;
    return matchesCategory && matchesTopic;
  });

  const categories: { value: Category | 'all', label: string }[] = [
    { value: 'all', label: 'All Content' },
    { value: 'note', label: 'Notes' },
    { value: 'deep-dive', label: 'Deep Dives' },
    { value: 'project', label: 'Projects' },
  ];

  const topics: { value: Topic | 'all', label: string }[] = [
    { value: 'all', label: 'All Topics' },
    { value: 'SRE', label: 'SRE' },
    { value: 'Kubernetes', label: 'Kubernetes' },
    { value: 'Databases', label: 'Databases' },
    { value: 'System Design', label: 'System Design' },
    { value: 'Programming', label: 'Programming' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900">Knowledge Base</h1>
        <p className="mt-4 text-xl text-slate-600">Explore engineering notes, deep dives, and projects.</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-slate-50 p-4 rounded-lg border border-slate-200">
        <div className="flex items-center gap-2 text-slate-700 font-medium">
          <Filter className="h-4 w-4" />
          <span>Filters:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as Category | 'all')}
            className="block rounded-md border-0 py-1.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>

          <select 
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value as Topic | 'all')}
            className="block rounded-md border-0 py-1.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {topics.map((topic) => (
              <option key={topic.value} value={topic.value}>{topic.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                  ${post.category === 'deep-dive' ? 'bg-purple-100 text-purple-800' : 
                    post.category === 'project' ? 'bg-green-100 text-green-800' : 
                    'bg-blue-100 text-blue-800'}`}>
                  {post.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Calendar className="h-4 w-4" />
                  <time>{post.date}</time>
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                <Link to={`/solutions/${post.id}`} className="hover:text-indigo-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-slate-600 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                 <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600">
                    {post.topic}
                  </span>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link
                to={`/solutions/${post.id}`}
                className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-500"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No posts found matching your filters.
        </div>
      )}
    </div>
  );
};

export default Solutions;
