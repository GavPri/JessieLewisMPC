import React, { useState } from "react";
import testimonialData from "../../data/testimonial-data/TestimonialData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const TestimonialSlider = () => {
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
  return (
    <div className="relative flex m-auto max-w-[1240px] justify-center items-center  h-[50vh] mb-4 group">
      {/* ----- Carousel Content Div ------ */}
      {testimonialData.map((t, idx) => (
        <div
          key={idx}
          className={`text-center m-auto max-w-[80vw] absolute transition-all duration-500 ease-in-out flex justify-center items-center  w-full ${
            current === idx
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-x-20"
          }`}
        >
          <div>
            <p className="block max-w-readable text-2xl">{t.testimonial}</p>
            <p className="font-bold mt-4">
              {t.name}, <span className="ml-2 font-thin">{t.role}</span>
            </p>
          </div>
        </div>
      ))}
      {/* ----- End Of Carousel Content Div ----- */}
      {/* ----- Previous & Next Buttons ----- */}
      <div className=" group-hover:opacity-100 opacity-0 transition-all duration-500 cursor-pointer absolute top-1/2 transform -translate-y-1/2 flex w-full justify-between flex-row-reverse ">
        <FaArrowAltCircleRight onClick={nextSlide} size={30} />
        <FaArrowAltCircleLeft onClick={previousSlide} size={30} />
      </div>
      {/* ----- End of previous & next buttons ----- */}
      {/* ----- Slider Dots ----- */}
      <div className="absolute bottom-4 flex gap-4 left-1/2 transform -translate-x-1/2">
        {testimonialData.map((t, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded-full h-5 w-5 ${
              current === index ? "bg-darkest" : "bg-neutral"
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
      {/* ----- End of Slider Dots ----- */}
    </div>
  );
};

export default TestimonialSlider;
