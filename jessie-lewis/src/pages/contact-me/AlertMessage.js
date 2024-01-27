import React from "react";

const AlertMessage = ({ message, type }) => {
  const alertClasses =
    type === "success" ? "bg-light text-darkest" : "bg-dark text-light";
  return (
    <div className={`py-2 px-4 rounded ${alertClasses}`}>
      <p>{message}</p>
    </div>
  );
};

export default AlertMessage;
