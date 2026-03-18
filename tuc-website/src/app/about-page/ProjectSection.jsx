import StackedLevelCards from "../../components/about-page-components";

const ProjectSection = () => {
  return (
    <section
      id="the-project-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            The Project
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-deep-blue mb-6 sm:mb-8 mx-auto"></div>
        </div>

        <div className="bg-white border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-dark-gray mb-4 sm:mb-6">
            Long-term Purpose
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed mb-4 sm:mb-6">
            TUC exists to solve a fundamental coordination problem: talented
            people have ideas, organizations need those ideas, but the gap
            between having an idea and seeing it implemented is vast. We're
            building infrastructure that makes collaboration less extractive,
            more transparent, and genuinely useful.
          </p>
          <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed mb-4 sm:mb-6">
            This isn't a quick fix or a temporary solution. We're creating a
            system designed to last decades, not quarters. The architecture
            prioritizes sustainability over growth, clarity over complexity, and
            contributor welfare over investor returns.
          </p>
          <p className="text-base sm:text-lg md:text-lg text-medium-gray leading-relaxed">
            Our purpose is simple: help good ideas find the resources, people,
            and momentum they need to become real. Everything else—the features,
            the technology, the organizational structure—serves that goal.
          </p>
        </div>

        <div className="bg-deep-blue text-white rounded-lg p-6 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 sm:mb-6">
            Integrity-First Philosophy
          </h3>
          <p className="text-base sm:text-lg md:text-lg leading-relaxed mb-4 sm:mb-6">
            TUC is all about access. Without teaching - through exposure!
            Without theory lecturing and explaining - through practical learning
            , and examples of this is Below are three versions saying the exact
            same thing, just tuned for clarity and depth. Use Level 1 for
            general visitors, Level 2 for engaged users, Level 3 for partners,
            builders, and reviewers.
          </p>
          {/* --- Stacked Cards Components */}
          <StackedLevelCards />
          <div className="border-t border-white border-opacity-20 mt-6 sm:mt-10 pt-4 sm:pt-8">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed italic">
              "Integrity means the system works the way we say it does, even
              when no one is watching, even when shortcuts would be easier, even
              when the pressure to compromise is intense."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
