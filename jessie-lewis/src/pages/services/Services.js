import React from "react";
// ----- Hero Image
import service from "../../images/services.jpg";

const Services = () => {
  // ----- Style of div to hold background image
  const divStyle = {
    backgroundImage: `url(${service})`,
    backgroundSize: "cover",
    backgroundPosition: "top, center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="max-w-[1240px] m-auto mt-24">
      {/* ----- Banner image */}
      <div className="w-full h-[50vh] bg-darkest " style={divStyle}>
      </div>
    </div>
  );
};

export default Services;
