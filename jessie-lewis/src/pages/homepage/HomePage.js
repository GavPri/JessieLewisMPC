import React from "react";
import HeroSection from "./HeroSection";
import AboutMeIntro from "./AboutMeIntro";

const HomePage = () => {
  return (
    <div>
      <div className="mb-2">
        <HeroSection />
      </div>
      <div>
        <AboutMeIntro />
      </div>
    </div>
  );
};

export default HomePage;
