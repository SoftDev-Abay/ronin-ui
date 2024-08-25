import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Wrapper from "@/app/pages/Wrapper/Wrapper";

const AnimationTitileSection = dynamic(
  () =>
    import("@/app/pages/Hero/AnimationTitileSection/AnimationTitileSection"),
  { ssr: true }
);
const PartnersSection = dynamic(
  () => import("@/app/pages/Hero/PartnersSection/PartnersSection"),
  { ssr: false }
);
const ServicesSection = dynamic(
  () => import("@/app/pages/Hero/ServicesSection/ServicesSection"),
  { ssr: false }
);
const PortfolioSection = dynamic(
  () => import("@/app/pages/Hero/PortfolioSection/PortfolioSection"),
  { ssr: true }
);
const AboutSection = dynamic(
  () => import("@/app/pages/Hero/AboutSection/AboutSection"),
  { ssr: false }
);
const FAQSection = dynamic(
  () => import("@/app/pages/Hero/FAQSection/FAQSection"),
  { ssr: false }
);

const About = () => {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading page content...</div>}>
        <AnimationTitileSection />
        <PartnersSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <FAQSection />
      </Suspense>
    </Wrapper>
  );
};

export default About;
