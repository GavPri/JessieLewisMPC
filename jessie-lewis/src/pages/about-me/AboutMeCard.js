import React from "react";
import aboutMeData from "../../data/aboutme-data/aboutMeData";

const AboutMeCard = (props) => {
  return (
    <div className="drop-shadow-xl border-2 border-lightest rounded-md max-w-[80vw] m-auto mt-4">
      {/* ----- Title of card */}
      <div>
        {" "}
        <h2 className=" text-xl font-bold bg-gradient-to-r from-darkest to-neutral text-transparent bg-clip-text uppercase ">
          Education & Qualifications
        </h2>
        <p className="max-w-readable text-darkest mt-2 px-2">
          Jessie holds a{" "}
          <strong>
            master's degree in clinical psychology from California State
            University, Northridge,
          </strong>{" "}
          where she also completed her practicum hours as part of the
          certification process.
          <strong>
            She earned a bachelor's degree in psychology from the University of
            California, Berkeley
          </strong>{" "}
          , where she gained her initial experience in the field by teaching the
          first student-led sport psychology course at UC Berkeley.
        </p>
      </div>
    </div>
  );
};

export default AboutMeCard;
