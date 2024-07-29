import React from "react";

import { IconProps } from "../constants/IconTypes";

const CloseIcon = ({
  className = "",
  width = 32,
  height = 32,
  color = "#F3FBFF",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 29 28"
      fill="none"
    >
      <path
        d="M9 9L19.6066 19.6066"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 19.6067L19.6066 9.00009"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
