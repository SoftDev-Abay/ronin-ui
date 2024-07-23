import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

import CloseIcon from "@/app/icons/CloseIcon";
import Backdrop from "../Backdrop/Backdrop";
import FacebookIcon from "@/app/icons/FacebookIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import YoutubeIcon from "@/app/icons/YoutubeIcon";

type Props = {
  isShow: boolean;
  handleClose: Function;
  children: React.ReactNode;
  maxWidth?: number;
  display?: string;
};

const Modal: React.FC<Props> = ({
  isShow,
  handleClose,
  maxWidth,
  display,
  children,
}) => {
  const [isRenderedOnServerSide, setIsRenderedOnServerSide] =
    useState<boolean>(false);
  useEffect(() => {
    if (isShow) {
      setIsRenderedOnServerSide(true);
    }
  }, [isShow]);

  const closeModal = () => {
    setIsRenderedOnServerSide(false);
    setTimeout(() => {
      handleClose();
    }, 300);
  };

  if (!isShow) return null;

  return createPortal(
    <div
      className={`${styles.modal} ${
        isRenderedOnServerSide ? styles.active : ""
      }`}
    >
      <div
        style={maxWidth ? { maxWidth: maxWidth, width: "100%" } : {}}
        className={styles.modalContainer}
      >
        <div>
          <div className={styles.modalTop}>
            <img
              src="/logo-short-white.svg"
              width={34}
              height={28.21}
              alt="logo"
            />

            <div
              style={
                display ? { display: display } : { display: "inline-block" }
              }
              className={styles.modalControls}
              onClick={() => closeModal()}
            >
              <CloseIcon color="white" width={28} height={28} />
            </div>
          </div>
          <div className={styles.modalMain}>{children}</div>
        </div>
      </div>
      <Backdrop onClick={handleClose} transparent={true} />
    </div>,
    document.getElementById("modal-root")!!
  );
};

export default Modal;
