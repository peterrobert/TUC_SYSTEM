const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-300 mx-auto px-4 space-y-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Structured Idea{" "}
              <span className="text-purple-600">Governance</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Maintain control over the creative process with distinct modes.
              Start with{" "}
              <span className="font-medium text-gray-900">Brainstorm</span> for
              volume, switch to{" "}
              <span className="font-medium text-gray-900">Voting</span> for
              consensus, and use{" "}
              <span className="font-medium text-gray-900">Contest</span> for
              final selection.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-purple-600 mt-1"></i>
                <span className="text-gray-700">
                  Time-boxed phases to keep momentum
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-purple-600 mt-1"></i>
                <span className="text-gray-700">
                  Role-based permissions for moderation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-purple-600 mt-1"></i>
                <span className="text-gray-700">
                  Clear visibility of process status
                </span>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 relative">
              <div className="flex gap-4 mb-6 border-b border-gray-100 pb-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-0.5 h-full bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-4 opacity-50">
                  <h4 className="font-bold text-gray-900">Brainstorming</h4>
                  <p className="text-xs text-gray-500">Aug 12 - Aug 15</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-100"></div>
                  <div className="w-0.5 h-full bg-gray-200"></div>
                </div>
                <div className="flex-1 pb-4">
                  <h4 className="font-bold text-purple-700">Voting Phase</h4>
                  <p className="text-xs text-purple-600 font-medium">
                    Active Now • 2 days left
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex-1 pb-4 opacity-50">
                  <h4 className="font-bold text-gray-900">Results</h4>
                  <p className="text-xs text-gray-500">Aug 20</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 relative overflow-hidden">
              <svg
                className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                viewBox="0 0 400 300"
              >
                <path
                  d="M50,50 Q200,150 350,250"
                  stroke="#7C3AED"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10,5"
                />
              </svg>

              <div className="relative z-10 space-y-6">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Original Idea
                    </span>
                  </div>
                  <p className="text-sm text-gray-800 font-medium">
                    Weekly team lunch
                  </p>
                </div>

                <div className="flex justify-center">
                  <i className="fa-solid fa-arrow-down text-gray-300"></i>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 ml-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-code-branch text-purple-500 text-xs"></i>
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                      Remix v1
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 font-semibold">
                    Weekly team lunch with rotating cuisine themes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              <span className="text-purple-600">Remix</span> & Improve Ideas
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Great ideas evolve. Our unique Remix feature allows participants
              to branch off existing entries, adding detail or refinement
              without losing the original context.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-purple-600 mt-1"></i>
                <span className="text-gray-700">
                  Track idea lineage visually
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-purple-600 mt-1"></i>
                <span className="text-gray-700">
                  Give credit to original creators
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check text-purple-600 mt-1"></i>
                <span className="text-gray-700">
                  Merge best features into one solution
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transparent{" "}
              <span className="text-purple-600">Ranking System</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Move beyond simple likes. Our weighted ranking algorithms ensure
              that high-quality, consensus-driven ideas naturally rise to the
              top, filtering out noise.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-gray-900">10x</span>
                <span className="text-sm text-gray-500 font-medium">
                  Faster Consensus
                </span>
              </div>
              <div className="w-px bg-gray-300 h-12"></div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold text-gray-900">100%</span>
                <span className="text-sm text-gray-500 font-medium">
                  Traceable Votes
                </span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 text-2xl font-bold text-purple-600 text-center">
                    1
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg h-10 overflow-hidden relative">
                    <div className="absolute top-0 left-0 bottom-0 bg-purple-100 w-[85%] rounded-lg"></div>
                    <div className="absolute top-0 left-0 bottom-0 flex items-center px-4">
                      <span className="text-sm font-medium text-gray-900 relative z-10">
                        Integration with Slack
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-gray-700">85%</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 text-2xl font-bold text-gray-400 text-center">
                    2
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg h-10 overflow-hidden relative">
                    <div className="absolute top-0 left-0 bottom-0 bg-gray-200 w-[60%] rounded-lg"></div>
                    <div className="absolute top-0 left-0 bottom-0 flex items-center px-4">
                      <span className="text-sm font-medium text-gray-900 relative z-10">
                        Email Digest
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-gray-700">60%</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 text-2xl font-bold text-gray-400 text-center">
                    3
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg h-10 overflow-hidden relative">
                    <div className="absolute top-0 left-0 bottom-0 bg-gray-200 w-[45%] rounded-lg"></div>
                    <div className="absolute top-0 left-0 bottom-0 flex items-center px-4">
                      <span className="text-sm font-medium text-gray-900 relative z-10">
                        Custom Avatars
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-gray-700">45%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
