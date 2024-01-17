import React from "react";
import Button from "../components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import Blur from "../components/Blur";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-lightest min-w-screen">
      <h2 className="font-bold font-poppins text-3xl  p-4 text-darkest">
        Mental Mastery For Peak Performance
      </h2>
      <p className="p-4 font-poppins text-dark  font-bold">
        Peak performance is a mindset. Let us guide you through proven
        techniques to optimize your cognitive abilities and achieve your goals
      </p>
      <div className="p-4 w-full flex justify-center items-center">
        <Button type="button" text="Services" icon={<AiOutlineArrowRight />} />
      </div>
      <div className="p-4 w-full flex justify-center items-center">
        <Button
          type="button"
          text="About Jessie"
          variant="secondary"
          icon={<AiOutlineArrowRight />}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <img
          src="/jessie-banner.png"
          alt="jessie lewis graduating"
          className="w-5/6 rounded-lg drop-shadow-lg shadow-neutral"
        />
      </div>
      <Blur />
    </div>
  );
};

export default HomePage;
