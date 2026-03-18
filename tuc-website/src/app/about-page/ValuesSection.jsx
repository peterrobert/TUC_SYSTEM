const ValuesSection = () => {
  return (
    <section
      id="values-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            Values
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-deep-blue mb-4 sm:mb-8 mx-auto"></div>
          <p className="text-base sm:text-lg text-medium-gray max-w-full sm:max-w-3xl mx-auto text-center">
            These arent aspirational statements or marketing copy. They are
            architectural constraints that shape how the system works and what
            it can become.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Transparency */}
          <div
            id="value-transparency"
            className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10 hover:border-deep-blue transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                <i className="fa-solid fa-eye text-3xl sm:text-4xl text-deep-blue"></i>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                  Transparency
                </h3>
                <p className="text-base sm:text-lg text-medium-gray font-medium">
                  Visibility by default, opacity only when necessary
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  What It Means
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  Every decision, change, and piece of reasoning is documented
                  and accessible. Contributors can see how the system works, why
                  choices were made, and what is happening at any given time. No
                  hidden agendas, no opaque processes, no information asymmetry.
                </p>
              </div>

              <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  How It is Enforced
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  System changes require public documentation. Decision logs are
                  maintained and searchable. Contribution tracking is visible to
                  all participants. The architecture makes opacity harder than
                  transparency.
                </p>
              </div>

              <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  Why It Matters
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  Transparency builds trust. When people can see how things
                  work, they are more likely to participate. When decisions are
                  visible, they can be questioned and improved. Opacity enables
                  extraction; transparency prevents it.
                </p>
              </div>
            </div>
          </div>

          {/* No Extraction */}
          <div
            id="value-no-extraction"
            className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10 hover:border-deep-blue transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                <i className="fa-solid fa-ban text-3xl sm:text-4xl text-deep-blue"></i>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                  No Extraction
                </h3>
                <p className="text-base sm:text-lg text-medium-gray font-medium">
                  Value flows to creators, not extractors
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  What It Means
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  The system is designed so that people who create value receive
                  the benefits. No investor className extracting surplus, no
                  platform taking disproportionate cuts, no intermediaries
                  capturing value they did not create. Contributors are
                  stakeholders, not resources.
                </p>
              </div>

              <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  How It is Enforced
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  Ownership structures prevent extraction. Attribution systems
                  ensure credit flows correctly. Economic models prioritize
                  contributor welfare over investor returns. The architecture
                  makes extraction structurally difficult.
                </p>
              </div>

              <div className="border-l-4 border-deep-blue pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  Why It Matters
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  People stop contributing when they realize they are being
                  exploited. Non-extractive systems attract better contributors,
                  produce better work, and remain sustainable longer. This is
                  not altruism it is structural integrity.
                </p>
              </div>
            </div>
          </div>

          {/* Fair Attribution */}
          <div
            id="value-fair-attribution"
            className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10 hover:border-dark-cyan transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                <i className="fa-solid fa-award text-3xl sm:text-4xl text-dark-cyan"></i>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                  Fair Attribution
                </h3>
                <p className="text-base sm:text-lg text-medium-gray font-medium">
                  Credit belongs to those who create value
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  What It Means
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  Contributors receive recognition for their work. Ideas are
                  tracked to their originators. Contributions are visible and
                  verifiable. Credit is not controlled by gatekeepers or
                  captured by those with platform access.
                </p>
              </div>

              <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  How It is Enforced
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  Attribution is built into the data model. Contributions are
                  immutably logged. Recognition systems are transparent and
                  verifiable. The architecture makes unfair attribution visible
                  and correctable.
                </p>
              </div>

              <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  Why It Matters
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  People need to know their work matters. Attribution is not
                  vanity it is proof of impact. When credit flows fairly,
                  contributors are more likely to keep contributing. Reputation
                  becomes portable and verifiable.
                </p>
              </div>
            </div>
          </div>

          {/* Sustainability */}
          <div
            id="value-sustainability"
            className="bg-white border-2 border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10 hover:border-dark-cyan transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pale-blue rounded-lg flex items-center justify-center shrink-0">
                <i className="fa-solid fa-seedling text-3xl sm:text-4xl text-dark-cyan"></i>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                  Sustainability
                </h3>
                <p className="text-base sm:text-lg text-medium-gray font-medium">
                  Built for decades, not quarters
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  What It Means
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  The system is designed to last. No technical debt
                  accumulation, no growth-at-any-cost mentality, no short-term
                  thinking. Decisions prioritize long-term viability over
                  immediate gains. We build for the future, not just the
                  present.
                </p>
              </div>

              <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  How It is Enforced
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  Revenue models support maintenance, not extraction. Technical
                  architecture prioritizes maintainability. Growth happens at
                  sustainable pace. The structure prevents shortcuts that create
                  long-term problems.
                </p>
              </div>

              <div className="border-l-4 border-dark-cyan pl-3 sm:pl-4">
                <h4 className="font-semibold text-dark-gray mb-1 sm:mb-2">
                  Why It Matters
                </h4>
                <p className="text-base sm:text-base text-medium-gray leading-relaxed">
                  Most systems collapse under their own growth or die when
                  funding runs out. Sustainability means the system can survive
                  market changes, team transitions, and shifting priorities.
                  Infrastructure needs to outlast its creators.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-deep-blue text-white rounded-lg p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-serif font-bold mb-4 sm:mb-6 text-center">
            Values as Constraints
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-full sm:max-w-4xl mx-auto mb-4 sm:mb-8">
            These values are not aspirational they are operational. They
            constrain what we can build, how we can build it, and what success
            looks like. This makes some things harder, but it also makes the
            system more trustworthy, more durable, and more aligned with its
            stated purpose.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-full sm:max-w-4xl mx-auto">
            When faced with a choice between growth and integrity, we choose
            integrity. When faced with a choice between speed and
            sustainability, we choose sustainability. When faced with a choice
            between extraction and fairness, we choose fairness. Every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
