import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Button = ({ type, onClick, className, text, variant, icon, to }) => {
  const getButtonVariant = () => {
    switch (variant) {
      case "secondary":
        return " bg-lightest font-poppins font-bold rounded-md text-cyanAccent border-2 border-transparent hover:border-lightest hover:bg-cyanAccent hover:text-lightest transition-all duration-500";
      default:
        return " bg-tealAccent text-lightest border-2 border-light font-poppins font-bold rounded-md hover:bg-lightest hover:text-tealAccent hover:border-2 hover:border-tealAccent transition-all duration-500";
    }
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-4/6 flex justify-center items-center text-xl py-2 px-4 font-poppins font-bold  ${getButtonVariant()} ${className}`}
    >
      <NavLink to={to}>{text}</NavLink>
      {icon && <span className="ml-2 rotate-[-45deg]">{icon}</span>}
    </button>
  );
};

export default Button;
