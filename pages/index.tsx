import React from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import PartnersSection from "@/app/pages/Hero/PartnersSection/PartnersSection";
import ServicesSection from "@/app/pages/Hero/ServicesSection/ServicesSection";
import TitleSection from "@/app/pages/Hero/TitleSection/TitleSection";
import PortfolioSection from "@/app/pages/Hero/PortfolioSection/PortfolioSection";
import FAQSection from "@/app/pages/Hero/FAQSection/FAQSection";
import AboutSection from "@/app/pages/Hero/AboutSection/AboutSection";
import Preloader from "@/app/pages/Preloader/Preloader";
import ScrollSequence from "@/app/components/ScrollSequence/ScrollSequence";
import AnimationTitileSection from "@/app/pages/Hero/AnimationTitileSection/AnimationTitileSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const About = () => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <Wrapper>
        <TitleSection />
        {/* <AnimationTitileSection /> */}
        <PartnersSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <FAQSection />
      </Wrapper>
    </>
  );
};

export default About;
