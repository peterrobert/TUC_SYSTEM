const FilterSortSection = () => {
  return (
    <div className="flex items-center justify-between pb-2">
      <h2 className="text-lg font-bold text-text-purple flex items-center">
        Top Ranked Ideas
        <span className="ml-2 text-xs font-normal text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full border border-divider">
          Live Updating
        </span>
      </h2>
      <div className="flex items-center space-x-3 ">
        <div className="flex bg-gray-200 p-1 rounded-lg border border-gray-200 cursor-pointer">
          <button className="p-1.5 px-3 rounded-md bg-white shadow-sm text-sm font-normal text-purple-700 cursor-pointer">
            Vote Count
          </button>
          <button className="p-1.5 px-3 rounded-md text-sm font-normal text-gray-500 hover:text-purple-700 cursor-pointer">
            Trending
          </button>
          <button className="p-1.5 px-3 rounded-md text-sm font-normal text-gray-500  hover:text-purple-700 cursor-pointer">
            Newest
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSortSection;
