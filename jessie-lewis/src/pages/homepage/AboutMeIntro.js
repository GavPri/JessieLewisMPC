import React from "react";

const AboutMeIntro = () => {
  return (
    <div className="max-w-[1240px] bg-lightest m-auto rounded-md flex">
      {/* ImageDiv */}
      <div className="basis-[33%]">
        <img src="/AboutMeIntro.png" alt="" className="h-full" />
      </div>
      {/* TextDiv */}
      <div className="basis-[67%] p-4 mb-2 ">
        <h3 className="text-darkest font-poppins font-bold mb-2">About Me</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
          facilis voluptates, ut animi impedit facere assumenda eos suscipit
          maiores cum officia, eaque pariatur, asperiores labore cupiditate
          dignissimos. Hic veritatis perspiciatis qui molestias rerum reiciendis
          id sunt officiis, cum consequuntur maxime quaerat tempora temporibus,
          dolorum doloribus, autem deserunt ipsa animi nisi ratione laborum
          dolores possimus? Accusantium sapiente hic recusandae, voluptatibus
          delectus alias quaerat asperiores necessitatibus dolore vel fugit,
          excepturi pariatur quod, dolorem amet nesciunt ipsa nulla ea aperiam!
          Nobis, porro!
        </p>
      </div>
    </div>
  );
};

export default AboutMeIntro;
