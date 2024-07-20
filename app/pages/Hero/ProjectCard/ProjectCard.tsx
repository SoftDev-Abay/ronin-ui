import React from "react";
import "./style.scss";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgURL: string;
  title: string;
  description: string;
  categories: string[];
}

const ProjectCard = ({
  imgURL,
  title,
  description,
  categories,
  className,
  ...props
}: ProjectCardProps) => {
  return (
    <div className={`project-card ${className}`} {...props}>
      <img src={imgURL} alt={title} className="project-card-img" />
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
      <div className="project-card-categories">
        {categories.map((category, index) => {
          return (
            <>
              <span key={category} className="project-card-category">
                {category}
              </span>
              {index !== categories.length - 1 && (
                <span className="project-card-category">•</span>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
