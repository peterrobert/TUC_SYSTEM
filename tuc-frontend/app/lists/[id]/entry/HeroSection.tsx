const HeroSection = () => {
  return (
    //   <!-- Breadcrumb & Back Navigation -->
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-15 pt-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-solid fa-home text-sm"></i>
            </a>
          </li>
          <li>
            <span className="text-gray-300">/</span>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Design Systems 2024
            </a>
          </li>
          <li>
            <span className="text-gray-300">/</span>
          </li>
          <li>
            <span
              className="text-sm font-medium text-gray-900"
              aria-current="page"
            >
              Fluid Typography Scale
            </span>
          </li>
        </ol>
      </nav>
      <div className="mt-4">
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 group"
        >
          <i className="fa-solid fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
          Back to List
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
