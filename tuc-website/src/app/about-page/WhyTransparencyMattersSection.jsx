const WhyTransparencyMattersSection = () => {
  return (
    <section
      id="why-transparency-matters-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-cool-gray"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            Why Transparency Matters
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-dark-cyan mb-4 sm:mb-8 mx-auto"></div>
        </div>

        <div className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-10 lg:p-12 mb-8 sm:mb-10">
          <p className="text-base sm:text-lg md:text-xl text-medium-gray leading-relaxed mb-4 sm:mb-6">
            Transparency isnt a marketing tactic—its a structural requirement
            for building trust. When people can see how decisions are made, they
            are more likely to believe the system operates fairly. When
            reasoning is documented, mistakes can be identified and corrected.
            When processes are visible, corruption becomes harder.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-medium-gray leading-relaxed">
            Most systems fail not because of technical problems, but because
            trust erodes. Contributors stop participating when they realize they
            are being exploited. Users leave when they discover hidden agendas.
            Communities collapse when leadership becomes opaque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "Transparency Enables Accountability",
              text: "When decisions are documented, they can be questioned. When processes are visible, they can be improved. When mistakes are acknowledged, they can be learned from. Accountability requires visibility. Opaque systems protect bad decisions. Transparent systems expose them.",
            },
            {
              title: "Transparency Reduces Corruption",
              text: "Corruption thrives in opacity. When processes are hidden, it's easier to manipulate outcomes. When decisions aren't documented, it's easier to rewrite history. When attribution isn't tracked, it's easier to steal credit. Transparency doesn't eliminate corruption, but it makes it significantly harder.",
            },
            {
              title: "Transparency Builds Trust",
              text: "People trust systems they can understand. When the reasoning is clear, when the process is visible, when the outcomes are predictable, trust accumulates. Opacity breeds suspicion; transparency builds confidence. Trust is the foundation of collaboration. Without it, coordination becomes impossible.",
            },
            {
              title: "Transparency Enables Learning",
              text: "When decisions and outcomes are documented, patterns become visible. Mistakes can be analyzed and avoided. Successes can be replicated. Knowledge accumulates instead of disappearing when people leave. Opaque systems lose knowledge. Transparent systems preserve it.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-cool-gray rounded-lg p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-dark-gray mb-3 sm:mb-4">
                {item.title}
              </h3>
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

export default WhyTransparencyMattersSection;
