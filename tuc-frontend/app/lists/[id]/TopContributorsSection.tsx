import Image from "next/image";
const TopContributorsSection = () => {
  return (
    <div className="bg-white rounded-card  shadow-card p-0 overflow-hidden">
      <div className="p-4 border-b border-divider flex justify-between items-center bg-surface-muted/30">
        <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">
          Top Contributors
        </h4>
        <button className="text-[10px] font-medium text-primary-600 hover:text-primary-800">
          View All
        </button>
      </div>
      <div className="divide-y divide-divider">
        <div className="p-3 flex items-center justify-between hover:bg-surface-muted transition-colors cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                alt="User Avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-divider"
              />
              <div className="absolute -top-1 -right-1 bg-yellow-400 text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full border border-white shadow-sm">
                1
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-text-primary">
                Sarah Chen
              </div>
              <div className="text-[10px] text-text-muted">
                5 ideas • 142 votes
              </div>
            </div>
          </div>
          <div className="text-xs font-bold text-primary-600">320 pts</div>
        </div>
        <div className="p-3 flex items-center justify-between hover:bg-surface-muted transition-colors cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                alt="User avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-divider"
              />
              <div className="absolute -top-1 -right-1 bg-gray-300 text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full border border-white shadow-sm">
                2
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-text-primary">
                David Kim
              </div>
              <div className="text-[10px] text-text-muted">
                3 ideas • 98 votes
              </div>
            </div>
          </div>
          <div className="text-xs font-bold text-primary-600">215 pts</div>
        </div>
        <div className="p-3 flex items-center justify-between hover:bg-surface-muted transition-colors cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="User avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-divider object-cover"
              />
              <div className="absolute -top-1 -right-1 bg-amber-600 text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full border border-white shadow-sm">
                3
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-text-primary">
                Elena Rodriguez
              </div>
              <div className="text-[10px] text-text-muted">
                2 ideas • 84 votes
              </div>
            </div>
          </div>
          <div className="text-xs font-bold text-primary-600">180 pts</div>
        </div>
      </div>
    </div>
  );
};

export default TopContributorsSection;
