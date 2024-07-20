import { title } from "process";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import "./style.scss";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import Button from "@/app/components/Button/Button";

const projects = [
  {
    title: "Dunes",
    description:
      "Website and digital branding for an innovative crypto-platform",
    imgURL: "/imgs/projects/Rectangle_13.png",
    categories: ["WEB-3", "UX/UI", "Web app"],
  },
  {
    title: "Motiva",
    description:
      "Redesigning website for a global leading implant manufacturer",
    imgURL: "/imgs/projects/Rectangle_14.png",
    categories: ["Web Design", "Design System", "Visual Identity"],
  },
  {
    title: "Atafund",
    description: "Immersive website for family education fund",
    imgURL: "/imgs/projects/Rectangle_15.png",
    categories: ["Design system", "Web Design", "Illustration"],
  },
  {
    title: "Orbital",
    description:
      "Engaging animations and illustrations for disruptive blockhain startup",
    imgURL: "/imgs/projects/Rectangle_16.png",
    categories: ["3D", "Design system", "Startup"],
  },
];

const PortfolioSection = () => {
  return (
    <div className="portfolio-section">
      <h1 className="title gradient-text">Our portfolio</h1>
      <div className="projects">
        <ProjectCard
          key={projects[0].title}
          title={projects[0].title}
          description={projects[0].description}
          imgURL={projects[0].imgURL}
          categories={projects[0].categories}
          className="main"
        />
        <ProjectCard
          key={projects[1].title}
          title={projects[1].title}
          description={projects[1].description}
          imgURL={projects[1].imgURL}
          categories={projects[1].categories}
          className="project1"
        />
        <ProjectCard
          key={projects[2].title}
          title={projects[2].title}
          description={projects[2].description}
          imgURL={projects[2].imgURL}
          categories={projects[2].categories}
          className="project2"
        />
        <div className="see-more">
          <ProjectCard
            key={projects[3].title}
            title={projects[3].title}
            description={projects[3].description}
            imgURL={projects[3].imgURL}
            categories={projects[3].categories}
            className="see-more-project"
          />
          <div className="button-wrapper">
            <Button className="hightlighted-btn">
              <span>See more</span>
              <ArrowRightIcon width={45} height={45} color="#F3FBFF" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
