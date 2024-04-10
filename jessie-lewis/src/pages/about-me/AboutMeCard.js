import React from "react";
import aboutMeData from "../../data/aboutme-data/aboutMeData";

const AboutMeCard = () => {
  return (
    <div className="">
      {aboutMeData.map((t, idx) => (
        <div key={idx} className="">
          <div >
            <p>{t.aboutIcon}</p>
            <h2 className="">{t.title}</h2>
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
