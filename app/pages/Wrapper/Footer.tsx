import React from "react";
import "./style.scss";
import InstagramIcon from "@/app/icons/InstagramIcon";
import TwitterIcon from "@/app/icons/TwitterIcon";
import BehanceIcon from "@/app/icons/BehanceIcon";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface NavigationLink {
  title: string;
  link: string;
}

const Footer = () => {
  const { t } = useTranslation("common");

  const navigationItems = t("wrapper.navigation", {
    returnObjects: true,
  }) as NavigationLink[];

  return (
    <div className="footer">
      <div className="padding-wrapper footer-container">
        <div className="left">
          <div className="info">
            <div className="navigation">
              {navigationItems.map((item) => (
                <a href={item.link}>{item.title}</a>
              ))}
            </div>
            <div className="social">
              <InstagramIcon width={35} height={35} />
              <TwitterIcon width={35} height={35} />
              <BehanceIcon width={35} height={35} />
            </div>
            <p className="email">{t("wrapper.footer.email")}</p>
          </div>
          <p className="company">
            <span className="long-text">
              {t("wrapper.footer.copyright_long")}
            </span>
            <span className="short-text">
              {t("wrapper.footer.copyright_short")}
            </span>
          </p>
        </div>

        <div className="right">
          <div className="logo-glass-3d">
            <Image
              src="/imgs/logo-3d-glass-cropped.png"
              alt="footer-logo"
              width={581}
              height={444}
            />
          </div>
          <p className="rights">{t("wrapper.footer.rights")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
