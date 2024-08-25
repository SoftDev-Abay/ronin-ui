import React from "react";
import styles from "./style.module.scss";
import GlobusIcon from "@/app/icons/GlobusIcon";
import Image from "next/image";
import classNames from "classnames";

interface PreloaderProps extends React.HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
}

const Preloader = ({ isShow }: PreloaderProps) => {
  return (
    <div
      className={classNames(styles.preloader, {
        [styles.hide]: !isShow,
      })}
    >
      <Image
        width={1920}
        height={1080}
        src="/imgs/preloader-bg.png"
        alt="preloader"
      />
      <div className={styles.loaderContentWrapper}>
        <div className={styles.loaderContent}>
          <GlobusIcon width={38.75} height={38.75} />
          <span>Websites</span>
          <span>Branding</span>
          <span>UX/UI</span>
          <span>Mobile apps</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
