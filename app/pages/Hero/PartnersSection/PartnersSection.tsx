import LogosCarousel from "@/app/components/LogosCarousel/LogosCarousel";
import React from "react";

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

const PartnersSection = () => {
  return <LogosCarousel logoSrcs={partnersImages} />;
};

export default PartnersSection;
