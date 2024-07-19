import React from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import LogosCarousel from "@/app/components/LogosCarousel/LogosCarousel";
import ServicesSection from "@/app/pages/Hero/ServicesSection/ServicesSection";
import TitleSection from "@/app/pages/Hero/TitleSection/TitleSection";

export async function getServerSideProps({ locale }: { locale: string }) {
  try {
    return {
      props: {
        locale,
      },
    };
  } catch (e) {}
}

const partnersImages = [
  "/imgs/partners/armana-usupov.png",
  "/imgs/partners/we-project.png",
  "/imgs/partners/rg-gold.png",
  "/imgs/partners/motiva.png",
  "/imgs/partners/jv-team.png",
  "/imgs/partners/jusan-bank.png",
  "/imgs/partners/hr-capital.png",
  "/imgs/partners/bi-group.png",
  "/imgs/partners/astana-hub.png",
];

const About = () => {
  return (
    <>
      <Wrapper>
        <TitleSection />
        <LogosCarousel logoSrcs={partnersImages} />
        <ServicesSection />
      </Wrapper>
    </>
  );
};

export default About;
