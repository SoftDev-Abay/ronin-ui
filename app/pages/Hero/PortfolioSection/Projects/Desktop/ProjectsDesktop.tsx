import React from "react";
import ProjectCard from "../../../ProjectCard/ProjectCard";
import Button from "@/app/components/Button/Button";
import ArrowRightIcon from "@/app/icons/ArrowRightIcon";

import "./style.scss";

interface Project {
  title: string;
  description: string;
  imgURL: string;
  categories: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const ProjectsDesktop = ({ projects }: ProjectsProps) => {
  return (
    <div className="projects-desktop">
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
  );
};

export default ProjectsDesktop;
