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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            reiciendis debitis numquam veniam amet perspiciatis provident nemo
            perferendis totam illo itaque fugit, architecto expedita facilis
            recusandae doloremque cupiditate aspernatur? Mollitia esse
            reprehenderit distinctio sed impedit, eum eaque dolorum nostrum
            voluptatum!
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
