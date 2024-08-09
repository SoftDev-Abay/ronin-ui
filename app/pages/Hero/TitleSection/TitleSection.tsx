import React from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import ScrollSequence from "@/app/components/ScrollSequence/ScrollSequence";
import { useTranslation } from "next-i18next";
const TitleSection = () => {
  const { t } = useTranslation();

  return (
    <div className="title-section padding-wrapper container-max-width-1920">
      <section
        className="banner"
        style={{
          position: "sticky",
          top: "0",
        }}
      >
        <img
          className="banner-image"
          src="/imgs/samurai.png"
          alt="Illustration"
          // width="100%"
          height="auto"
        />
        <div className="banner-inner">
          <h1>
            {t("pages.hero.sections.title_section.heading.first")}
            <span className="gradient-text">
              {t("pages.hero.sections.title_section.heading.second")}
            </span>
            {t("pages.hero.sections.title_section.heading.third")}
          </h1>
          <p>{t("pages.hero.sections.title_section.subheading")}</p>
          <div className="button-wrapper">
            <Button className="hightlighted-btn">
              <span>
                {t("pages.hero.sections.title_section.action_button")}
              </span>
              <ArrowRightIcon width={45} height={45} color="#F3FBFF" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TitleSection;
