import React from "react";

const Button = ({ type, onClick, className, text, variant, icon }) => {
  const getButtonVariant = () => {
    switch (variant) {
      case "secondary":
        return "bg-transparent font-poppins font-bold rounded-md text-cyanAccent border-2 border-transparent hover:border-lightest hover:bg-cyanAccent hover:text-lightest transition-all duration-500";
      default:
        return "bg-tealAccent text-lightest border-2 border-light font-poppins font-bold rounded-md hover:bg-lightest hover:text-tealAccent hover:border-2 hover:border-tealAccent ";
    }
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center items-center text-xl w-10/12 py-2 px-4 font-poppins font-bold ${getButtonVariant()} ${className}`}
    >
      {text}
      {icon && <span className="ml-2 rotate-[-45deg]">{icon}</span>}
    </button>
  );
};

export default Button;
