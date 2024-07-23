import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";
import CloseIcon from "@/app/icons/CloseIcon";
import Backdrop from "../../Backdrop/Backdrop";

type Props = {
  isShow: boolean;
  handleClose: Function;
  children: React.ReactNode;
  maxWidth?: number;
  display?: string;
};

const CenterModal: React.FC<Props> = ({
  isShow,
  handleClose,
  maxWidth,
  display,
  children,
}) => {
  const [isRenderedOnServerSide, setIsRenderedOnServerSide] =
    useState<boolean>(false);
  useEffect(() => {
    setIsRenderedOnServerSide(true);
  }, []);

  if (!isRenderedOnServerSide) return null;
  return createPortal(
    <>
      {isShow ? (
        <div className={classNames(styles.modal, { "d-none": !isShow })}>
          <div
            style={maxWidth ? { maxWidth: maxWidth, width: "100%" } : {}}
            className={styles.modalContainer}
          >
            <div className={styles.modalMain}>{children}</div>
          </div>
          <Backdrop onClick={handleClose} transparent={false} />
        </div>
      ) : (
        <></>
      )}
    </>,
    document.getElementById("modal-root")!!
  );
};

export default CenterModal;
