import React from "react";
import Button from "../../components/Button";
import {
  AiOutlineArrowRight,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";
import about from "../../images/jessie-banner.png";
import cutout from "../../images/cutout.png";

const AboutMeIntro = () => {
  const divStyle = {
    backgroundImage: `url(${cutout})`,
    backgroundSize: "cover", // Optional: You can adjust these styles based on your requirements
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={divStyle} className="max-w-[1240px] m-auto p-4 rounded-md mb-2">
      {/* TextDiv */}
      <div className="glass ml-auto w-full sm:w-4/6">
        <div className="p-6 flex flex-col">
          <h3 className="text-lightest font-poppins font-bold text-3xl pb-2 border-b-2 mb-2  border-b-light">
            About Me
          </h3>
          <p className="max-w-readable mb-2 font-poppins text-light">
            Jessie Lewis has fulfilled all mentorship hours and met the
            necessary requirements for the Certified Mental Performance
            Consultant certification. Currently, she is in the process of
            preparing for the certification exam. Jessie holds a master's degree
            in clinical psychology from California State University, Northridge,
            where she also completed her practicum hours as part of the
            certification process. She earned a bachelor's degree in psychology
            from the University of California, Berkeley, where she gained her
            initial experience in the field by teaching the first student-led
            sport psychology course at UC Berkeley. Her role as a mental
            performance coach entails providing individualized client-centered
            sessions, as well as team sessions, aimed at enhancing mental skills
            for optimal performance and overall well-being. Her philosophy of
            practice revolves around the principles of mindfulness,
            self-awareness, and the cultivation of self-confidence. By
            instilling these qualities, she aims to empower athletes to
            consistently deliver their best performances while embracing the
            present moment. Her goal is to collaborate with clients to
            prioritize their mind, body, and craft.
          </p>
        </div>
        <div className="md:flex md:w-full md:justify-between md:items-start p-6 order-last">
          <div className="sm:w-1/2 mb-4">
            <Button
              to="/about"
              variant="secondary"
              text="Learn More"
              icon={<AiOutlineArrowRight />}
            />
          </div>
          <div className="sm:w-1/2">
            <Button
              text="Contact Me"
              to="/contact"
              icon={<AiOutlineMessage />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeIntro;
