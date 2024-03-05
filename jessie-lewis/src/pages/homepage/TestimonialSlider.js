import React from "react";
import testimonialData from "../../data/testimonial-data/TestimonialData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const TestimonialSlider = ({
  current,
  setCurrent,
  nextSlide,
  previousSlide,
}) => {
  return (
    <div className=" relative flex m-auto max-w-[1240px] min-h-[500px] justify-center items-center h-[50vh] mb-4 group  z-10 text-light">
      {/* ----- Carousel Content Div ------ */}
      {testimonialData.map((t, idx) => (
        <div
          key={idx}
          className={`text-center m-auto min-w-[80vw] absolute transition-all duration-500 ease-in-out flex justify-center items-center  w-full ${
            current === idx
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-x-20"
          }`}
        >
          <div className="max-h-40vh button py-4 px-6 rounded-md opacity-80">
            <p className=" block max-w-readable md:text-2xl mt-4 text-lightest rounded-md opacity-100">
              {t.testimonial}
            </p>
            <p className="font-bold mt-4">
              {t.name}, <span className="ml-2 font-thin">{t.role}</span>
            </p>
          </div>
        </div>
      ))}
      {/* ----- End Of Carousel Content Div ----- */}
      {/* ----- Previous & Next Buttons ----- */}

      {/* ----- Slider Dots ----- */}
      <div className="absolute bottom-0 flex gap-4 left-1/2 transform -translate-x-1/2">
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
