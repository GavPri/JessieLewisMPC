import React from "react";
// ----- Hero Image
import services from "../../images/services.jpg";

const Services = () => {
  // ----- Style of div to hold background image
  const divStyle = {
    backgroundImage: `url(${services})`,
    backgroundSize: "cover",
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="max-w-[1240px] m-auto mt-24">
      {/* ----- Banner image */}
      <div style={divStyle}></div>
    </div>
  );
};

export default Services;
