import React, { useEffect, useRef } from "react";

import "./style.scss";
import { animate, motion, useAnimation, useInView } from "framer-motion";

// motion left reveal animation
const HorizontalReveal = ({ children, direction = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView]);

  const fadeInAnimationVariants = {
    initial: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      animate={mainControls}
      whileInView={"animate"}
      transition={{ duration: 0.5, repeatType: "reverse" }}
    >
      {children}
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="experience">
        <div className="banner-number">40+</div>
        <div
          className="banner-description-wrapper"
          style={{ justifyContent: "end", width: "569.19px" }}
        >
          <div
            className="banner-description-content"
            style={{ width: "569.19px" }}
          >
            <HorizontalReveal>
              <span>years of</span>
            </HorizontalReveal>
            <img src="/imgs/about/years.jpeg" alt="" />
            <img src="/imgs/about/combined.jpeg" alt="" />
            <HorizontalReveal direction="right">
              <span>combined</span>
            </HorizontalReveal>
            <HorizontalReveal>
              <span>experience</span>
            </HorizontalReveal>
            <img src="/imgs/about/experience.png" alt="" />
          </div>
        </div>
      </div>
      <div
        className="experience"
        style={{ flexWrap: "wrap-reverse", justifyContent: "end" }}
      >
        <div
          className="banner-description-wrapper"
          style={{ justifyContent: "start" }}
        >
          <div
            className="banner-description-content"
            style={{ width: "493.56px", alignItems: "center" }}
          >
            <HorizontalReveal>
              <span>projects in</span>
            </HorizontalReveal>
            <img
              className="flag-img"
              src="/imgs/about/australia_flag.png"
              alt=""
            />
            <HorizontalReveal direction="right">
              <span>Australia</span>
            </HorizontalReveal>
            <img className="flag-img" src="/imgs/about/usa_flag.png" alt="" />{" "}
            <HorizontalReveal>
              <span>USA</span>
            </HorizontalReveal>
            <img className="flag-img" src="/imgs/about/cis_flag.png" alt="" />{" "}
            {/* <span>and CIS</span> */}
            <HorizontalReveal direction="right">
              <span>and CIS</span>
            </HorizontalReveal>
          </div>
        </div>
        <div className="banner-number">300+</div>
      </div>
    </div>
  );
};

export default AboutSection;
