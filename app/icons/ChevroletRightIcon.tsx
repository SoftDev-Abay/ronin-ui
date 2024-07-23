import React from "react";
import { IconProps } from "../constants/IconTypes";
const ChevroletRightIcon = ({
  className = "",
  width = 24,
  height = 24,
  color = "#090C21",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 44 44"
      fill="none"
    >
      <path
        opacity="0.4"
        d="M16.5 33L27.5 22L16.5 11"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevroletRightIcon;
