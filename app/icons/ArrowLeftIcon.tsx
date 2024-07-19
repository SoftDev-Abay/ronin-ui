import React from "react";
import { IconProps } from "../constants/IconTypes";
const ArrowLeftIcon = ({
  className = "",
  width = 32,
  height = 32,
  fill = "#0A2910",
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9.53674e-07L7.06875 1.05L2.86875 5.25L12 5.25V6.75L2.86875 6.75L7.06875 10.95L6 12L9.53674e-07 6L6 9.53674e-07Z"
        fill={fill}
        fillOpacity="0.74"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
