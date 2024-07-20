import React, { useState } from "react";
import "./style.scss";

const accordionItems = [
  {
    title: "Websites",
    content:
      "Your company's identity is shaped by its online presence. We design websites that help you achieve your business goals.",
  },
  {
    title: "Branding",
    content:
      "A brand is more than a logo. We develop a unique identity and guidelines for consistent communication.",
  },
  {
    title: "Development",
    content:
      "Our developers handle all stages of app development, from UX/UI design to deployment, ensuring seamless user experiences.",
  },
  {
    title: "Presentations",
    content:
      "Our primary focus in presentations covers pitch decks, corporate reports, and creating visually engaging infographics.",
  },

  {
    title: "Content",
    content:
      "Content is key to user attraction. We provide copywriting, illustration, 3D/2D graphics, iconography, animation.",
  },

  {
    title: "Artificial Intelligence",
    content:
      "Ronin integrates AI to optimize processes and enhance digital products, pioneering AI-driven UX with novel interaction models in interface design.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="faq-section">
      <h1 className="title gradient-text">FAQ</h1>

      {/* <div className="accordion"></div> */}
    </div>
  );
};

export default FAQSection;
