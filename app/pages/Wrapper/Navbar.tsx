import React from "react";
import "./style.scss";
import Image from "next/image";
import MenuIcon from "../../icons/MenuIcon";
import Button from "@/app/components/Button/Button";
import Modal from "@/app/components/Modal/Modal";
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
        <div className="logo">
          <Image src="/logo.svg" alt="Logo" priority width="153" height="34" />
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

        <div
          className={`burger ${isShow ? "is-active" : ""}`}
          onClick={() => setIsShow((prev) => !prev)}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </div>
      <Modal isShow={isShow} handleClose={handleClose}>
        <RootModalContent />
      </Modal>
    </>
  );
};

export default Navbar;
