import React, { useState } from "react";
import testimonialData from "../../data/testimonial-data/TestimonialData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const TestimonialSlider = () => {
  // ----- Use state to set the current slide -----
  const [current, setCurrent] = useState(0);

  // ---- Next slide function -----
  const nextSlide = () => {
    setCurrent((prevCurrent) => {
      prevCurrent === testimonialData.length - 1 ? 0 : prevCurrent + 1;
    });
  };

  // ----- Previous slide function -----
  const previousSLide = () => {
    setCurrent((prevCurrent) => {
      prevCurrent === 0 ? testimonialData.length - 1 : prevCurrent - 1;
    });
  };
  return (
    <div className="flex m-auto max-w-[1240px]">
      {/* ----- Carousel Content Div ------ */}
      <div>
        {testimonialData.map((t, index) => (
          <>
            <p>{t.name}</p>
            <p>{t.role}</p>
            <p> {t.testimonial} </p>
          </>
        ))}
      </div>
      {/* ----- End Of Carousel Content Div ----- */}
      {/* ----- Previous & Next Buttons ----- */}
      <div>
        <FaArrowAltCircleRight /> <FaArrowAltCircleLeft />
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
