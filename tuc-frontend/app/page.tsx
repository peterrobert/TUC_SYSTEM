import FeaturesSection from "./components/landing_page/FeaturesSection";
import HeroSection from "./components/landing_page/HeroSection";
import HowItWorks from "./components/landing_page/HowItWorks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
    </>
  );
}
