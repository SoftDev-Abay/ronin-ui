import React, { useEffect, useState } from "react";
import Accordion from "@/app/components/Accordion/Accordion";

import "./style.scss";
import { useTranslation } from "next-i18next";
import NextImage from "next/image";
import useScreenWidth from "@/app/hooks/useScreenWidth";

interface AccordionItem {
  title: string;
  content: string;
  img: string;
}

const ServicesSection = () => {
  const { t } = useTranslation();

  const width = useScreenWidth();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const isDesktop = width > 1115;

  const accordionItems = t("pages.hero.sections.services.accordion", {
    returnObjects: true,
  }) as AccordionItem[];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Preloading images
  useEffect(() => {
    const preloadImages = () => {
      accordionItems.forEach((item) => {
        const img = new Image();
        img.src = item.img;
      });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const preloadImages = () => {
        let loadedCount = 0;
        accordionItems.forEach((item) => {
          const img = new Image();
          img.src = item.img;
          img.onload = () => {
            loadedCount += 1;
            if (loadedCount === accordionItems.length) {
              setImagesLoaded(true);
            }
          };
        });
      };

      preloadImages();
    } else {
      // If not desktop, no need to preload, show content immediately
      setImagesLoaded(true);
    }
  }, [isDesktop, accordionItems]);

  if (isDesktop && !imagesLoaded) {
    return null; // Or any loading spinner or message
  }

  return (
    <>
      <div
        className="padding-wrapper container-max-width-1920 services-section "
        id="services"
      >
        <div className="accordion-outer-wrapper">
          <Accordion
            items={accordionItems}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className="img-wrapper">
          <NextImage
            key={`service-img-${activeIndex ? activeIndex : 0}`}
            src={accordionItems[activeIndex ? activeIndex : 0].img}
            alt="Service"
            width={828}
            height={828}
            loading="eager"
          />
          <div className="highlight-circle">
            <div className="separarator">
              <div className="inner-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
