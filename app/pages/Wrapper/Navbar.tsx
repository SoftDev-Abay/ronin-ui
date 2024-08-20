import React from "react";
import "./style.scss";
import Image from "next/image";
import MenuIcon from "../../icons/MenuIcon";
import Button from "@/app/components/Button/Button";
import SideModal from "@/app/components/Modals/SideModal/SideModal";
import RootModalContent from "./RootModalContent";
import LanguageToggleButton from "@/app/components/LanguageToggle/LanguageToggleButton";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { link } from "fs";
interface NavigationLink {
  title: string;
  link: string;
}

const Navbar = () => {
  const { locale } = useRouter();

  const { t } = useTranslation("common");

  const navigationItems = t("wrapper.navigation", {
    returnObjects: true,
  }) as NavigationLink[];

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
            />
            <Image
              className="logo-short"
              src="/logo-short-blue.svg"
              alt="Logo"
              width={34}
              height={28.21}
            />
          </div>

          <div className="links">
            {navigationItems.map((item) => (
              <a href={item.link}>{item.title}</a>
            ))}

            <Button>{t("wrapper.navbar.action_button")}</Button>
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
