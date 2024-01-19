import React from "react";
import Button from "../../components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import banner from "../../images/banner.jpeg";

const HeroSection = () => {
  const divStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover", // Optional: You can adjust these styles based on your requirements
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={divStyle}
      className="min-h-fit p-4 rounded-md min-w-screen md:max-w-[1240px] md:m-auto md:flex md:justify-between md:items-start"
    >
      <div className=" glass w-full md:mr-auto md:rounded md:flex md:flex-col md:justify-evenly md:items-start md:w-1/2">
        <h2 className=" mix-blend-darken font-extrabold font-poppins text-3xl md:text-4xl  p-4 text-lightest">
          Mental Mastery For Peak Performance
        </h2>
        <p className="p-4 font-poppins text-lightest text-xl md:text-2xl font-bold">
          Peak performance is a mindset. Let us guide you through proven
          techniques to optimize your cognitive abilities and achieve your goals
        </p>
        <div className="p-4 w-full flex items-start justify-start ">
          <Button
            type="button"
            text="Services"
            icon={<AiOutlineArrowRight />}
            to="/services"
          />
        </div>
        <div className="p-4 w-full flex justify-start items-start">
          <Button
            type="button"
            text="About Jessie"
            variant="secondary"
            icon={<AiOutlineArrowRight />}
            to="/about"
          />
        </div>
        <div className="hidden md:flex md:w-full">
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
