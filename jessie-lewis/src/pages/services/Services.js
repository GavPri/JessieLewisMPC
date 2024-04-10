import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import servicesData from "../../data/services-data/servicesData";
import Button from "../../components/Button";

const Services = () => {
  const [openAccordion, setOpenAccordion] = useState(-1);

  const handleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="max-w-[1240px] m-auto mt-24">
      <div className="lg:flex lg:flex-col max-w-[1240px] justify-center items-center w-full">
        <div className="mb-4 m-auto text-center md:text-left px-4 py-2 bg-gradient-to-r from-darkest to-neutral bg-clip-text text-3xl ">
          <h1 className="uppercase text-transparent ml-4 md:text-4xl ">
            Services
          </h1>
        </div>
        {servicesData.services.map((service, index) => (
          <div
            key={index}
            className="max-w-readable border-2 border-neutral rounded-md drop-shadow-md mb-4"
          >
            <div
              className="flex justify-between items-center relative w-full"
              onClick={() => handleAccordion(index)}
            >
              <h4 className="p-4 text-2xl font-poppins uppercase ml-4">
                {service.serviceName}
              </h4>
              <p
                className={
                  openAccordion === index
                    ? "rotate-45 transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }
              >
                <AiOutlinePlus size={20} className="mr-4" />
              </p>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out text-center md:text-left mt-2 px-2 ${
                openAccordion === index ? "max-h-[150vh] mt-2" : "max-h-0"
              }`}
            >
              <p
                className={`font-poppins transition-all duration-300 md:mx-4 mb-4 px-4 ml-4 text-left ${
                  openAccordion === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {service.serviceDescription}
              </p>
              <Button
                to="/contact"
                text="Contact Me"
                className={` ml-6 mb-2 max-w-[50vw]`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
