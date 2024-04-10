import React from "react";
import aboutMeData from "../../data/aboutme-data/aboutMeData";

const AboutMeCard = () => {
  return (
    <div className="max-w-readable m-auto mt-4 md:mt-0">
      {aboutMeData.map((t, idx) => (
        <div
          key={idx}
          className=""
        >
          <h2 className="">
            {t.title}
          </h2>
          <div className="">
            <p className="">
              {t.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMeCard;
