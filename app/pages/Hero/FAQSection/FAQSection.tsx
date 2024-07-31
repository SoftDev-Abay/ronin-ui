import React, { useState } from "react";
import "./style.scss";
import SpecialAccordion from "@/app/components/SpecialAccordion/SpecialAccordion";

const accordionItems = [
  {
    title: "How much do you charge for a design project?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laboriosam cum minus ipsum facere corporis sit sunt nisi nobis veritatis quasi voluptas ipsam error quia, ullam, voluptates praesentium repellendus reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi laboriosam cum minus ipsum facere corporis sit sunt nisi nobis veritatis quasi voluptas ipsam error quia, ullam, voluptates praesentium repellendus reprehenderit.",
  },
  {
    title: "What sets Ronin apart from other design agencies?",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, cupiditate! Corrupti vero numquam iusto ex fugiat quos saepe quidem, consequatur nobis nesciunt earum natus quod corporis praesentium libero repellendus nulla exercitationem veritatis quaerat unde harum ratione. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, cupiditate! Corrupti vero numquam iusto ex fugiat quos saepe quidem, consequatur nobis nesciunt earum natus quod corporis praesentium libero repellendus nulla exercitationem veritatis quaerat unde harum ratione.",
  },
  {
    title: "Are you open to working with startups?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, qu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, qu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, qu",
  },

  {
    title: "Do you work with clients in different time zones?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, qu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, quю Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, qu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, qu",
  },

  {
    title: "Can you assist us in redesigning our B2B/enterprise software?",
    content:
      "Lorem quam, quod. Quisquam, quod. Quisquam, qu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, qu Lorem quam, quod. Quisquam, quod. Quisquam, qu Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Quisquam, qu",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="container-max-width-1920 padding-wrapper faq-section-wrapper ">
      <div className="faq-section-container">
        <h1 className="faq-section-title gradient-text">FAQ</h1>
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
