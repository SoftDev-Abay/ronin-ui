import React from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import PartnersSection from "@/app/pages/Hero/PartnersSection/PartnersSection";
import ServicesSection from "@/app/pages/Hero/ServicesSection/ServicesSection";
import TitleSection from "@/app/pages/Hero/TitleSection/TitleSection";
import PortfolioSection from "@/app/pages/Hero/PortfolioSection/PortfolioSection";
import FAQSection from "@/app/pages/Hero/FAQSection/FAQSection";
import AboutSection from "@/app/pages/Hero/AboutSection/AboutSection";
import Preloader from "@/app/pages/Preloader/Preloader";

export async function getServerSideProps({ locale }: { locale: string }) {
  try {
    return {
      props: {
        locale,
      },
    };
  } catch (e) {}
}

const About = () => {
  return (
    <>
      <Wrapper>
        <TitleSection />
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
