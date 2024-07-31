import React from "react";
import Button from "@/app/components/Button/Button";
import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import ScrollSequence from "@/app/components/ScrollSequence/ScrollSequence";
const TitleSection = () => {
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
      </section>
    </div>
  );
};

export default TitleSection;
