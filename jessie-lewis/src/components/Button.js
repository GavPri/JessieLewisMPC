import React from "react";

const Button = ({ type, onClick, className, text, variant }) => {
  const getButtonVariant = () => {
    switch (variant) {
      case "secondary":
        return "bg-transparent font-poppins font-bold rounded-md text-darkest border-2 border-transparent hover:border-neutral hover:bg-darkest hover:text-light";
      default:
        return "bg-darkest text-light font-poppins font-bold rounded-md";
    }
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 font-poppins font-bold ${getButtonVariant()} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
