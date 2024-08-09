import React from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import ScrollSequence from "@/app/components/ScrollSequence/ScrollSequence";
const AnimationTitileSection = () => {
  const parentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="  title-section   "
      ref={parentRef}
    >
      <div className="title-section-content">
        <div className="container-max-width-1920 padding-wrapper banner">
          <div className="banner-inner">
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
        <div className="canvas-wrapper">
          <div className="canvas-container">
            <ScrollSequence
              // frameCount={66}
              frameCount={58}
              parentRef={parentRef}
              imagePath="/imgs/animations/samurai-compressed/fin"
              canvasWidth={1920}
              canvasHeight={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationTitileSection;
