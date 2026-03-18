import peterImage from "../../assets/peter.jpg";
import jeffImage from "../../assets/jeff.jpeg";
import estherImage from "../../assets/esther.jpg";
import elbieImage from "../../assets/elbie.jpg";
const TeamSection = () => {
  return (
    <section
      id="the-team-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-cool-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            The Team
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-dark-cyan mb-4 sm:mb-8 mx-auto"></div>
          <p className="text-base sm:text-lg text-medium-gray max-w-full sm:max-w-3xl mx-auto text-center">
            A small, deliberate team focused on building something sustainable.
            No hierarchy theater, no inflated titles, just people doing the
            work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-12 sm:mb-16">
          {/* Jeff */}
          <div
            id="team-member-jeff"
            className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <img
                src={`${jeffImage}`}
                alt="Jeff"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover shrink-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                  Jeff
                </h3>
                <p className="text-lg sm:text-xl text-medium-gray font-medium mb-2 sm:mb-4">
                  Founder / Architect
                </p>
                <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-medium-gray">
                  <span className="flex items-center">
                    <i className="fa-solid fa-envelope mr-2 text-deep-blue"></i>
                    jeff@tuc.system
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Role & Responsibilities
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Jeff is responsible for TUC’s vision, regenerative system
                  design, long-term direction, and architectural integrity. He
                  focuses on identifying EoT (Efficiency of Things) and VoT
                  (Value of Things)—anything underutilized, inaccessible, or
                  undervalued, including people, ideas, resources, information,
                  efforts, and systems—and determining how those elements can
                  fit together beyond the constraints of the broken systems they
                  come from.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  A central responsibility of his role is ensuring that all
                  design decisions remain aligned with WhoWeAre—TUC’s Vision,
                  Mission, Core Values, and Principles—as the platform evolves.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Jeff keeps a close eye on global patterns and emerging
                  behaviors, anticipating red flags related to borderless
                  coordination at scale. This includes identifying gaps,
                  surfacing root causes behind systemic problems, and designing
                  regenerative systems that reduce waste, friction, and
                  fragmentation—while remaining resilient to noise,
                  overreaction, burnout, and decisions that risk burning
                  bridges.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  He is especially focused on managing the tension between
                  coherence vs scale, ensuring that growth does not come at the
                  cost of integrity, trust, or long-term viability.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Philosophy
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Jeff believes that most coordination problems are design
                  problems, not people problems. When collaboration feels
                  extractive, opaque, or exhausting, the system—not the
                  individuals using it—is usually broken.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  He is cautious of urgency-driven decision-making, recognizing
                  that noise and overreaction can accelerate burnout, damage
                  trust, and fracture long-term collaboration. Sustainable
                  progress requires systems that respect real human capacity,
                  allow optional contribution, and protect contributors from
                  pressure-driven participation.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Jeff views regenerative design as TUC’s core advantage:
                  systems that others can build on freely, learn from safely,
                  and engage with equitably—without requiring constant
                  visibility, performance, or self-promotion.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Background
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Jeff has spent years watching good ideas fail due to
                  organizational dysfunction, extractive systems, and misaligned
                  incentives. He has seen talented people burned out or
                  sidelined—not because their ideas lacked merit, but because
                  the systems around them were fragile, politicized, or poorly
                  designed.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  TUC emerged from a long period of quiet experimentation,
                  reflection, and iteration. Jeff often reflects on TUC’s full
                  potential—knowing it is vast—while remaining grounded in the
                  need to build systems that are functional, coherent, and
                  sustainable in the present.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  His greatest hope is that TUC reaches its tipping point
                  without losing coherence or forcing visibility where anonymity
                  is safer. Balancing that risk—between coherence and
                  scale—remains both a guiding discipline and a constant concern
                  as TUC grows.
                </p>
              </div>
            </div>
          </div>

          {/* Peter */}
          <div
            id="team-member-peter"
            className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <img
                src={`${peterImage}`}
                alt="Peter"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover shrink-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                  Peter
                </h3>
                <p className="text-lg sm:text-xl text-medium-gray font-medium mb-2 sm:mb-4">
                  DevOps / Platform Builder
                </p>
                <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-medium-gray">
                  <span className="flex items-center">
                    <i className="fa-solid fa-envelope mr-2 text-deep-blue"></i>
                    peter@tuc.system
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Role & Responsibilities
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Peter is responsible for infrastructure, deployment, and
                  technical implementation across TUC’s platform. He translates
                  abstract system concepts into working code and ensures that
                  the technical foundation can support the vision without
                  collapsing under its own weight.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Originally trained in civil engineering, Peter pivoted through
                  self-directed learning into logic, coding, and full-stack
                  development—bringing with him a systems mindset focused on
                  structure, load, durability, and long-term integrity. His role
                  often places him as the last line of responsibility when
                  systems must ship, stabilize, or recover.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Working under constrained resources and without the budget to
                  retain or attract a full-time team, Peter has frequently
                  carried solo responsibility for execution. During periods when
                  quitting would have been rational—particularly when he was the
                  last one standing—he chose to keep his head down, continue
                  shipping, and trust the system even when it existed more as
                  theory than fully functional reality.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Peter approaches unclear requirements by breaking work into
                  micro-tasks and moving forward incrementally. He treats
                  technical debt—whether inherited or unavoidable—as a shared
                  responsibility, with the long view that TUC itself is being
                  built to solve the coordination and follow-through challenges
                  that create such debt in the first place.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Philosophy
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Peter believes infrastructure should be invisible when it
                  works and transparent when it doesn’t. He prioritizes
                  stability over novelty, clarity over cleverness, and systems
                  that can be understood, maintained, and inherited by future
                  contributors.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Operating in TUC’s discovery and testing phase, Peter treats
                  mistakes as learning opportunities while resisting pressure to
                  “just ship” before systems are ready for the stage they are
                  in. He understands that TUC is not being built for a finished
                  end state, but for progressive learning—knowing the full
                  system will eventually require thousands of contributors and
                  far more resources than are currently available.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  He checks ego at the door, does not think in terms of “my
                  code,” and assumes that he will eventually be replaced by
                  people better suited to take the system further. That
                  expectation shapes how he builds: with survivability,
                  readability, and handoff in mind rather than personal
                  authorship.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Background
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Peter’s journey reflects a Zero-to-Hero arc defined less by
                  ambition than by persistence. Without relying on formal
                  credentials in software engineering, he taught himself through
                  repetition, failure, and continuous problem-solving—often when
                  systems broke repeatedly and no one was watching.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  He has seen firsthand how shortcuts and accumulated technical
                  debt can quietly undermine platforms, and how fragile systems
                  fail under social and operational complexity. Those
                  experiences have reinforced his preference for regenerative,
                  durable, and scalable systems over performative engineering.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Peter remains largely under the radar by choice, focused on
                  mastery without waiting to have it before moving forward. He
                  is still operating primarily in execution mode, but
                  increasingly enjoys exposure to C-level systems thinking and
                  the strategic layers of TUC’s design.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  He stays with TUC because he believes in the principle that
                  everyone walks through the same door—and because he
                  understands how a global, uncorruptable opportunity network
                  grounded in practical learning could change outcomes not just
                  for himself, but for his family and others like them
                </p>
              </div>
            </div>
          </div>

          {/* Esther */}
          <div
            id="team-member-peter"
            className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <img
                src={`${estherImage}`}
                alt="Esther"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover shrink-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                  Esther
                </h3>
                <p className="text-lg sm:text-xl text-medium-gray font-medium mb-2 sm:mb-4">
                  Lead AlphaBeta Contributor
                </p>
                <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-medium-gray">
                  <span className="flex items-center">
                    <i className="fa-solid fa-envelope mr-2 text-deep-blue"></i>
                    esther@tuc.system
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Role & Responsibilities
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Esther is a lead AlphaBeta contributor to TUC, playing a
                  sustained role in shaping its thinking around inclusion,
                  real-world impact, and long-term responsibility. She brings a
                  grounded, human-centered perspective to system
                  design—consistently evaluating how ideas translate into
                  practical outcomes for people most affected by fragmentation.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Her role focuses on reviewing content, structure, and
                  communication to surface blind spots, challenge assumptions,
                  and ensure alignment between TUC’s principles and how the
                  system is actually experienced. Esther’s contributions are
                  influential but non-directive, strengthening decision-making
                  through feedback, clarity, and ethical pressure-testing.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  She introduced the Business Model Canvas (BMC) into TUC
                  discussions to support clearer thinking around value creation
                  and sustainability, helping the team articulate trade-offs and
                  assess coherence across initiatives.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Philosophy
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Esther believes systems should invite participation rather
                  than demand performance. Clarity, accessibility, and
                  psychological safety are essential for meaningful
                  collaboration—especially in systems intended to serve
                  under-resourced or under-networked communities.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  She evaluates TUC through an impact-first lens, asking not
                  only whether ideas scale, but whether they remain fair,
                  humane, and accountable over time.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Background
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  With training in Criminology and Criminal Justice, Esther
                  brings insight into how power, access, and institutional
                  design affect behavior and opportunity. Her perspective helps
                  TUC avoid replicating the very exclusionary patterns it aims
                  to address.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Her continued engagement reflects a commitment to ensuring
                  that TUC’s growth does not come at the expense of clarity,
                  inclusion, or trust—and that responsibility to affected
                  communities remains central as the system evolves.
                </p>
              </div>
            </div>
          </div>
          {/* --- ELBIE ---- */}
          <div
            id="team-member-elbie"
            className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
              <img
                src={`${elbieImage}`}
                alt="Elbie"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover shrink-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-gray mb-1 sm:mb-2">
                  Elbie
                </h3>
                <p className="text-lg sm:text-xl text-medium-gray font-medium mb-2 sm:mb-4">
                  Full-Stack Engineer / Systems Architect
                </p>
                <div className="flex items-center justify-center sm:justify-start space-x-3 text-sm sm:text-base text-medium-gray">
                  <span className="flex items-center">
                    <i className="fa-solid fa-envelope mr-2 text-deep-blue"></i>
                    elbie@tuc.system
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Role & Responsibilities
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Elbie is a key AlphaBeta contributor to TUC, playing a central
                  and critical role in shaping the system’s technical
                  foundations and backend architecture—particularly as TUC moved
                  into POC2. His work focuses on the technical viability of
                  TUC’s coordination layer, ensuring that conceptual system
                  design can function, scale, and remain coherent beneath the
                  surface.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  He is deeply involved in translating abstract system goals
                  into concrete engineering decisions, serving as a bridge
                  between architectural intent and executable reality. Through
                  hands-on development, extensive iteration, and structured
                  brainstorming, Elbie helps stress-test assumptions, clarify
                  dependencies, and surface architectural constraints early—when
                  they are cheapest and safest to address.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Elbie’s role is especially important in anticipating
                  second-order effects: how technical decisions made today will
                  affect scalability, maintainability, and system behavior as
                  contributors, use cases, and complexity increase. His
                  contributions help prevent fragility by identifying risks
                  before they harden into technical debt.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Philosophy
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Elbie believes that resilient systems are built through
                  structure, foresight, and honest constraint-mapping—not
                  heroics or reactive fixes. He values architectural clarity and
                  modularity as prerequisites for collective development,
                  especially in systems intended to evolve across many hands and
                  contexts.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  He approaches engineering as a form of stewardship, where
                  technical choices must remain legible to future contributors
                  and adaptable to changing conditions. For Elbie, good
                  architecture is not just functional—it protects long-term
                  integrity by making complexity visible and manageable.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
                  Background
                </h4>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  Elbie brings experience in full-stack development with a
                  strong emphasis on systems architecture and backend logic. His
                  perspective is shaped by working in environments where early
                  design decisions carry long-term consequences, and where
                  preventing failure is often more valuable than accelerating
                  delivery.
                </p>
                <p className="text-base sm:text-md text-medium-gray leading-relaxed pb-1">
                  His work has been causally impactful in moving TUC from ideas
                  and early prototypes toward a functioning, resilient
                  system—one capable of supporting long-term evolution without
                  compromising coherence or integrity. As TUC continues to
                  mature, Elbie’s contributions remain central to ensuring that
                  the system can grow responsibly rather than collapse under its
                  own complexity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-deep-blue rounded-lg p-6 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-serif font-bold text-dark-gray mb-4 sm:mb-6 text-center">
            Why a Small Team?
          </h3>
          <div className="max-w-full sm:max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
              Small teams can maintain integrity more easily. There's less
              organizational overhead, fewer communication breakdowns, and
              clearer accountability. Every decision can be explained, every
              change can be documented, and every principle can be consistently
              applied.
            </p>
            <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
              We're not trying to scale the team prematurely. Growth happens
              when capacity genuinely exists, not when a roadmap demands it.
              This means slower progress, but it also means sustainable
              progress.
            </p>
            <p className="text-base sm:text-lg text-medium-gray leading-relaxed">
              As the system matures and proves its value, the team will grow—but
              only at a pace that maintains the culture of transparency,
              integrity, and deliberate decision-making that defines TUC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
