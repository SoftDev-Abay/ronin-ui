import React from "react";
import { IconProps } from "../constants/IconTypes";
const ArrowRightIcon = ({
  className = "",
  width = 24,
  height = 24,
  color = "#26333D",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      className={className}
      width={width}
      height={height}
    >
      <path
        // style="fill:#232326"
        fill={color}
        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
        data-name="Right"
      />
    </svg>
  );
};

export default ArrowRightIcon;
