const WhatWeDontDoSection = () => {
  return (
    <section
      id="what-we-dont-do-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            What We Dont Do
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-deep-blue mb-4 sm:mb-8 mx-auto"></div>
          <p className="text-base sm:text-lg text-medium-gray max-w-full sm:max-w-3xl mx-auto">
            Sometimes clarity comes from stating what you wont do, not just what
            you will.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "No Growth Theater",
              icon: "fa-times-circle",
              text: "We don't manufacture growth metrics to attract investors or create FOMO. User counts, engagement rates, and vanity metrics aren't how we measure success. We grow when capacity genuinely exists, not when a pitch deck demands it.",
            },
            {
              title: "No Dark Patterns",
              icon: "fa-times-circle",
              text: "We don't manipulate users into actions they didn't intend. No misleading CTAs, no hidden opt-outs, no addictive engagement loops. If the system needs tricks to retain users, the system isn't valuable enough.",
            },
            {
              title: "No Hustle Culture",
              icon: "fa-times-circle",
              text: "We don't glorify overwork or pressure people to sacrifice their well-being for the project. Contribution is optional, boundaries are respected, and burnout isn't a badge of honor. Sustainable systems require sustainable work practices.",
            },
            {
              title: "No Opaque Decisions",
              icon: "fa-times-circle",
              text: "We don't make major changes without explanation. No surprise pivots, no hidden agendas, no \"trust us\" without reasoning. If we can't explain why we did something, we probably shouldn't have done it.",
            },
            {
              title: "No Extraction",
              icon: "fa-times-circle",
              text: "We don't build systems that extract value from contributors for investor benefit. No platform fees that capture disproportionate value, no ownership structures that prioritize capital over creators, no economic models designed to extract surplus.",
            },
            {
              title: "No False Promises",
              icon: "fa-times-circle",
              text: "We don't promise things we can't deliver. No overhyped features, no unrealistic timelines, no aspirational roadmaps presented as commitments. We're honest about what exists, what's being built, and what's still theoretical.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-l-4 border-deep-blue p-6 sm:p-8 rounded-lg"
            >
              <div className="flex items-start space-x-3 mb-3">
                <i
                  className={`fa-solid ${item.icon} text-2xl sm:text-3xl text-deep-blue mt-1 shrink-0`}
                ></i>
                <h3 className="text-xl sm:text-2xl font-semibold text-dark-gray">
                  {item.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDontDoSection;
