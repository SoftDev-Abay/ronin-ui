import React from "react";
import ProjectCard from "../../../ProjectCard/ProjectCard";
import "./style.scss";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import ProjectModalContent from "./ProjectModalContent/ProjectModalContent";
import CenterModal from "@/app/components/Modals/CenterModal/CenterModal";
interface Project {
  title: string;
  description: string;
  imgsURL: string[];
  categories: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const ProjectsMobile = ({ projects }: ProjectsProps) => {
  const [isShow, setIsShow] = React.useState(false);

  const [currentProject, setCurrentProject] = React.useState<Project>(
    projects[0]
  );

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  };

  return (
    <div className="projects-mobile">
      <Swiper spaceBetween={20} className="mySwiper">
        {projects.map((project, index) => (
          <SwiperSlide>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgURL={project.imgsURL[0]}
              categories={project.categories}
              onClick={() => {
                setCurrentProject(project);
                handleOpen();
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CenterModal isShow={isShow} handleClose={handleClose}>
        <ProjectModalContent project={currentProject} />
      </CenterModal>
    </div>
  );
};

export default ProjectsMobile;
