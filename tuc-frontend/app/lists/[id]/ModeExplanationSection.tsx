const ModeExplanationSection = () => {
  return (
    <div className="bg-linear-to-br from-surface to-purple-50 rounded-md border border-purple-100 p-5 shadow-sm">
      <div className="flex items-center space-x-2 mb-3">
        <div className="p-1.5 bg-purple-100 rounded-md text-purple-600">
          <i className="fa-solid fa-check-to-slot text-sm"></i>
        </div>
        <h4 className="text-sm font-bold text-purple-900">Voting Rules</h4>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start text-xs text-text-secondary">
          <span className="bg-white text-purple-600 font-bold rounded-full w-5 h-5 flex items-center justify-center border border-purple-100 mr-2 shadow-sm shrink-0">
            1
          </span>
          <span className="pt-0.5">
            Upvote ideas that you want to see implemented.
          </span>
        </li>
        <li className="flex items-start text-xs text-text-secondary">
          <span className="bg-white text-purple-600 font-bold rounded-full w-5 h-5 flex items-center justify-center border border-purple-100 mr-2 shadow-sm shrink-0">
            2
          </span>
          <span className="pt-0.5">
            Use <strong>Remix</strong> to suggest improvements to existing
            ideas.
          </span>
        </li>
        <li className="flex items-start text-xs text-text-secondary">
          <span className="bg-white text-purple-600 font-bold rounded-full w-5 h-5 flex items-center justify-center border border-purple-100 mr-2 shadow-sm shrink-0">
            3
          </span>
          <span className="pt-0.5">
            Discussion is open for constructive feedback.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ModeExplanationSection;
