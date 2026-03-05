import CtaSection from "./components/landing_page/CtaSection";
import FeaturesSection from "./components/landing_page/FeaturesSection";
import HeroSection from "./components/landing_page/HeroSection";
import HowItWorks from "./components/landing_page/HowItWorks";
import ListsSection from "./components/landing_page/ListsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <ListsSection />
      <CtaSection />
    </>
  );
}
