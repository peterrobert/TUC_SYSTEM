const EngagementStatsSection = () => {
  return (
    <div className="bg-gray-100 rounded-md border border-border shadow-card p-5">
      <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4">
        Live Engagement
      </h4>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-100 p-3 rounded-lg border border-divider text-center group hover:border-purple-200 transition-colors cursor-pointer">
          <div className="text-2xl font-bold text-text-purple group-hover:text-purple-600 transition-colors">
            482
          </div>
          <div className="text-[10px] text-text-secondary font-medium uppercase mt-1">
            Total Votes
          </div>
        </div>
        <div className="bg-surface-muted p-3 rounded-lg border border-divider text-center group hover:border-purple-200 transition-colors cursor-pointer">
          <div className="text-2xl font-bold text-text-purple group-hover:text-purple-600 transition-colors">
            86
          </div>
          <div className="text-[10px] text-text-secondary font-medium uppercase mt-1">
            Participants
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-text-secondary font-medium">
              Voting Participation
            </span>
            <span className="font-bold text-purple-600">72%</span>
          </div>
          <div className="w-full bg-surface-muted rounded-full h-2 overflow-hidden">
            <div
              className="bg-purple-500 h-2 rounded-full relative"
              style={{ width: "72%" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-divider">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-text-secondary">
              Activity Trend
            </span>
            <span className="text-[10px] text-success bg-success/10 px-1.5 py-0.5 rounded font-medium">
              +12%
            </span>
          </div>
          <div className="h-12 flex items-end justify-between space-x-1">
            <div className="w-1/6 bg-purple-100 rounded-t-sm h-[40%]"></div>
            <div className="w-1/6 bg-purple-100 rounded-t-sm h-[60%]"></div>
            <div className="w-1/6 bg-purple-100 rounded-t-sm h-[30%]"></div>
            <div className="w-1/6 bg-purple-200 rounded-t-sm h-[70%]"></div>
            <div className="w-1/6 bg-purple-300 rounded-t-sm h-[90%]"></div>
            <div className="w-1/6 bg-purple-500 rounded-t-sm h-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementStatsSection;
