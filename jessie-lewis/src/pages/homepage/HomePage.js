import React from "react";
import HeroSection from "./HeroSection";
import AboutMeIntro from "./AboutMeIntro";
import ServicesIntro from "./ServicesIntro";
import TestimonialSlider from "./TestimonialSlider";

const HomePage = () => {
  return (
    <div className="mt-24">
      <div className="mb-2">
        <HeroSection />
      </div>
      <div>
        <ServicesIntro />
      </div>
      <div>
        <AboutMeIntro />
      </div>
      <div>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default HomePage;
