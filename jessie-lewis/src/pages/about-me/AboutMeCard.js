import React from "react";
import aboutMeData from "../../data/aboutme-data/aboutMeData";

const AboutMeCard = () => {
  return (
    <div className="max-w-readable m-auto mt-4 md:mt-0">
      {aboutMeData.map((t, idx) => (
        <div
          key={idx}
          className="md:flex md:flex-col md:items-center  mb-4 rounded-md px-2"
        >
          <h2 className="text-2xl pb-2 font-bold bg-gradient-to-r from-darkest to-neutral text-transparent bg-clip-text uppercase text-center md:text-left">
            {t.title}
          </h2>
          <div className="w-full flex justify-center items-center bg-gradient-to-r shadow-md from-darkest to-dark rounded-md">
            <p className=" text-transparent max-w-readable bg-gradient-to-r from-lightest to-light bg-clip-text p-4">
              {t.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMeCard;
