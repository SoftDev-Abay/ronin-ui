import React, { useState } from "react";
import "./style.scss";
import SpecialAccordion from "@/app/components/SpecialAccordion/SpecialAccordion";
import useLanguageContext from "@/app/context/TranslationContext";

interface AccordionItem {
  title: string;
  content: string;
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { translations } = useLanguageContext();

  const accordionItems = translations.pages.hero.sections.faq
    .accordion as AccordionItem[];

  return (
    <div
      className="container-max-width-1920 padding-wrapper faq-section-wrapper "
      id="blog"
    >
      <div className="faq-section-container">
        <h1 className="faq-section-title gradient-text">
          {translations.pages.hero.sections.faq.header}
        </h1>
        <SpecialAccordion
          items={accordionItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default FAQSection;
