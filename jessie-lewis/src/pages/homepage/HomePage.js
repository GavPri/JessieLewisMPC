import React from "react";
import Button from "../../components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import SocialMediaLinks from "../../components/SocialMediaLinks";

const HomePage = () => {
  return (
    <div className="min-h-fit p-4 rounded-md bg-lightest min-w-screen md:max-w-[1240px] md:m-auto md:flex md:justify-between md:items-start">
      <div className="md:rounded md:flex md:flex-col md:justify-evenly md:items-start">
        <h2 className="font-extrabold font-poppins text-3xl md:text-4xl  p-4 text-darkest">
          Mental Mastery For Peak Performance
        </h2>
        <p className="p-4 font-poppins text-dark text-xl md:text-2xl font-bold">
          Peak performance is a mindset. Let us guide you through proven
          techniques to optimize your cognitive abilities and achieve your goals
        </p>
        <div className="p-4 w-full flex justify-center items-center md:items-start md:justify-start">
          <Button
            type="button"
            text="Services"
            icon={<AiOutlineArrowRight />}
            to="/services"
          />
        </div>
        <div className="p-4 w-full flex justify-center items-center md:items-start md:justify-start">
          <Button
            type="button"
            text="About Jessie"
            variant="secondary"
            icon={<AiOutlineArrowRight />}
            to="/about"
          />
        </div>
        <div><SocialMediaLinks/></div>
      </div>
      <div className="w-full flex justify-center items-center">
        <img
          src="/jessie-banner.png"
          alt="jessie lewis graduating"
          className="w-5/6 rounded-lg drop-shadow-lg shadow-neutral"
        />
      </div>
    </div>
  );
};

export default HomePage;
