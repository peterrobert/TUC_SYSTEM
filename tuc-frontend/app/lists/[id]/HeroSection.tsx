import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="list-banner"
      className="bg-white border-b-gray-500  pt-10 pb-0 px-4 lg:px-6 mt-15"
    >
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-600 text-white border border-purple-700 shadow-sm">
                <i className="fa-solid fa-check-to-slot mr-1.5"></i> Voting Mode
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400 text-white border border-success/20">
                <i className="fa-solid fa-circle text-[8px] mr-1.5 animate-pulse"></i>{" "}
                Active
              </span>
              <span className="text-xs text-text-secondary font-medium">
                Ends in 2 days
              </span>
            </div>
            <h1 className="text-3xl font-bold text-text-purple tracking-tight mb-1">
              Future of Remote Work 2025
            </h1>
            <p className="text-text-secondary max-w-2xl text-sm">
              Rank the proposed strategies for our hybrid workplace policy.
              Upvote the ideas you believe will have the highest impact on
              productivity and culture.
            </p>
          </div>
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="flex -space-x-2 overflow-hidden">
              <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Avatar 1"
                width={32} // h-8 = 32px
                height={32}
              />
              <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Avatar 3"
                width={32}
                height={32}
              />
              <Image
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                alt="Avatar 4"
                width={32}
                height={32}
              />
              <div className="h-8 w-8 rounded-full ring-2 ring-white text-white bg-gray-400 flex items-center justify-center text-xs font-medium text-text-secondary">
                +42
              </div>
            </div>
            <div className="h-8 w-px bg-divider mx-2"></div>
            <button
              className="text-text-secondary hover:text-purple-600 transition-colors p-2 rounded-ui hover:bg-surface-muted tooltip"
              data-tip="Share"
            >
              <i className="fa-solid fa-share-nodes"></i>
            </button>
            <button className="text-text-secondary hover:text-purple-600 transition-colors p-2 rounded-ui hover:bg-surface-muted">
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>

        <div className="flex space-x-8 border-b-gray-500 border-divider">
          <a
            href="#"
            className="border-b-2 border-purple-600 pb-4 text-sm font-semibold text-purple-600 flex items-center"
          >
            <i className="fa-solid fa-list-ol mr-2"></i> Ranking{" "}
            <span className="ml-2 bg-purple-100 text-purple-700 py-0.5 px-2 rounded-full text-xs font-bold">
              24
            </span>
          </a>
          <a
            href="#"
            className="border-b-2 border-transparent pb-4 text-sm font-medium text-text-secondary hover:text-text-purple hover:border-gray-300 transition-all flex items-center"
          >
            <i className="fa-regular fa-comments mr-2"></i> Discussion
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
