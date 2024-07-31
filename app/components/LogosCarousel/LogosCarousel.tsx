import React from "react";

import "./style.scss";

interface LogosCarouselProps {
  logoSrcs: string[];
}

const LogosCarousel = ({ logoSrcs }: LogosCarouselProps) => {
  return (
    <div className="logos">
      <div className="logos-slide">
        {logoSrcs.map((src) => (
          <img src={src} />
        ))}
      </div>

      {/* dublicate for infinite slide */}

      <div className="logos-slide">
        {logoSrcs.map((src) => (
          <img src={src} />
        ))}
      </div>
      <div className="logos-slide">
        {logoSrcs.map((src) => (
          <img src={src} />
        ))}
      </div>
      <div className="logos-slide">
        {logoSrcs.map((src) => (
          <img src={src} />
        ))}
      </div>
    </div>
  );
};

export default LogosCarousel;
