import React, { FC, HTMLAttributes } from "react";

import { IconProps } from "../constants/IconTypes";

const MenuIcon = ({
  className = "",
  width = 46,
  height = 28,
  onClick,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      viewBox="0 0 29 28"
      fill="none"
    >
      <path
        d="M21.3574 14H6.35742M21.3574 8H6.35742M21.3574 20H6.35742"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
