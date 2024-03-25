import React from "react";
import aboutMeData from "../../data/aboutme-data/aboutMeData";

const AboutMeCard = () => {
  return (
    <div className="max-w-[80vw] m-auto mt-4">
      {aboutMeData.map((t, idx) => (
        <div
          key={idx}
          className="mb-4 text-left border-2 border-light rounded-md px-2"
        >
          <h2 className=" text-xl font-bold bg-gradient-to-r from-darkest to-neutral text-transparent bg-clip-text uppercase text-center">
            {t.title}
          </h2>
          <p className="max-w-readable text-darkest mt-2 text-center pb-2">
            {t.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutMeCard;
