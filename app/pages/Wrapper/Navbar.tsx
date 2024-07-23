import React from "react";
import "./style.scss";
import Image from "next/image";
import MenuIcon from "../../icons/MenuIcon";
import Button from "@/app/components/Button/Button";
import SideModal from "@/app/components/Modals/SideModal/SideModal";
import RootModalContent from "./RootModalContent";
import { useTranslations } from "next-intl";
const Navbar = () => {
  const [isShow, setIsShow] = React.useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  };

  const t = useTranslations();

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img
              className="logo-full"
              src="/logo.svg"
              alt="Logo"
              width="153"
              height="34"
            />
            <img
              className="logo-short"
              src="/logo-short-blue.svg"
              alt="Logo"
              width={34}
              height={28.21}
            />
          </div>

          <div className="links">
            <a href="">Services</a>
            <a href="">Work</a>
            <a href="">About Us</a>
            <a href="">Blog</a>
            {/* <Button>
            <span className="gradient-text">Let’s chat</span>
          </Button> */}
            <Button>Let’s chat</Button>
            <a href="">EN</a>
          </div>

          {/* <div
            className={`burger ${isShow ? "is-active" : ""}`}
            onClick={() => setIsShow((prev) => !prev)}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div> */}
          <div
            className="menu-icon-wrapper"
            onClick={() => setIsShow((prev) => !prev)}
          >
            <MenuIcon width={28} height={28} />
          </div>
        </div>
      </div>
      <SideModal isShow={isShow} handleClose={handleClose}>
        <RootModalContent />
      </SideModal>
    </>
  );
};

export default Navbar;
