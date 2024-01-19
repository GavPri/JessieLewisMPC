import React from "react";
import Button from "../../components/Button";
import {
  AiOutlineArrowRight,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";
import about from "../../images/about-me.jpeg";

const AboutMeIntro = () => {
  const divStyle = {
    backgroundImage: `url(${about})`,
    backgroundSize: "cover", // Optional: You can adjust these styles based on your requirements
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex max-w-[1240px] bg-transparent m-auto p-4 rounded-md  mb-2">
      {/* ImageDiv */}
      <div
        style={divStyle}
        className=" hidden md:flex md:mr-2  md:basis-[33%] md:rounded-md "
      ></div>
      {/* TextDiv */}
      <div className="flex flex-col">
        <div className="basis-[67%] p-6 flex flex-col">
          <h3 className="text-darkest font-poppins font-bold text-3xl pb-2 border-b-2 mb-2  border-b-dark">
            About Me
          </h3>
          <p className="max-w-readable mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            reiciendis debitis numquam veniam amet perspiciatis provident nemo
            perferendis totam illo itaque fugit, architecto expedita facilis
            recusandae doloremque cupiditate aspernatur? Mollitia esse
            reprehenderit distinctio sed impedit, eum eaque dolorum nostrum
            voluptatum!
          </p>
        </div>
        <div className="md:flex md:flex-col md:w-full md:justify-between md:items-start p-6 order-last">
          <div className="md:w-1/2 mb-4">
            <Button
              to="/about"
              variant="secondary"
              text="Learn More"
              icon={<AiOutlineArrowRight />}
            />
          </div>
          <div className="md:w-1/2">
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
