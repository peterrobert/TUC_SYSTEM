const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-300 mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Top10 System Works
          </h2>
          <p className="text-gray-600">
            A structured process designed to move from chaotic brainstorming to
            clear, ranked outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <i className="fa-regular fa-lightbulb"></i>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-500 border border-gray-200">
                1
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                Define Your Idea
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Set the context, purpose, and constraints. Create a list container
              that frames the problem clearly for your team.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-users-viewfinder"></i>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-500 border border-gray-200">
                2
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                Collect Contributions
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Invite members to submit entries. Enable remixing to build upon
              existing ideas rather than starting from scratch.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-soft hover:shadow-soft-hover transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-arrow-up-right-dots"></i>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-xs font-bold text-gray-500 border border-gray-200">
                3
              </span>
              <h3 className="text-lg font-bold text-gray-900">Rank & Evolve</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Community votes surface the best concepts. Use Contest Mode to
              finalize the winners and move to execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
