import React from "react";
import Button from "../../components/Button";
import {
  AiOutlineArrowRight,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";

const AboutMeIntro = () => {
  return (
    <div className="max-w-[1240px] bg-lightest m-auto p-4 rounded-md md:flex md:flex-row flex-col-reverse mb-2">
      {/* ImageDiv */}
      <div className="w-full md:basis-[33%] ">
        <img
          src="/AboutMeIntro.png"
          alt=""
          className="h-full w-5/6 md:w-full m-auto rounded-lg"
        />
      </div>
      {/* TextDiv */}
      <div className="flex flex-col">
        <div className="basis-[67%] p-6 flex flex-col">
          <h3 className="text-darkest font-poppins font-bold text-3xl pb-2 border-b-2 mb-2  border-b-dark">
            About Me
          </h3>
          <p className="max-w-readable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            reiciendis debitis numquam veniam amet perspiciatis provident nemo
            perferendis totam illo itaque fugit, architecto expedita facilis
            recusandae doloremque cupiditate aspernatur? Mollitia esse
            reprehenderit distinctio sed impedit, eum eaque dolorum nostrum
            voluptatum!
          </p>
        </div>
        <div className="flex w-full justify-between items-center p-6 order-last">
          <Button
            to="/about"
            variant="secondary"
            text="Learn More"
            icon={<AiOutlineArrowRight />}
          />
          <Button text="Contact Me" to="/contact" icon={<AiOutlineMessage />} />
        </div>
      </div>
    </div>
  );
};

export default AboutMeIntro;
