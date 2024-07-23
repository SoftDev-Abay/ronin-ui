import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./style.scss";

const defaultImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
];

export default function SwiperCarousel({ images = defaultImages }) {
  let imagesCopy = images;

  if (images.length < 1) {
    imagesCopy = defaultImages;
  }

  return (
    <Swiper spaceBetween={10} className="mySwiper">
      {imagesCopy.map((image, index) => (
        <SwiperSlide>
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
