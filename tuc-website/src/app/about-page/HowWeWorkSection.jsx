const HowWeWorkSection = () => {
  return (
    <section
      id="how-we-work-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-cool-gray"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-2 sm:mb-4">
            How We Work
          </h2>

          <p className="text-base sm:text-lg text-medium-gray max-w-full sm:max-w-3xl mx-auto text-center">
            Our process reflects our values. Slow, transparent, and deliberate.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {[
            {
              title: "No Artificial Urgency",
              icon: "fa-clock",
              color: "text-deep-blue",
              paragraphs: [
                "We don't create false deadlines or pressure ourselves to ship before we're ready. Features are released when they work properly, not when a roadmap says they should. This means slower progress, but it also means we're not accumulating technical debt or making compromises we'll regret.",
                "There's no race to market, no competition to beat, no investors demanding growth. We build at the pace our capacity allows, and we're transparent about that pace.",
              ],
            },
            {
              title: "Documentation First",
              icon: "fa-book-open",
              color: "text-deep-blue",
              paragraphs: [
                "Before we build something, we document why it makes sense. Before we change something, we document the reasoning. Before we release something, we document how it works. This creates a permanent record of decisions and makes it easier for future contributors to understand the system.",
                "Documentation isn't an afterthought—it's part of the work. If we can't explain something clearly, we probably don't understand it well enough to build it.",
              ],
            },
            {
              title: "Optional Contribution",
              icon: "fa-users",
              color: "text-dark-cyan",
              paragraphs: [
                "We don't pressure people to contribute. There's no hustle culture, no expectation of unpaid labor disguised as opportunity, no artificial urgency. If you want to help, great. If you don't, that's fine too. Contribution is genuinely optional.",
                "The system is designed to work with whatever capacity people actually have—not the capacity we wish they had. This means slower progress, but it also means sustainable progress.",
              ],
            },
            {
              title: "Public Decision-Making",
              icon: "fa-comments",
              color: "text-dark-cyan",
              paragraphs: [
                "Major decisions are discussed publicly. Proposals are shared, feedback is collected, and reasoning is documented. This doesn't mean every decision is democratic—someone still needs to make the call—but it does mean the process is visible and the reasoning is clear.",
                "When we make mistakes, we document those too. Transparency includes acknowledging when we got something wrong and explaining how we're fixing it.",
              ],
            },
            {
              title: "Iteration Over Perfection",
              icon: "fa-wrench",
              color: "text-medium-gray",
              paragraphs: [
                "We ship working versions and improve them over time. This doesn't mean shipping broken things—it means releasing features that work properly but might not have every possible refinement. We learn from real use and adapt accordingly.",
                "The system evolves based on actual needs, not theoretical requirements. We build, observe, learn, and adjust.",
              ],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-pale-blue border border-cool-gray rounded-lg p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <i
                    className={`fa-solid ${item.icon} text-3xl sm:text-3xl ${item.color}`}
                  ></i>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-dark-gray mb-2 sm:mb-4">
                    {item.title}
                  </h3>
                  {item.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-base sm:text-lg text-medium-gray leading-relaxed mb-3 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
