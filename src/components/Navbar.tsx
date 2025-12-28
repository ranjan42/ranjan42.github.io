import { Link } from 'react-router-dom';
import { Terminal, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Terminal className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-slate-900">TechNotes</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium">Home</Link>
            <Link to="/solutions" className="text-slate-600 hover:text-indigo-600 font-medium">Knowledge Base</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-indigo-600">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
