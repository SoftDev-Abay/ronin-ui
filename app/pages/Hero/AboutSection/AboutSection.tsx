import React, { useEffect, useRef, useTransition } from "react";
import DynamicScrollAnimation from "@/app/components/DynamicScrollAnimation/DynamicScrollAnimation";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import { useTranslation } from "next-i18next";
import Image from "next/image";

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
                <Image
                  src="/imgs/about/years.jpeg"
                  alt=""
                  width={105.91}
                  height={54.3}
                />
              </div>
              <div className="column">
                <Image
                  src="/imgs/about/combined.jpeg"
                  alt=""
                  width={74.47}
                  height={54.3}
                />
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
                <Image
                  src="/imgs/about/experience.png"
                  alt=""
                  width={57.47}
                  height={54.3}
                />
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
                <Image
                  className="flag-img"
                  src="/imgs/about/australia_flag.png"
                  alt=""
                  width={61}
                  height={32.94}
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
                <Image
                  className="flag-img"
                  src="/imgs/about/usa_flag.png"
                  alt=""
                  width={61}
                  height={32.94}
                />{" "}
                <DynamicScrollAnimation direction="right" maxTranslateX={100}>
                  <span>
                    {t("pages.hero.sections.about_us.content.countries.usa")}
                  </span>
                </DynamicScrollAnimation>
              </div>
              <div className="column">
                <Image
                  className="flag-img"
                  src="/imgs/about/cis_flag.png"
                  alt=""
                  width={61}
                  height={32.94}
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
