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
    <div className="flex m-auto max-w-[1240px] relative">
      {/* ----- Carousel Content Div ------ */}
      <div className="flex items-center">
        {testimonialData.map((t, index) => (
          <div
            index={index}
            className={`${
              index === current ? "block" : "hidden"
            } transition-opacity duration-500`}
          >
            <p>{t.name}</p>
            <p>{t.role}</p>
            <p> {t.testimonial} </p>
          </div>
        ))}
      </div>
      {/* ----- End Of Carousel Content Div ----- */}
      {/* ----- Previous & Next Buttons ----- */}
      <div>
        <FaArrowAltCircleRight onClick={nextSlide} />{" "}
        <FaArrowAltCircleLeft onClick={previousSlide} />
      </div>
      {/* ----- End of previous & next buttons ----- */}
      {/* ----- Slider Dots ----- */}
      <div>
        {testimonialData.map((t, index) => (
          <div className="rounded-full w-5 h-5 bg-darkest"></div>
        ))}
      </div>
      {/* ----- End of Slider Dots ----- */}
    </div>
  );
};

export default TestimonialSlider;
