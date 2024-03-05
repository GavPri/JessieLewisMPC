import React, { useState } from "react";
import banner from "../../images/banner.jpeg";
import TestimonialSlider from "./TestimonialSlider";

const HeroSection = () => {
  // ----- Use state to set the current slide -----
  const [current, setCurrent] = useState(0);

  // ---- Next slide function -----
  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === testimonialData.length - 1 ? 0 : prevCurrent + 1
    );
  };

  // ----- Previous slide function -----
  const previousSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? testimonialData.length - 1 : prevCurrent - 1
    );
  };
  const divStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover", // Optional: You can adjust these styles based on your requirements
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={divStyle}
      className="relative p-4 rounded-md min-w-screen md:max-w-[1240px] md:m-auto md:flex md:justify-between md:items-start min-h-[70vh]"
    >
      <TestimonialSlider
        current={current}
        setCurrent={setCurrent}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
      />
    </div>
  );
};

export default HeroSection;
