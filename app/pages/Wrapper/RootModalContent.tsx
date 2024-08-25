import React from "react";
import "./style.scss";

import InstagramIcon from "@/app/icons/InstagramIcon";
import TwitterIcon from "@/app/icons/TwitterIcon";
import BehanceIcon from "@/app/icons/BehanceIcon";

import useLanguageContext from "@/app/context/TranslationContext";

import LanguageToggleButton from "@/app/components/LanguageToggle/LanguageToggleButton";

interface NavigationLink {
  title: string;
  link: string;
}

const RootModalContent = () => {
  const { translations } = useLanguageContext();

  const navigationItems = translations.wrapper.navigation as NavigationLink[];

  return (
    <div className="padding-wrapper root-modal-content">
      <div className="info">
        <LanguageToggleButton/>
        <div className="navigation">
          {navigationItems.map((item) => (
            <a href={item.link}>{item.title}</a>
          ))}
        </div>
        <div className="contact-us-info">
          <p className="subtext">
            {translations.wrapper.root_modal.contact.subtext}
          </p>
          <div className="email">
            <a href="">{translations.wrapper.root_modal.contact.email}</a>
          </div>
        </div>
        <div className="social">
          <InstagramIcon width={35} height={35} />
          <TwitterIcon width={35} height={35} />
          <BehanceIcon width={35} height={35} />
        </div>
        <p className="copyright">{translations.wrapper.root_modal.copyright}</p>
      </div>
    </div>
  );
};

export default RootModalContent;
