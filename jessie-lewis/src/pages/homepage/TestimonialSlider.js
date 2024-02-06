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
    <div className="flex m-auto max-w-[1240px] relative justify-center items-center button">
      {/* ----- Carousel Content Div ------ */}
      <div className="flex items-center min-h-[75vh] ">
        {testimonialData.map((t, index) => (
          <div
            index={index}
            className={`${
              index === current ? "block" : "hidden"
            } transition-opacity duration-500 max-w-readable m-auto p-10`}
          >
            <p className="text-4xl font-extrabold pb-4">{t.name}</p>
            <p className="capitalize font-semibold pb-2">{t.role}</p>
            <p className="text-xl"> {t.testimonial} </p>
          </div>
        ))}
      </div>
      {/* ----- End Of Carousel Content Div ----- */}
      {/* ----- Previous & Next Buttons ----- */}
      <div className="absolute top-1/2 transform -translate-y-1/2 flex w-full justify-between flex-row-reverse ">
        <FaArrowAltCircleRight onClick={nextSlide} size={30}/>
        <FaArrowAltCircleLeft onClick={previousSlide} size={30} />
      </div>
      {/* ----- End of previous & next buttons ----- */}
      {/* ----- Slider Dots ----- */}
      <div className="absolute bottom-4 flex gap-4 left-1/2 transform -translate-x-1/2">
        {testimonialData.map((t, index) => (
          <div
            key={index}
            className={` rounded-full h-5 w-5 ${
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
