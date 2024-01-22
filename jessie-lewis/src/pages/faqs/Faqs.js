import React from "react";
import faqs from "../../images/faqs.jpeg";

const Faqs = () => {
  const divStyle = {
    backgroundImage: `url(${faqs})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="mt-24 max-w-[1240px] m-auto bg-lightest h-screen">
      {/* image container */}
      <div className="hidden md:flex md:w-1/3 md:h-full" style={divStyle}></div>
      {/* text */}
      <div className="w-full text-center">
        <h1 className="font-poppins font-extrabold text-4xl text-darkest mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-darkest">
          Questions you may have about our services
        </p>
      </div>
    </div>
  );
};

export default Faqs;
