import React from "react";
import servicesData from "../../data/services-data/servicesData";
import Button from "../../components/Button";

const ServicesIntro = () => {
  return (
    <div className="max-w-[1240px] bg-lightest m-auto p-6 mb-2 rounded-md">
      <div className="w-4/6 border-b-2 border-b-dark">
        <h3 className="font-poppins font-bold text-darkest pb-2 text-3xl">
          Services
        </h3>
      </div>
      <div className="md:flex">
        {servicesData.services.map((service, index) => (
          <div
            key={index}
            className="md:mx-4 md:flex md:flex-col md:justify-between md:items-start text-lightest bg-seafoam mt-4 rounded-lg p-4 border-2 border-transparent hover:border-seafoam hover:text-darkest hover:bg-lightest transition-all duration-500"
          >
            <div className="flex justify-start items-center max-w-readable ">
              <h4 className="text-2xl font-poppins mb-2 uppercase">
                {service.serviceName}
              </h4>
              <p className="hidden md:text-4xl md:mb-2 ml-auto md:order-1">
                {service.servicesIcon}
              </p>
            </div>
            <p className="mb-2 font-bold">{service.shortServiceIntro}</p>
            <Button to="/services" text="Learn More" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesIntro;
