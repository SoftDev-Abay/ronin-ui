import React from "react";
import "./style.scss";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ onClick, children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`btn ${className} `}
      type={rest.type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
