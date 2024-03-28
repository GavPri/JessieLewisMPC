import React from "react";
import jessiebanner from "../../images/jessiebanner.png";
import AboutMeCard from "./AboutMeCard";

const AboutMe = () => {
  // ---- Profile picture
  const divStyle = {
    backgroundImage: `url(${jessiebanner})`,
    backgroundSize: "cover",
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="mt-24 max-w-[1240px] m-auto text-center lg:flex lg:items-start">
      {/* ----- Title */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-darkest to-neutral text-transparent bg-clip-text uppercase">
          Get to know Jessie
        </h1>
        {/* ----- Profile picture */}
        <div
          style={divStyle}
          className="md:h-[65vh] h-64 aspect-square rounded-lg m-auto mt-4 shadow-md"
        ></div>
      </div>
      <AboutMeCard />
    </div>
  );
};

export default AboutMe;
