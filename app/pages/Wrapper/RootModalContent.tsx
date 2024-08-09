import React from "react";
import Link from "next/link";
import "./style.scss";
import Button from "@/app/components/Button/Button";
import ArrowOutwardIcon from "@/app/icons/ArrowOutwardIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import TwitterIcon from "@/app/icons/TwitterIcon";
import BehanceIcon from "@/app/icons/BehanceIcon";
import { useTranslation } from "next-i18next";

interface NavigationLink {
  title: string;
  link: string;
}

const RootModalContent = () => {
  const { t } = useTranslation("common");

  const navigationItems = t("wrapper.navigation", {
    returnObjects: true,
  }) as NavigationLink[];

  return (
    <div className="padding-wrapper root-modal-content">
      <div className="info">
        <div className="language-toggle">EN</div>
        <div className="navigation">
          {navigationItems.map((item) => (
            <a href={item.link}>{item.title}</a>
          ))}
        </div>
        <div className="contact-us-info">
          <p className="subtext">{t("wrapper.root_modal.contact.subtext")}</p>
          <div className="email">
            <a href="">{t("wrapper.root_modal.contact.email")}</a>
          </div>
        </div>
        <div className="social">
          <InstagramIcon width={35} height={35} />
          <TwitterIcon width={35} height={35} />
          <BehanceIcon width={35} height={35} />
        </div>
        <p className="copyright">{t("wrapper.root_modal.copyright")}</p>
      </div>
    </div>
  );
};

export default RootModalContent;
