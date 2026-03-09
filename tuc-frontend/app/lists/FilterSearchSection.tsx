const FilterSearchSection = () => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-soft border border-gray-200 mb-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200 shadow-sm transition-all hover:bg-purple-100">
              All Modes
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-all">
              Brainstorm
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-all">
              Voting
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-all">
              Contest
            </button>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                <span>Most Active</span>
                <i className="fa-solid fa-chevron-down text-xs text-gray-400"></i>
              </button>
            </div>

            <div className="h-8 w-px bg-gray-200"></div>

            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg border border-gray-200">
              <button className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-gray-900 shadow-sm border border-gray-200">
                Live
              </button>
              <button className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-700">
                Closed
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search for lists by idea, topic, or keyword…"
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-purple-300 focus:ring-2 focus:ring-purple-100 outline-none text-base text-gray-700 placeholder-gray-400 transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default FilterSearchSection;
