import React, { useState } from "react";
import ChevroletDownIcon from "@/app/icons/ChevroletDownIcon";
import ChevroletUpIcon from "@/app/icons/ChevroletUpIcon";

import "./style.scss";

interface SpecialAccordionItem {
  title: string;
  content: string;
}

interface SpecialAccordionItemProps {
  data: SpecialAccordionItem;
  isActive: boolean;
  index: number;
  setActiveIndex: (value) => void;
}

const SpecialAccordionItem = ({
  data: { title, content },
  isActive,
  setActiveIndex,
  index,
}: SpecialAccordionItemProps) => {
  return (
    <div
      onClick={() => {
        setActiveIndex(isActive ? null : index);
      }}
      className={`special-accordion-item ${isActive ? "active" : ""}`}
    >
      <div className="header">
        <h1 className={`title `}>{title}</h1>
        <span>
          <ChevroletUpIcon
            className="toggle-icon"
            width={26}
            height={26}
            color="#9ba1ae"
          />
        </span>
      </div>

      <div className="content">{content}</div>
    </div>
  );
};

interface SpecialAccordionProps {
  activeIndex: number | null;
  setActiveIndex: (value) => void;
  items: SpecialAccordionItem[];
}

const SpecialAccordion = ({
  items,
  setActiveIndex,
  activeIndex,
}: SpecialAccordionProps) => {
  return (
    <div className="special-accordion-wrapper">
      {items.map((item, index) => (
        <SpecialAccordionItem
          key={index}
          data={{
            title: item.title,
            content: item.content,
          }}
          isActive={index === activeIndex}
          index={index}
          setActiveIndex={(value) => setActiveIndex(value)}
        />
      ))}
    </div>
  );
};

export default SpecialAccordion;
