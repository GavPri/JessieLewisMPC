import React from "react";
import faqs from "../../images/faqs.jpeg";
import FaqsAccordion from "./FaqsAccordion";

const Faqs = () => {
  const divStyle = {
    backgroundImage: `url(${faqs})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="mt-24 max-w-[1240px] m-auto bg-darkest h-fit p-6 md:flex md:justify-around rounded-md">
      {/* image container */}
      <div
        className="hidden md:flex md:w-5/12 md:h-screen md:rounded-md"
        style={divStyle}
      ></div>
      {/* text */}
      <div className="md:w-1/2 w-full text-center md:text-left md:flex md:flex-col">
        <h1 className="font-poppins font-extrabold text-4xl text-lightest mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-light">Questions you may have about our services</p>
        <FaqsAccordion />
      </div>
    </div>
  );
};

export default Faqs;
