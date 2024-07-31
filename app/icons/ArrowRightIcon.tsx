import React from "react";
import { IconProps } from "../constants/IconTypes";
const ArrowRightIcon = ({
  className = "",
  width = 24,
  height = 24,
  color = "#000000",
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 37 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.78906 6.5C1.23678 6.5 0.789063 6.94772 0.789062 7.5C0.789062 8.05228 1.23678 8.5 1.78906 8.5L1.78906 6.5ZM36.7071 8.20711C37.0976 7.81659 37.0976 7.18342 36.7071 6.7929L30.3431 0.428935C29.9526 0.0384103 29.3195 0.0384102 28.9289 0.428935C28.5384 0.819459 28.5384 1.45262 28.9289 1.84315L34.5858 7.5L28.9289 13.1569C28.5384 13.5474 28.5384 14.1805 28.9289 14.5711C29.3195 14.9616 29.9526 14.9616 30.3431 14.5711L36.7071 8.20711ZM1.78906 8.5L36 8.5L36 6.5L1.78906 6.5L1.78906 8.5Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRightIcon;
