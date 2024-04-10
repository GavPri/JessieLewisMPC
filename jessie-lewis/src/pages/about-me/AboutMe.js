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
    <div className="mt-24 max-w-[1240px] m-auto bg-dark">
      {/* ----- Title */}
      <div>
        <h1 className="">About Jessie</h1>
        {/* ----- Profile picture */}
        <div style={divStyle} className=""></div>
      </div>
      <AboutMeCard />
    </div>
  );
};

export default AboutMe;
