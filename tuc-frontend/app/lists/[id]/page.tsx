import EntryCard from "@/app/components/reusable-components/EntryCard";
import FilterSortSection from "./FilterSortSection";
import HeroSection from "./HeroSection";
import SubmitEntryForm from "@/app/components/reusable-components/SubmitEntryForm";
import CTA from "./CTA";
import ModeExplanationSection from "./ModeExplanationSection";
import EngagementStatsSection from "./EngagementStatsSection";

const page = () => {
  return (
    <div className="bg-background text-text-purple antialiased min-h-screen flex flex-col">
      <HeroSection />
      <main className="grow max-w-300 w-full mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* <!-- LEFT COLUMN: Ranked Entries (70%) --> */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            {/* <!-- Filter Section --> */}
            <FilterSortSection />
            <EntryCard />
            <EntryCard />
            <EntryCard />
            <EntryCard />
            <EntryCard />
          </div>
          {/* ---- RIGHT COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              <CTA />
              <SubmitEntryForm />
              <ModeExplanationSection />
              <EngagementStatsSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
