import React from "react";

import "./style.scss";
import Image from "next/image";

interface LogosCarouselProps {
  logoSrcs: string[];
}

const LogosCarousel = ({ logoSrcs }: LogosCarouselProps) => {
  return (
    <div className="logos">
      <div className="logos-slide">
        {logoSrcs.map((src, index) => (
          <Image
            src={src}
            width={135.13}
            height={50}
            alt="partner-logo"
            key={"logo-1-" + index}
          />
        ))}
      </div>

      {/* dublicate for infinite slide */}

      <div className="logos-slide">
        {logoSrcs.map((src, index) => (
          <Image
            src={src}
            width={135.13}
            height={50}
            alt="partner-logo"
            key={"logo-2-" + index}
          />
        ))}
      </div>
      <div className="logos-slide">
        {logoSrcs.map((src, index) => (
          <Image
            src={src}
            width={135.13}
            height={50}
            alt="partner-logo"
            key={"logo-3-" + index}
          />
        ))}
      </div>
    </div>
  );
};

export default LogosCarousel;
