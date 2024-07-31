import { title } from "process";
import React, { useEffect, useState } from "react";
import ProjectsDesktop from "./Projects/Desktop/ProjectsDesktop";
import ProjectsMobile from "./Projects/Mobile/ProjectsMobile";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

const projectsDesktop = [
  {
    title: "Dunes",
    description:
      "Website and digital branding for an innovative crypto-platform",
    imgURL: "/imgs/projects/Rectangle_13.png",
    categories: ["WEB-3", "UX/UI", "Web app"],
  },
  {
    title: "Orbital",
    description:
      "Engaging animations and illustrations for disruptive blockhain startup",

    imgURL: "/imgs/projects/Rectangle_14.png",
    categories: ["3D", "Design system", "Startup"],
  },
  {
    title: "Atafund",
    description: "Immersive website for family education fund",
    imgURL: "/imgs/projects/Rectangle_15.png",
    categories: ["Design system", "Web Design", "Illustration"],
  },
  {
    title: "Motiva",
    description:
      "Redesigning website for a global leading implant manufacturer",
    imgURL: "/imgs/projects/Rectangle_16.png",
    categories: ["Web Design", "Design System", "Visual Identity"],
  },
];

const projectsMobile = [
  {
    title: "Dunes",
    description:
      "Website and digital branding for an innovative crypto-platform",
    imgsURL: [
      "/imgs/projects/mobile/dunes-mobile-1.png",
      "/imgs/projects/mobile/dunes-mobile-2.png",
      "/imgs/projects/mobile/dunes-mobile-3.png",
      "/imgs/projects/mobile/dunes-mobile-4.png",
      "/imgs/projects/mobile/dunes-mobile-5.png",
    ],
    categories: ["WEB-3", "UX/UI", "Web app"],
  },
  {
    title: "Motiva",
    description:
      "Redesigning website for a global leading implant manufacturer",
    imgsURL: ["/imgs/projects/mobile/motiva-mobile-1.png"],
    categories: ["Web Design", "Design System", "Visual Identity"],
  },
  {
    title: "Atafund",
    description: "Immersive website for family education fund",
    imgsURL: ["/imgs/projects/mobile/atafund-mobile-1.png"],
    categories: ["Design system", "Web Design", "Illustration"],
  },
  {
    title: "Orbital",
    description:
      "Engaging animations and illustrations for disruptive blockhain startup",
    imgsURL: ["/imgs/projects/mobile/orbital7-mobile-1.png"],
    categories: ["3D", "Design system", "Startup"],
  },
  {
    title: "VestX",
    description:
      "Packaging a startup from scratch: a logo, a UI kit and a complete design of the platform have been created",
    imgsURL: ["/imgs/projects/mobile/vestx-mobile-1.png"],
    categories: ["Web Design", "Design System", "Visual Identity"],
  },
  {
    title: "Kazakh Agro Production",
    description: "Rebranding for a large agricultural holding",
    imgsURL: [
      "/imgs/projects/mobile/kazakh-agro-mobile-1.png",
      "/imgs/projects/mobile/kazakh-agro-mobile-2.png",
      "/imgs/projects/mobile/kazakh-agro-mobile-3.png",
      "/imgs/projects/mobile/kazakh-agro-mobile-4.png",
      "/imgs/projects/mobile/kazakh-agro-mobile-5.png",
    ],
    categories: ["Branding", "Design System", "Visual Identity"],
  },
  {
    title: "Mobile App Illustrations",
    description:
      "Character design and illustrations in the style of the Duolingo app",
    imgsURL: [
      "/imgs/projects/mobile/illustrations-mobile-1.png",
      "/imgs/projects/mobile/illustrations-mobile-2.png",
      "/imgs/projects/mobile/illustrations-mobile-3.png",
      "/imgs/projects/mobile/illustrations-mobile-4.png",
      "/imgs/projects/mobile/illustrations-mobile-5.png",
    ],
    categories: ["Illustrations", "Character Design", "Mobile App"],
  },
  {
    title: "HashCats",
    description: "A full-fledged presentation for the HashCats startup",
    imgsURL: ["/imgs/projects/mobile/hashcats-mobile-1.png"],
    categories: ["Presentation", "Illustration", "Infographics"],
  },
  {
    title: "Big Sky Capital",
    description: "Presentation and website for the American venture fund",
    imgsURL: ["/imgs/projects/mobile/big-sky-capital-mobile-1.png"],
    categories: ["Web Design", "Design System", "Presentation"],
  },
];

const PortfolioSection = () => {
  // determine if current device is mobile or desktop

  const [width, setWidth] = useState(1024); // You might choose a default for desktop or mobile

  useEffect(() => {
    // This function will set the width state based on the window's innerWidth
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener when the component mounts
    window.addEventListener("resize", handleResize);
    // Call handleResize immediately to set the initial width
    handleResize();

    // Return a clean-up function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if the current device is mobile or desktop
  const isMobile = width < 768;

  return (
    <div className="padding-wrapper container-max-width-1920 portfolio-section">
      <h1 className="title gradient-text">Our portfolio</h1>

      {isMobile ? (
        <ProjectsMobile projects={projectsMobile} />
      ) : (
        <ProjectsDesktop projects={projectsDesktop} />
      )}

      <div className="mobile-button-wrapper">
        <Button className="hightlighted-btn">
          <span>See more</span>
          <ArrowRightIcon width={45} height={45} color="#F3FBFF" />
        </Button>
      </div>
    </div>
  );
};

export default PortfolioSection;
