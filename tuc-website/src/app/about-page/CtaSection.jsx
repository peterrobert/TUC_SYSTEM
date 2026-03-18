const CtaSection = () => {
  return (
    <section
      id="cta-section"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-cool-gray"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark-gray mb-4 sm:mb-6">
          Explore TUC
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-medium-gray mb-8 sm:mb-10 leading-relaxed">
          Learn more about what we're building and how you can participate.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-deep-blue text-white rounded-md hover:bg-bright-blue transition-colors font-medium text-base sm:text-lg">
            View System Overview
          </button>
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-deep-blue text-deep-blue rounded-md hover:bg-deep-blue hover:text-white transition-colors font-medium text-base sm:text-lg">
            Read Documentation
          </button>
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-dark-cyan text-dark-cyan rounded-md hover:bg-dark-cyan hover:text-white transition-colors font-medium text-base sm:text-lg">
            Check System Status
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
