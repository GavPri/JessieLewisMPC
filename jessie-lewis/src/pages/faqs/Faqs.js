import React from "react";
import faqs from "../../images/faqs.jpeg";
import FaqsAccordion from "./FaqsAccordion";

const Faqs = () => {
  const divStyle = {
    backgroundImage: `url(${faqs})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="mt-24 max-w-[1240px] m-auto h-fit p-6 md:flex md:justify-around rounded-md">
      {/* text */}
      <div className="md:w-1/2 w-full text-left md:flex md:flex-col">
        <h1 className="font-poppins font-extrabold text-2xl md:text-4xl text-darkest mb-2">
          Frequently Asked Questions
        </h1>
        <div className="h-60vh">
          <FaqsAccordion />
        </div>
      </div>
      {/* image container */}
      <div
        className="hidden md:flex md:w-5/12 md:h-[60vh] md:rounded-md"
        style={divStyle}
      ></div>
    </div>
  );
};

export default Faqs;
