import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "./style.scss";
import ChevroletRightIcon from "@/app/icons/ChevroletRightIcon";
import ChevroletLeftIcon from "@/app/icons/ChevroletLeftIcon";
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  imgsURL: string[];
  categories: string[];
}

interface ProjectModalContentProps {
  project: Project;
}

const ProjectModalContent: React.FC<ProjectModalContentProps> = ({ project }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current;

    if (swiperInstance) {
      swiperInstance.on('reachBeginning', () => {
        setIsBeginning(true);
        setIsEnd(false);
      });

      swiperInstance.on('reachEnd', () => {
        setIsEnd(true);
        setIsBeginning(false);
      });

      swiperInstance.on('fromEdge', () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      });
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('reachBeginning');
        swiperInstance.off('reachEnd');
        swiperInstance.off('fromEdge');
      }
    };
  }, []);

  return (
    <div className="project-modal-content">
      <div className="swiper-content-wrapper">
        <Swiper
          onSwiper={(swiper) => swiperRef.current = swiper}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
        >
          {project.imgsURL.map((imgURL) => (
            <SwiperSlide key={imgURL}>
              {/* <img src={imgURL} alt={project.title} /> */}
              <Image
                src={imgURL}
                alt={project.title}
                width={269}
                height={236}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`custom-swiper-button custom-swiper-button-prev ${isBeginning ? 'disabled' : ''}`}>
          <ChevroletLeftIcon width={44} height={44} />
        </div>
        <div className={`custom-swiper-button custom-swiper-button-next ${isEnd ? 'disabled' : ''}`}>
          <ChevroletRightIcon width={44} height={44} />
        </div>
      </div>

      <div className="project-card-info">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-categories">
          {project.categories.map((category, index) => (
            <span key={category} className="project-card-category">
              {category}{index !== project.categories.length - 1 && ' • '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModalContent;
