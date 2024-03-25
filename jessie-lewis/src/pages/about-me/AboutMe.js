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
    <div className="mt-24 max-w-[1240px] m-auto">
      Get to know Jessie
    </div>
  );
};

export default AboutMe;
