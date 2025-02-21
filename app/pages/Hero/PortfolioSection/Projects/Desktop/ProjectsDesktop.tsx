import React from "react";
import ProjectCard from "../../../ProjectCard/ProjectCard";
import Button from "@/app/components/Button/Button";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import SlideReveal from "@/app/components/SlideReveal/SlideReveal";

import "./style.scss";
import useLanguageContext from "@/app/context/TranslationContext";

interface Project {
  title: string;
  description: string;
  imgURL: string;
  categories: string[];
}

const ProjectsDesktop = () => {
  const { translations } = useLanguageContext();

  const projects = translations.pages.hero.sections.work.projects
    .desktop as Project[];

  return (
    <div className="projects-desktop">
      <div className="main">
        <SlideReveal>
          <ProjectCard
            key={projects[0].title}
            title={projects[0].title}
            description={projects[0].description}
            imgURL={projects[0].imgURL}
            categories={projects[0].categories}
            className="desktop-project-card"
          />
        </SlideReveal>
      </div>

      <div className="project1">
        <SlideReveal>
          <ProjectCard
            key={projects[1].title}
            title={projects[1].title}
            description={projects[1].description}
            imgURL={projects[1].imgURL}
            categories={projects[1].categories}
            className="desktop-project-card"
          />
        </SlideReveal>
      </div>

      <div className="project2">
        <SlideReveal delay={0.6}>
          <ProjectCard
            key={projects[2].title}
            title={projects[2].title}
            description={projects[2].description}
            imgURL={projects[2].imgURL}
            categories={projects[2].categories}
            className="desktop-project-card"
          />
        </SlideReveal>
      </div>

      <div className="see-more">
        <div className="see-more-project">
          <SlideReveal>
            <ProjectCard
              key={projects[3].title}
              title={projects[3].title}
              description={projects[3].description}
              imgURL={projects[3].imgURL}
              categories={projects[3].categories}
              className="desktop-project-card"
            />
          </SlideReveal>
        </div>
        <div className="button-wrapper">
          <Button className="hightlighted-btn">
            <span>{translations.pages.hero.sections.work.action_button}</span>
            <ArrowRightIcon width={45} height={45} color="#F3FBFF" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDesktop;
