import React from "react";
import { IconProps } from "../constants/IconTypes";
const GlobusIcon = ({
  className = "",
  width = 24,
  height = 24,
  color = "#F3FBFF",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 40 41"
      fill="none"
    >
      <path
        d="M20 40C30.7005 40 39.375 31.3255 39.375 20.625C39.375 9.9245 30.7005 1.25 20 1.25C9.2995 1.25 0.625 9.9245 0.625 20.625C0.625 31.3255 9.2995 40 20 40Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.625 20.625H39.375"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.86328 10.125V10.125C14.4806 12.584 25.5194 12.584 36.1367 10.125V10.125"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.86328 31.1252V31.1252C14.4806 28.6663 25.5194 28.6663 36.1367 31.1252V31.1252"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0029 40C31.6278 26.7475 31.6278 13.805 20.0029 1.25C8.61038 13.34 8.37788 26.205 20.0029 40Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GlobusIcon;
