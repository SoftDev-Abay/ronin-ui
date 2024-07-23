import React from "react";
import styles from "./style.module.scss";
import GlobusIcon from "@/app/icons/GlobusIcon";
const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <img src="/imgs/preloader-bg.png" alt="" />
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
