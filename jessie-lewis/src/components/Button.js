import React from "react";

const Button = ({ type, onClick, className, text, variant }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
