import React from "react";

const LevelCard = ({ color, title, subtitle, children }) => {
  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 bg-white`}
      style={{ borderColor: color }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      </div>

      <p className="text-sm md:text-base font-medium text-gray-600 mb-4">
        {subtitle}
      </p>

      <div className="text-gray-700 space-y-3 leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </div>
  );
};

const TUCThreeLevelStrategy = () => {
  return (
    <section className="w-full bg-neutral-50 py-16 px-4 md:px-10 lg:px-20 border-y border-cool-gray">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-14 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          id="tuc-3-level-strategy"
        >
          TUC’s 3-Level Website Strategy
        </h2>

        <div className="text-gray-700 leading-relaxed space-y-4 text-base md:text-lg">
          <p>
            Everything in TUC begins with one shared entry point. Everyone
            accesses the same conversation — what differs is how deeply they
            engage.
          </p>

          <p>
            Some want a concise overview. Others want operational detail.
            Builders and systems thinkers want architecture, trade-offs, and
            ripple effects. The three-level structure enables all of these
            without fragmenting the experience.
          </p>

          <p>
            This layered approach keeps the surface accessible while preserving
            structural depth underneath — allowing participation at any pace,
            without exclusion or overload.
          </p>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {/* Level 1 */}
        <LevelCard
          color="#7C3AED"
          title="Level 1 — Start Here"
          subtitle="Simple. Honest. Human."
        >
          <p>
            A clear, jargon-free introduction designed for newcomers or casual
            visitors. It explains what TUC is, why it exists, and whether it is
            relevant to the reader.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>What is TUC?</li>
            <li>What problems does it address?</li>
            <li>How can someone get involved?</li>
          </ul>

          <p>
            No commitment required — exploration and curiosity are enough at
            this level.
          </p>
        </LevelCard>

        {/* Level 2 */}
        <LevelCard
          color="#2563EB"
          title="Level 2 — How It Works"
          subtitle="Structure, flow, and use cases"
        >
          <p>
            Moves beyond introduction into system operation. Explains workflows,
            tools, and interaction patterns across modules.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Suggestion Box mechanics</li>
            <li>Top10 system value exchange</li>
            <li>DevOps and infrastructure planning</li>
          </ul>

          <p>
            Designed to bridge understanding between concept and real
            engagement.
          </p>
        </LevelCard>

        {/* Level 3 */}
        <LevelCard
          color="#EA580C"
          title="Level 3 — Full System View"
          subtitle="Architectural and regenerative thinking"
        >
          <p>
            The systems layer connecting architecture, governance, and long-term
            adaptation. Intended for builders, strategists, and stewards.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Remix logic and incentive design</li>
            <li>Ripple effects and failure analysis</li>
            <li>Revenue models and module evolution</li>
          </ul>

          <p>
            Includes access to extended documentation and discovery-phase
            research for deep analysis.
          </p>
        </LevelCard>
      </div>

      {/* Closing Section */}
      <div className="max-w-4xl mx-auto mt-16 text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
        <p>
          The layered structure is foundational to pagination and navigation
          strategy. It preserves simplicity while supporting systemic depth and
          standardization.
        </p>

        <p>
          Whether visitors arrive out of curiosity, operational interest, or
          architectural exploration, each pathway uses consistent structure and
          naming — differing only in depth of detail.
        </p>

        <p>
          Engagement is self-directed. No sign-up, commitment, or role selection
          is required. The design supports exploration now or later, allowing
          participants to move between levels as understanding evolves.
        </p>
      </div>
    </section>
  );
};

export default TUCThreeLevelStrategy;
