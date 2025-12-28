const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">EngSolutions</h3>
            <p className="text-slate-400 mt-2">Sharing engineering wisdom, one solution at a time.</p>
          </div>
          <div className="flex space-x-6">
            <p className="text-slate-400">© {new Date().getFullYear()} Engineering Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
