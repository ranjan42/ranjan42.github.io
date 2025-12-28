import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const SolutionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <p className="text-slate-600 mb-8">The engineering note or deep dive you are looking for does not exist.</p>
        <Link to="/solutions" className="text-indigo-600 hover:text-indigo-500 font-medium">
          &larr; Back to Knowledge Base
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/solutions" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Knowledge Base
      </Link>
      
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium capitalize
            ${post.category === 'deep-dive' ? 'bg-purple-100 text-purple-800' : 
              post.category === 'project' ? 'bg-green-100 text-green-800' : 
              'bg-blue-100 text-blue-800'}`}>
            {post.category.replace('-', ' ')}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
            {post.topic}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
        <div className="flex items-center gap-2 text-slate-500">
          <Calendar className="h-5 w-5" />
          <time className="text-lg">{post.date}</time>
        </div>
      </header>

      <div 
        className="prose prose-lg prose-indigo max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="mt-12 pt-8 border-t border-slate-200">
        <h3 className="text-sm font-medium text-slate-500 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SolutionDetail;
