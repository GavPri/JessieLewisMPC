import React from "react";
import jessiebanner from "../../images/jessiebanner.png";

const AboutMe = () => {
  // ---- Profile picture
  const divStyle = {
    backgroundImage: `url(${jessiebanner})`,
    backgroundSize: "cover",
    backgroundPosition: "top, left",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="mt-24 max-w-[1240px] m-auto text-center">
      {/* ----- Title */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-darkest to-neutral text-transparent bg-clip-text uppercase">
        Get to know Jessie
      </h1>
      {/* ----- Profile picture */}
      <div
        style={divStyle}
        className="w-64 aspect-square rounded-lg m-auto mt-4"
      ></div>
      {/* ----- Cards */}
      {/* ---- Wrapper */}
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
              She earned a bachelor's degree in psychology from the University
              of California, Berkeley
            </strong>{" "}
            , where she gained her initial experience in the field by teaching
            the first student-led sport psychology course at UC Berkeley.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
