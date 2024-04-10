import React from "react";
import aboutMeData from "../../data/aboutme-data/aboutMeData";

const AboutMeCard = () => {
  return (
    <div className="">
      {aboutMeData.map((t, idx) => (
        <div key={idx} className="">
          <div className="flex justify-center items-center bg-dark bg-opacity-95 text-lightest max-w-64 rounded-md m-auto py-2">
            <p className="text-3xl mr-4">{t.aboutIcon}</p>
            <h2 className="font-poppins text-xl">{t.title}</h2>
          </div>
          <div className="">
            <p className="">{t.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMeCard;
