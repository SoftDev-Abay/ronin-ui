import { title } from "process";
import React, { useEffect, useState } from "react";
import ProjectsDesktop from "./Projects/Desktop/ProjectsDesktop";
import ProjectsMobile from "./Projects/Mobile/ProjectsMobile";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import useLanguageContext from "@/app/context/TranslationContext";

const PortfolioSection = () => {
  const { translations } = useLanguageContext();

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
    <div
      className="padding-wrapper container-max-width-1920 portfolio-section"
      id="work"
      // id="portfolio"
    >
      <h1 className="title gradient-text">
        {translations.pages.hero.sections.work.header}
      </h1>

      {isMobile ? <ProjectsMobile /> : <ProjectsDesktop />}

      <div className="mobile-button-wrapper">
        <Button className="hightlighted-btn">
          <span>{translations.pages.hero.sections.work.action_button}</span>
          <ArrowRightIcon width={45} height={45} color="#F3FBFF" />
        </Button>
      </div>
    </div>
  );
};

export default PortfolioSection;
