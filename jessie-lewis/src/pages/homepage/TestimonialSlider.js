import React from "react";
import testimonialData from "../../data/testimonial-data/TestimonialData";

const TestimonialSlider = () => {
  return (
    <div className="m-auto max-w-[1240px]">
      Testimonials
      <div>
        {testimonialData.map((t, index) => (
          <>
            <p>{t.name}</p>
            <p>{t.role}</p>
            <p> {t.testimonial} </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
