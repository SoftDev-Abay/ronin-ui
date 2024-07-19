import React from "react";
import "./style.scss";

interface InputProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type: string;
  id: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  onChange,
  value,
  placeholder,
  type,
  id,
  error,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;
