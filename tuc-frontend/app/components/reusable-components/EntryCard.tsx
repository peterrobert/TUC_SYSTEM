import Image from "next/image";

const EntryCard = () => {
  return (
    <div
      id="entry-1"
      className="group cursor-pointer bg-surface rounded-md rounded-card border border-purple-200 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-400 to-purple-600"></div>

      <div className="p-5 pl-7 flex items-start gap-4">
        <div className="shrink-0 flex flex-col items-center justify-start pt-1 min-w-12">
          <span className="text-2xl font-bold text-purple-900 rank-number leading-none">
            01
          </span>
          <div className="mt-1 flex flex-col items-center">
            <i className="fa-solid fa-caret-up text-success text-xs"></i>
            <span className="text-[10px] font-medium text-success">2</span>
          </div>
        </div>

        <div className="grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-text-purple leading-tight mb-1 group-hover:text-purple-700 transition-colors">
                Hybrid-First Weekly Schedule
              </h3>
              <div className="flex items-center text-xs text-text-secondary space-x-2 mb-3">
                <Image
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                  alt="User"
                  width={16}
                  height={16}
                  className="w-4 h-4 rounded-full"
                />
                <span className="font-medium">Sarah Chen</span>
                <span className="text-text-muted">•</span>
                <span>2 hours ago</span>
                <span className="text-text-muted">•</span>
                <span className="text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-purple-100">
                  Top Contender
                </span>
              </div>
            </div>

            <button className="cursor-pointer flex flex-col items-center justify-center bg-gray-100 hover:bg-success/10 border border-divider hover:border-success/30 rounded-lg p-2 w-14 transition-all group/vote">
              <i className="fa-solid fa-chevron-up text-text-muted group-hover/vote:text-success mb-0.5 text-sm transition-colors"></i>
              <span className="font-bold text-text-purple group-hover/vote:text-success text-sm">
                142
              </span>
            </button>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4 pr-4">
            Mandatory in-office days should be synchronized across teams (e.g.,
            Tue/Thu) to maximize collaboration, while allowing complete
            flexibility for the remaining 3 days.
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-dashed border-divider">
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-1.5 text-text-secondary hover:text-purple-600 transition-colors text-xs font-medium px-2 py-1 rounded hover:bg-surface-muted">
                <i className="fa-solid fa-code-branch rotate-90"></i>
                <span>Remix</span>
              </button>
              <button className="flex items-center space-x-1.5 text-text-secondary hover:text-purple-600 transition-colors text-xs font-medium px-2 py-1 rounded hover:bg-surface-muted">
                <i className="fa-regular fa-comment"></i>
                <span>12 Comments</span>
              </button>
            </div>
            <div className="flex -space-x-1.5">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                alt="Avatar 2"
                width={20}
                height={20}
                className="w-5 h-5 rounded-full border border-white"
              />

              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Avatar 3"
                width={20}
                height={20}
                className="w-5 h-5 rounded-full border border-white"
              />

              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                alt="Avatar 4"
                width={20}
                height={20}
                className="w-5 h-5 rounded-full border border-white"
              />
              <div className="w-5 h-5 rounded-full border border-white bg-purple-100 flex items-center justify-center text-[8px] font-bold text-purple-700">
                +8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
