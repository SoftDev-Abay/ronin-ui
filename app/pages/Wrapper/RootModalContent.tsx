import React from "react";
import Link from "next/link";
import "./style.scss";
import Button from "@/app/components/Button/Button";
import ArrowOutwardIcon from "@/app/icons/ArrowOutwardIcon";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const RootModalContent = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  const t = useTranslations();

  return (
    <div className="root-modal-content">
      <nav>
        <Link href="/" className={isActive("/") ? "active" : ""}>
          <span>{t("wrapper.root_modal.nav.about")}</span>
        </Link>
        <Link href="/goal" className={isActive("/goal") ? "active" : ""}>
          <span>{t("wrapper.root_modal.nav.goal")}</span>
        </Link>
        <Link href="/news" className={isActive("/news") ? "active" : ""}>
          <span>{t("wrapper.root_modal.nav.whats_new")}</span>
        </Link>
      </nav>
      <div className="root-modal-content__btn__wrapper">
        <Link href={"/contact-us"}>
          <Button
            className="btn-content"
            onClick={() => console.log("Button clicked")}
          >
            <span>{t("wrapper.root_modal.button_contact_us")}</span>
            <ArrowOutwardIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RootModalContent;
