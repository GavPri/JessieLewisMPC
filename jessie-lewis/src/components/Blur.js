import React from "react";

const Blur = () => {
  return (
    <div className="absolute top-24 right-0 blur-[20px]">
      <div className="w-screen aspect-square bg-gradient-to-r from-lightest to-dark opacity-50 blur-clip"></div>
    </div>
  );
};

export default Blur;
