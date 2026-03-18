import ScrollToTopButton from "../../components/ScrollToTopButton";
import SectionIndicator from "../../components/SectionIndicator";
import { footerData } from "../../data/footerData";
import Footer from "../../layouts/Footer";
import ContactSection from "./ContactSection";
import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";
import HowWeWorkSection from "./HowWeWorkSection";
import ProjectSection from "./ProjectSection";
import TeamSection from "./TeamSection";
import TUCThreeLevelStrategy from "./TUCThreeLevelStrategy";
import ValuesSection from "./ValuesSection";
import WhatWeDontDoSection from "./WhatWeDontDoSection";
import WhyTransparencyMattersSection from "./WhyTransparencyMattersSection";

const pageSections = [
  { id: "about-hero-section", label: "Intro" },
  { id: "tuc-3-level-strategy", label: "TUC’s 3-Level Strategy" },
  { id: "the-project-section", label: "The Project" },
  { id: "the-team-section", label: "The Team" },
  { id: "values-section", label: "Values" },
  { id: "how-we-work-section", label: "How We Work" },
  { id: "what-we-dont-do-section", label: "What We Don't Do" },
  { id: "why-transparency-matters-section", label: "Why Transparency Matters" },
  { id: "contact-section", label: "Get in Touch" },
  { id: "cta-section", label: "Explore TUC" },
];

const AboutPage = () => {
  return (
    <>
      <SectionIndicator sections={pageSections} />
      <HeroSection />
      <TUCThreeLevelStrategy />
      <ProjectSection />
      <TeamSection />
      <ValuesSection />
      <HowWeWorkSection />
      <WhatWeDontDoSection />
      <WhyTransparencyMattersSection />
      <ContactSection />
      <CtaSection />
      <Footer footerData={footerData} />
      <ScrollToTopButton />
    </>
  );
};

export default AboutPage;
