import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

import { Navigation } from "swiper/modules";
import ChevroletRightIcon from "@/app/icons/ChevroletRightIcon";
import ChevroletLeftIcon from "@/app/icons/ChevroletLeftIcon";

interface Project {
  title: string;
  description: string;
  imgsURL: string[];
  categories: string[];
}

interface ProjectModalContentProps {
  project: Project;
}

const ProjectModalContent = ({
  project: { title, description, imgsURL, categories },
}: ProjectModalContentProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.update();
    }
  }, []);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <div className="project-modal-content">
      <div className="swiper-content-wrapper">
        <Swiper
          spaceBetween={20}
          modules={[Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {imgsURL.map((imgURL) => (
            <SwiperSlide key={imgURL}>
              <img src={imgURL} alt={title} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="custom-swiper-button custom-swiper-button-prev"
          onClick={handlePrev}
        >
          <ChevroletLeftIcon width={44} height={44} />
        </div>
        <div
          className="custom-swiper-button custom-swiper-button-next"
          onClick={handleNext}
        >
          <ChevroletRightIcon width={44} height={44} />
        </div>
      </div>

      <div className="project-card-info">
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
    </div>
  );
};

export default ProjectModalContent;
