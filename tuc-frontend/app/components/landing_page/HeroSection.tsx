import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="intro"
      className="relative pt-32 pb-20 overflow-hidden hero-gradient"
    >
      <div className="max-w-300 mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-purple-100 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-purple-700 tracking-wide uppercase">
                Structured Idea Governance
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Build Better{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-purple-800">
                Ideas Together
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Create structured Top10 lists. Invite contributions. Rank what
              matters. Evolve ideas collaboratively in a calm, focused
              environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-purple-600 hover:bg-purple-700 text-white cursor-pointer font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-purple-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                <i className="fa-solid fa-plus text-sm"></i>
                Create a Top10
              </button>
              <button className="bg-white cursor-pointer hover:bg-gray-50 text-gray-700 border border-gray-200 font-medium px-8 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
                <i className="fa-regular fa-compass text-gray-500"></i>
                Explore Lists
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-circle-check text-purple-600"></i>
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-circle-check text-purple-600"></i>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="border-b border-gray-100 bg-gray-50/50 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <i className="fa-solid fa-rocket text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Q4 Product Roadmap
                    </h3>
                    <p className="text-xs text-gray-500">
                      Voting Mode • Ends in 2 days
                    </p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                    width={24} // Tailwind w-6 = 24px
                    height={24} // Tailwind h-6 = 24px
                    className="rounded-full border-2 border-white"
                    alt="Avatar 1"
                  />
                  <Image
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                    alt="Avatar 3"
                  />
                  <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] text-gray-500 font-medium">
                    +5
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start gap-4 p-3 bg-white border border-purple-100 rounded-xl shadow-sm relative overflow-hidden group hover:border-purple-300 transition-colors">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                  <div className="flex flex-col items-center gap-1 min-w-12">
                    <button className="w-8 h-8 cursor-pointer rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors flex items-center justify-center">
                      <i className="fa-solid fa-caret-up"></i>
                    </button>
                    <span className="text-sm font-bold text-gray-900">42</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">
                      AI-Powered Analytics Dashboard
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Implement predictive analytics to help users forecast
                      trends based on historical data.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[10px] font-medium">
                        High Impact
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-medium">
                        Technical
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white transition-colors">
                  <div className="flex flex-col items-center gap-1 min-w-12">
                    <button className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-400 hover:border-purple-300 hover:text-purple-600 transition-colors flex items-center justify-center">
                      <i className="fa-solid fa-caret-up"></i>
                    </button>
                    <span className="text-sm font-bold text-gray-600">28</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      Mobile App Refresh
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Update the mobile interface to match the new design system
                      guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white transition-colors">
                  <div className="flex flex-col items-center gap-1 min-w-12">
                    <button className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-400 hover:border-purple-300 hover:text-purple-600 transition-colors flex items-center justify-center">
                      <i className="fa-solid fa-caret-up"></i>
                    </button>
                    <span className="text-sm font-bold text-gray-600">15</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      Dark Mode Support
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Add system-wide dark mode toggle for better accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-4 top-20 bg-white rounded-lg shadow-lg border border-gray-100 p-3 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <i className="fa-solid fa-check text-xs"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Idea Approved</p>
                <p className="text-[10px] text-gray-500">Just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
