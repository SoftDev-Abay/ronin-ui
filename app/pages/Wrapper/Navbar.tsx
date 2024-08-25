import React from "react";
import "./style.scss";
import Image from "next/image";
import MenuIcon from "../../icons/MenuIcon";
import Button from "@/app/components/Button/Button";
import SideModal from "@/app/components/Modals/SideModal/SideModal";
import RootModalContent from "./RootModalContent";
import LanguageToggleButton from "@/app/components/LanguageToggle/LanguageToggleButton";

import useLanguageContext from "@/app/context/TranslationContext";
interface NavigationLink {
  title: string;
  link: string;
}

const Navbar = () => {
  const { translations } = useLanguageContext();

  const navigationItems = translations.wrapper.navigation as NavigationLink[];

  const [isShow, setIsShow] = React.useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  };

  return (
    <>
      <div className="navbar">
        <div className="padding-wrapper navbar-container">
          <div className="logo">
            <Image
              className="logo-full"
              src="/logo.svg"
              alt="Logo"
              width="153"
              height="34"
              loading="eager"
            />
            <Image
              className="logo-short"
              src="/logo-short-blue.svg"
              alt="Logo"
              width={34}
              height={28.21}
              loading="eager"
            />
          </div>

          <div className="links">
            {navigationItems.map((item) => (
              <a href={item.link}>{item.title}</a>
            ))}

            <Button>{translations.wrapper.navbar.action_button}</Button>
            <LanguageToggleButton />
          </div>

          <MenuIcon
            onClick={() => setIsShow((prev) => !prev)}
            className="menu-icon"
            width={28}
            height={28}
          />
        </div>
      </div>
      <SideModal isShow={isShow} handleClose={handleClose}>
        <RootModalContent />
      </SideModal>
    </>
  );
};

export default Navbar;
