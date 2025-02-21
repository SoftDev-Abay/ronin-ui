import React, { Suspense } from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import Navbar from "../../Wrapper/Navbar";
import dynamic from "next/dynamic";
import useScreenWidth from "@/app/hooks/useScreenWidth";
import Image from "next/image";
import useLanguageContext from "@/app/context/TranslationContext";

// Dynamically import the ScrollSequence component without server-side rendering
const AnimationController = dynamic(
  () => import("@/app/components/ScrollSequence/AnimationController"),
  {
    ssr: false,
  }
);

const AnimationTitileSection = () => {
  const { translations } = useLanguageContext();

  const parentRef = React.useRef<HTMLDivElement>(null);

  const screenWidth = useScreenWidth();
  const isDesktop = screenWidth > 1104; // Define desktop as greater than 768px

  console.log("translations", translations);

  return (
    <div className="  title-section   " ref={parentRef}>
      <div className="title-section-content">
        <Navbar />
        <div className="container-max-width-1920 padding-wrapper banner">
          <div className="banner-inner">
            <Image
              className="logo-img"
              src="/imgs/logo-3d-glass-blue.png"
              alt="Ronin"
              width={209.55}
              height={194.31}
            />

            <h1>
              {translations.pages.hero.sections.title_section.heading.first}
              <span className="gradient-text">
                {translations.pages.hero.sections.title_section.heading.second}
              </span>
              {translations.pages.hero.sections.title_section.heading.third}
            </h1>

            <p>{translations.pages.hero.sections.title_section.subheading}</p>

            <div className="button-wrapper">
              <Button className="hightlighted-btn">
                <span>
                  {translations.pages.hero.sections.title_section.action_button}
                </span>
                <ArrowRightIcon width={45} height={45} color="#F3FBFF" />
              </Button>
            </div>
          </div>
        </div>
        {isDesktop && (
          <div className="canvas-wrapper">
            <div className="canvas-container">
              <AnimationController
                frameCount={54}
                parentRef={parentRef}
                imagePath="/imgs/animations/samurai-compressed-croped-3/fin"
                canvasWidth={1340}
                canvasHeight={834}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationTitileSection;
