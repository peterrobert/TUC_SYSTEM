import EntryCardSection from "../EntryCardSection";
import HeroSection from "../HeroSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* <!-- LEFT COLUMN (Content & Discussion) - 65% width on desktop --> */}
          <div className="lg:col-span-8 space-y-8">
            <EntryCardSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
