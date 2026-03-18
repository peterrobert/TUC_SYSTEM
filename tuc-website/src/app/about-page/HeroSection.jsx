const HeroSection = () => {
  return (
    <section
      id="about-hero-section"
      className="
    min-h-[280px]
    sm:min-h-[360px]
    md:min-h-[440px]
    lg:min-h-[520px]
    flex items-center justify-center
    bg-white
    border-b border-cool-gray
    px-4 sm:px-6 lg:px-8
  "
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-serif
        font-bold
        text-dark-gray
        mb-3 sm:mb-4 lg:mb-6
        leading-tight
      "
        >
          About TUC
        </h1>

        <p
          className="
        text-base
        sm:text-lg
        md:text-xl
        lg:text-2xl
        text-medium-gray
        font-serif
        leading-relaxed
        max-w-3xl
        mx-auto
      "
        >
          A transparent, mission-driven system built by a small team committed
          to integrity, sustainability, and meaningful collaboration.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
