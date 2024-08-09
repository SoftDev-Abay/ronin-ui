import React, { useEffect, useRef, useTransition } from "react";
import DynamicScrollAnimation from "@/app/components/DynamicScrollAnimation/DynamicScrollAnimation";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import { useTranslation } from "next-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className="container-max-width-1920 about-section padding-wrapper"
      id="about"
    >
      <div className="main">
        <div className="experience experience-1">
          <div className="banner-number">
            <span className="number">40</span>+
          </div>
          <div className="banner-description-wrapper">
            <div className="banner-description-content">
              <div className="column">
                <DynamicScrollAnimation direction="left" maxTranslateX={100}>
                  <span>
                    {t("pages.hero.sections.about_us.content.experience.years")}
                  </span>
                </DynamicScrollAnimation>
                <img src="/imgs/about/years.jpeg" alt="" />
              </div>
              <div className="column">
                <img src="/imgs/about/combined.jpeg" alt="" />
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>
                    {t(
                      "pages.hero.sections.about_us.content.experience.combined"
                    )}
                  </span>
                </DynamicScrollAnimation>
              </div>
              <div className="column">
                <DynamicScrollAnimation direction="left" maxTranslateX={100}>
                  <span>
                    {t(
                      "pages.hero.sections.about_us.content.experience.experience"
                    )}
                  </span>
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
                <span>
                  {t("pages.hero.sections.about_us.content.countries.title")}
                </span>
              </DynamicScrollAnimation>
              <div className="column">
                <img
                  className="flag-img"
                  src="/imgs/about/australia_flag.png"
                  alt=""
                />
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>
                    {t(
                      "pages.hero.sections.about_us.content.countries.australia"
                    )}
                  </span>
                </DynamicScrollAnimation>
              </div>
              <div className="column">
                <img
                  className="flag-img"
                  src="/imgs/about/usa_flag.png"
                  alt=""
                />{" "}
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>
                    {t("pages.hero.sections.about_us.content.countries.usa")}
                  </span>
                </DynamicScrollAnimation>
              </div>
              <div className="column">
                <img
                  className="flag-img"
                  src="/imgs/about/cis_flag.png"
                  alt=""
                />
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>
                    {t("pages.hero.sections.about_us.content.countries.cis")}
                  </span>
                </DynamicScrollAnimation>
              </div>
            </div>
          </div>
          <div className="banner-number">
            <span className="number">300</span>+
          </div>
        </div>
      </div>
      <div className="bottom-text-wrapper">
        <div className="bottom-text">
          <span>
            {t("pages.hero.sections.about_us.bottom_text.first")}
            <strong>
              {t("pages.hero.sections.about_us.bottom_text.second")}
            </strong>{" "}
            {t("pages.hero.sections.about_us.bottom_text.third")}
          </span>
          <ArrowRightIcon width={34} height={24} color="#000000" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
