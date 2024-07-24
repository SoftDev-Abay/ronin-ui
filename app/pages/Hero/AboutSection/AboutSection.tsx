import React, { useEffect, useRef } from "react";
import DynamicScrollAnimation from "@/app/components/DynamicScrollAnimation/DynamicScrollAnimation";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="main">
        <div className="experience experience-1">
          <div className="banner-number">40+</div>
          <div className="banner-description-wrapper">
            <div className="banner-description-content">
              <div className="column">
                <DynamicScrollAnimation direction="left" maxTranslateX={100}>
                  <span>years of</span>
                </DynamicScrollAnimation>
                <img src="/imgs/about/years.jpeg" alt="" />
              </div>
              <div className="column">
                <img src="/imgs/about/combined.jpeg" alt="" />
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>combined</span>
                </DynamicScrollAnimation>
              </div>
              <div className="column">
                <DynamicScrollAnimation direction="left" maxTranslateX={100}>
                  <span>experience</span>
                </DynamicScrollAnimation>
                <img src="/imgs/about/experience.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="experience experience-2">
          <div className="banner-description-wrapper">
            <div className="banner-description-content">
              <DynamicScrollAnimation direction="left" maxTranslateX={100}>
                <span>projects in</span>
              </DynamicScrollAnimation>
              <div className="column">
                <img
                  className="flag-img"
                  src="/imgs/about/australia_flag.png"
                  alt=""
                />
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>Australia</span>
                </DynamicScrollAnimation>
              </div>
              <div className="column">
                <img
                  className="flag-img"
                  src="/imgs/about/usa_flag.png"
                  alt=""
                />{" "}
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>USA</span>
                </DynamicScrollAnimation>
              </div>
              <div className="column">
                <img
                  className="flag-img"
                  src="/imgs/about/cis_flag.png"
                  alt=""
                />
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>and CIS</span>
                </DynamicScrollAnimation>
              </div>
            </div>
          </div>
          <div className="banner-number">300+</div>
        </div>
      </div>
      <div className="bottom-text-wrapper">
        <div className="bottom-text">
          <span>
            Check out the <strong>Forbes</strong> article
          </span>
          <ArrowRightIcon width={34} height={24} color="#090C21" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
