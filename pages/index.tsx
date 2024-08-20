import React from "react";
import dynamic from "next/dynamic";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AnimationTitileSection = dynamic(
  () =>
    import("@/app/pages/Hero/AnimationTitileSection/AnimationTitileSection"),
  { ssr: true }
);
const PartnersSection = dynamic(
  () => import("@/app/pages/Hero/PartnersSection/PartnersSection")
);
const ServicesSection = dynamic(
  () => import("@/app/pages/Hero/ServicesSection/ServicesSection")
);
const PortfolioSection = dynamic(
  () => import("@/app/pages/Hero/PortfolioSection/PortfolioSection"),
  { ssr: true }
);
const AboutSection = dynamic(
  () => import("@/app/pages/Hero/AboutSection/AboutSection")
);
const FAQSection = dynamic(
  () => import("@/app/pages/Hero/FAQSection/FAQSection")
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const About = () => {
  return (
    <Wrapper>
      <AnimationTitileSection />
      <PartnersSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <FAQSection />
    </Wrapper>
  );
};

export default About;
