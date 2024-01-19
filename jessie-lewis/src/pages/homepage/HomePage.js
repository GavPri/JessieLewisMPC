import React from "react";
import HeroSection from "./HeroSection";
import AboutMeIntro from "./AboutMeIntro";
import ServicesIntro from "./ServicesIntro";
import ContactMeIntro from "./ContactMeIntro";

const HomePage = () => {
  return (
    <div>
      <div className="mb-2">
        <HeroSection />
      </div>
      <div>
        <AboutMeIntro />
      </div>
      <div>
        <ServicesIntro />
      </div>
      <div>
        <ContactMeIntro />
      </div>
    </div>
  );
};

export default HomePage;
