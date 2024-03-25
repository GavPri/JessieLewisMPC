import React from "react";
import jessiebanner from "../../images/jessiebanner.png";

const AboutMe = () => {
  // ---- Profile picture
  const divStyle = {
    backgroundImage: `url(${jessiebanner})`,
    backgroundSize: "cover",
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="mt-24 max-w-[1240px] m-auto text-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-darkest to-neutral text-transparent bg-clip-text uppercase">
        Get to know Jessie
      </h1>
      
    </div>
  );
};

export default AboutMe;
