import React from "react";
import Link from "next/link";
import "./style.scss";
import Button from "@/app/components/Button/Button";
import ArrowOutwardIcon from "@/app/icons/ArrowOutwardIcon";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import InstagramIcon from "@/app/icons/InstagramIcon";
import TwitterIcon from "@/app/icons/TwitterIcon";
import BehanceIcon from "@/app/icons/BehanceIcon";

const RootModalContent = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  const t = useTranslations();

  return (
    <div className="root-modal-content">
      <div className="info">
        <div className="language-toggle">EN</div>
        <div className="navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="contact-us-info">
          <p className="subtext">Свяжитесь с нами</p>
          <div className="email">
            <a href="">hi@ronindsgn.com</a>
          </div>
        </div>
        <div className="social">
          <InstagramIcon width={35} height={35} />
          <TwitterIcon width={35} height={35} />
          <BehanceIcon width={35} height={35} />
        </div>
        <p className="copyright">(с) 2024 ИП «Амангали»</p>
      </div>
    </div>
  );
};

export default RootModalContent;
