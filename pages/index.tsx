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
  const parentRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <Wrapper>
        <TitleSection />
        {/* <div
          style={{
            // width: 100%;
            // height: 500vh;
            // position: relative;
            width: "100%",
            height: "500vh",
            position: "relative",
          }}
          ref={parentRef}
        >
          <ScrollSequence
            // frameCount={66}
            frameCount={54}
            parentRef={parentRef}
            imagePath="/imgs/animations/samurai/fin_30005"
            canvasWidth={1920}
            canvasHeight={1080}
          />
        </div> */}
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
