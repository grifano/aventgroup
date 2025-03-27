import React from "react";

interface ButtonProps {
  url?: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ url, label }) => {
  return (
    <a href={url} className="">
      {label}
    </a>
  );
};

export default Button;
