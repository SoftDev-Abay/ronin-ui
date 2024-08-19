import React from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import Navbar from "../../Wrapper/Navbar";
import dynamic from "next/dynamic";
import useScreenWidth from "@/app/hooks/useScreenWidth";

// Dynamically import the ScrollSequence component without server-side rendering
const AnimationController = dynamic(
  () => import("@/app/components/ScrollSequence/AnimationController"),
  {
    ssr: false,
  }
);

const AnimationTitileSection = () => {
  const parentRef = React.useRef<HTMLDivElement>(null);

  const screenWidth = useScreenWidth();
  const isDesktop = screenWidth > 1104; // Define desktop as greater than 768px

  return (
    <div className="  title-section   " ref={parentRef}>
      <div className="title-section-content">
        <Navbar />
        <div className="container-max-width-1920 padding-wrapper banner">
          <div className="banner-inner">
            <img
              className="logo-img"
              src="/imgs/logo-3d-glass-blue.png"
              alt="Ronin"
            />

            <h1>
              Ronin is a <span className="gradient-text">global</span> branding
              and UX/UI agency
            </h1>
            <p>
              We create effective websites, stunning pitch decks and unique
              brands.
            </p>
            <div className="button-wrapper">
              <Button className="hightlighted-btn">
                <span>See our services</span>
                <ArrowRightIcon width={45} height={45} color="#F3FBFF" />
              </Button>
            </div>
          </div>
        </div>
        {isDesktop && (
          <div className="canvas-wrapper">
            <div className="canvas-container">
              <AnimationController
                frameCount={58}
                parentRef={parentRef}
                imagePath="/imgs/animations/samurai-compressed-croped-2/fin"
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
