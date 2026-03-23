import Image from "next/image";
const EntryCardSection = () => {
  return (
    <div
      className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden"
      id="entry-content"
    >
      {/* <!-- Cover Image (Optional for visual richness) --> */}
      <div className="h-48 w-full bg-linear-to-r from-indigo-50 to-purple-50 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <i className="fa-solid fa-text-height text-6xl text-primary-200/50 transform group-hover:scale-110 transition-transform duration-500"></i>
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Active Contest
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              Fluid Typography Scale
            </h1>
            <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
              <div className="flex items-center">
                <Image
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="Author"
                  width={24}
                  height={24}
                  className="rounded-full mr-2"
                />
                <span>
                  Added by{" "}
                  <span className="font-medium text-gray-900">Alex Morgan</span>
                </span>
              </div>
              <span>&bull;</span>
              <span>2 days ago</span>
              <span>&bull;</span>
              <span className="text-primary-600 font-medium">Rank #3</span>
            </div>
          </div>
          {/* <!-- Mobile Action Buttons (Visible only on small screens) --> */}
          <div className="flex lg:hidden space-x-2">
            <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200">
              <i className="fa-solid fa-share-nodes"></i>
            </button>
            <button className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100">
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>

        <div className="prose prose-purple max-w-none text-gray-600 mb-8 leading-relaxed">
          <p>
            Implementing a fluid typography scale allows font sizes to adapt
            smoothly between a minimum and maximum viewport width. Instead of
            jumping between fixed sizes at breakpoints, the text scales linearly
            using CSS clamp() functions. This ensures optimal readability on
            every device size, from the smallest mobile phone to the largest
            ultra-wide monitor.
          </p>
          <p className="mt-4">
            The core concept involves defining a base size and a ratio, then
            calculating the clamp values. This approach significantly reduces
            the amount of media queries needed in the CSS codebase.
          </p>
        </div>

        {/* <!-- Custom Fields Panel --> */}
        <div className="bg-gray-50 rounded-lg border border-gray-100 p-6 space-y-6">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
            Entry Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Field 1: Dropdown/Select --> */}
            <div>
              <label className="custom-field-label block">
                Implementation Difficulty
              </label>
              <div className="flex items-center mt-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  <i className="fa-solid fa-layer-group mr-1.5 text-xs"></i>{" "}
                  Medium
                </span>
              </div>
            </div>

            {/* <!-- Field 2: Multi-select Tags --> */}
            <div>
              <label className="custom-field-label block">Tech Stack</label>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  CSS
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  Sass
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                  Design Tokens
                </span>
              </div>
            </div>

            {/* <!-- Field 3: Number/Metric --> */}
            <div>
              <label className="custom-field-label block">
                Estimated Hours
              </label>
              <div className="text-gray-900 font-medium mt-1 flex items-center">
                <i className="fa-regular fa-clock mr-2 text-gray-400"></i>
                12 - 16 Hours
              </div>
            </div>

            {/* <!-- Field 4: Date --> */}
            <div>
              <label className="custom-field-label block">
                Target Completion
              </label>
              <div className="text-gray-900 font-medium mt-1 flex items-center">
                <i className="fa-regular fa-calendar mr-2 text-gray-400"></i>
                Nov 24, 2024
              </div>
            </div>

            {/* <!-- Field 5: Link/Resource --> */}
            <div className="md:col-span-2">
              <label className="custom-field-label block">Reference URL</label>
              <a
                href="#"
                className="flex items-center p-3 mt-1 bg-white border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all group"
              >
                <div className="bg-gray-100 p-2 rounded-md mr-3 group-hover:bg-primary-50 transition-colors">
                  <i className="fa-solid fa-link text-gray-500 group-hover:text-primary-600"></i>
                </div>
                <div className="flex-1 truncate">
                  <span className="text-sm font-medium text-primary-600 truncate block">
                    https://utopia.fyi/blog/css-modular-scales/
                  </span>
                  <span className="text-xs text-gray-500">
                    External Resource
                  </span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-gray-400 text-xs ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryCardSection;
