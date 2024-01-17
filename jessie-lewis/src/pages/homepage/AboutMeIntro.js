import React from "react";
import Button from "../../components/Button";
import {
  AiOutlineArrowRight,
  AiOutlineMessage,
  AiOutlinePhone,
} from "react-icons/ai";

const AboutMeIntro = () => {
  return (
    <div className="max-w-[1240px] bg-lightest m-auto rounded-md flex mb-2">
      {/* ImageDiv */}
      <div className="basis-[33%]">
        <img src="/AboutMeIntro.png" alt="" className="h-full" />
      </div>
      {/* TextDiv */}
      <div className="flex flex-col">
        <div className="basis-[67%] p-6 flex flex-col">
          <h3 className="text-darkest font-poppins font-bold ">About Me</h3>
          <p className="max-w-readable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
            facilis voluptates, ut animi impedit facere assumenda eos suscipit
            maiores cum officia, eaque pariatur, asperiores labore cupiditate
            dignissimos. Hic veritatis perspiciatis qui molestias rerum
            reiciendis id sunt officiis, cum consequuntur maxime quaerat tempora
            temporibus, dolorum doloribus, autem deserunt ipsa animi nisi
            ratione laborum dolores possimus? Accusantium sapiente hic
            recusandae, voluptatibus delectus alias quaerat asperiores
            necessitatibus dolore vel fugit, excepturi pariatur quod, dolorem
            amet nesciunt ipsa nulla ea aperiam! Nobis, porro!
          </p>
        </div>
        <div className="flex w-full justify-between items-center p-6">
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
