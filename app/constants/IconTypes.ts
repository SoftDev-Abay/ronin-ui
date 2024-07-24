import { HTMLAttributes } from "react";

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  color?: string;
  onClick?: () => void;
}

export type { IconProps };
