import React from "react";
import "./style.scss";
import InstagramIcon from "@/app/icons/InstagramIcon";
import TwitterIcon from "@/app/icons/TwitterIcon";
import BehanceIcon from "@/app/icons/BehanceIcon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="padding-wrapper footer-container">
        <div className="left">
          <div className="info">
            <div className="navigation">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="social">
              <InstagramIcon width={35} height={35} />
              <TwitterIcon width={35} height={35} />
              <BehanceIcon width={35} height={35} />
            </div>
            <p className="email">hi@ronindsgn.com</p>
          </div>
          <p className="company">
            <span className="long-text">
              (с) 2024 Individual Entrepreneur "Amangali"
            </span>
            <span className="short-text">(с) 2024 Ronin, LLC</span>
          </p>
        </div>

        <div className="right">
          <div className="logo-glass-3d">
            <img src="/imgs/logo-3d-glass-cropped.png" alt="" />
          </div>
          <p className="rights">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
