import React, { useState } from "react";
import ChevroletDownIcon from "@/app/icons/ChevroletDownIcon";
import ChevroletUpIcon from "@/app/icons/ChevroletUpIcon";

import "./style.scss";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionItemProps {
  data: AccordionItem;
  isActive: boolean;
  index: number;
  setActiveIndex: (value) => void;
}

const AccordionItem = ({
  data: { title, content },
  isActive,
  setActiveIndex,
  index,
}: AccordionItemProps) => {
  return (
    <div
      onClick={() => {
        setActiveIndex(isActive ? null : index);
      }}
      className={`accordion-item ${isActive ? "active" : ""}`}
    >
      <div className="header">
        <h1 className={`title ${isActive ? "gradient-text" : ""}`}>{title}</h1>
        <span>
          {isActive ? (
            <ChevroletDownIcon width={26} height={26} color="#1261FC" />
          ) : (
            <ChevroletUpIcon width={26} height={26} color="#1C1F39" />
          )}
        </span>
      </div>

      {isActive && <div className="content">{content}</div>}
    </div>
  );
};

interface AccordionProps {
  activeIndex: number | null;
  setActiveIndex: (value) => void;
  items: AccordionItem[];
}

const Accordion = ({ items, setActiveIndex, activeIndex }: AccordionProps) => {
  return (
    <div className="accordion-wrapper">
      {items.map((item, index) => (
        <AccordionItem
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

export default Accordion;
