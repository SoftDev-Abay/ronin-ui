import React from "react";
import "./style.scss";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="main">
          <div className="info">
            <div className="navigation">
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="social">
              <i>IN</i>
              <i>IN</i>
              <i>IN</i>
            </div>
            <p className="email">hi@ronindsgn.com</p>
          </div>
          <div className="logo-glass-3d">
            <img src="/imgs/logo-3d-glass-cropped.png" alt="" />
          </div>
        </div>
        <div className="copyright">
          <p className="company">
            {"(с)"} 2024 Individual Entrepreneur "Amangali"
          </p>
          <p className="rights">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
