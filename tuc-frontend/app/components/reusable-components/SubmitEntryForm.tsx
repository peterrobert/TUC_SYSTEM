const SubmitEntryForm = () => {
  return (
    <div className="bg-surface rounded-md border border-purple-200 shadow-floating p-5 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-400 via-purple-500 to-purple-600"></div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-text-purple">
          Have a better idea?
        </h3>
        <span className="bg-purple-50 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          Voting Open
        </span>
      </div>

      <div className="relative mb-3">
        <input
          type="text"
          placeholder="Add a new idea..."
          className="w-full pl-3 pr-10 py-2.5 text-sm bg-surface-muted border border-border rounded-lg focus:ring-2 focus:ring-purple-100 focus:border-purple-500 focus:outline-none transition-all placeholder-text-muted"
        />
        <i className="fa-solid fa-lightbulb absolute right-3 top-3 text-text-muted"></i>
      </div>

      <button className="cursor-pointer rounded-md w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 rounded-ui shadow-md hover:shadow-lg transition-all flex items-center justify-center transform active:scale-95">
        <i className="fa-solid fa-plus mr-2 text-xs"></i> Submit Entry
      </button>
      <p className="text-xs text-text-muted mt-3 text-center">
        New submissions appear at the bottom until upvoted.
      </p>
    </div>
  );
};

export default SubmitEntryForm;
