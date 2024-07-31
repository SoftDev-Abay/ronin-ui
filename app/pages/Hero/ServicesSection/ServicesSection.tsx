import React, { useEffect, useState } from "react";
import Accordion from "@/app/components/Accordion/Accordion";

import "./style.scss";

const accordionItems = [
  {
    title: "Websites",
    content:
      "Your company's identity is shaped by its online presence. We design websites that help you achieve your business goals.",
    img: "/imgs/services/Websites.png",
  },
  {
    title: "Branding",
    content:
      "A brand is more than a logo. We develop a unique identity and guidelines for consistent communication.",
    img: "/imgs/services/Branding.png",
  },
  {
    title: "Development",
    content:
      "Our developers handle all stages of app development, from UX/UI design to deployment, ensuring seamless user experiences.",
    img: "/imgs/services/Development.png",
  },
  {
    title: "Presentations",
    content:
      "Our primary focus in presentations covers pitch decks, corporate reports, and creating visually engaging infographics.",
    img: "/imgs/services/Presentations.png",
  },

  {
    title: "Content",
    content:
      "Content is key to user attraction. We provide copywriting, illustration, 3D/2D graphics, iconography, animation.",
    img: "/imgs/services/Content.png",
  },

  {
    title: "Artificial Intelligence",
    content:
      "Ronin integrates AI to optimize processes and enhance digital products, pioneering AI-driven UX with novel interaction models in interface design.",
    img: "/imgs/services/Artificial-Intelligence.png",
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Preloading images
  useEffect(() => {
    const preloadImages = () => {
      accordionItems.forEach(item => {
        const img = new Image();
        img.src = item.img;
      });
    };

    preloadImages();
  }, []);


  return (
    <>
      <div className="padding-wrapper container-max-width-1920 services-section ">
        <Accordion
          items={accordionItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <div className="img-wrapper">
          <img
            key={activeIndex}
            src={accordionItems[activeIndex ? activeIndex : 0].img}
          />
          <div className="hightlight-circle">
            <div className="separarator">
              <div className="inner-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
