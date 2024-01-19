import React from "react";
import servicesData from "../../data/services-data/servicesData";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const ServicesIntro = () => {
  return (
    <div className="max-w-[1240px] bg-transparent m-auto p-6 mb-2 rounded-md">
      <div className="w-4/6 border-b-2 border-b-dark ml-2">
        <h3 className="font-poppins font-bold text-darkest pb-2 text-3xl">
          Services
        </h3>
      </div>
      <div className="md:flex">
        {servicesData.services.map((service, index) => (
          <div
            key={index}
            className="drop-shadow-lg overflow-hidden group bg-transparent md:mx-4 md:flex md:flex-col md:justify-between md:items-start text-darkest  mt-4 rounded-lg p-4 border-2 border-transparent hover:border-darkest hover:text-lightest glass hover:bg-darkest transition-all duration-500"
          >
            <NavLink to="/services">
              <div className="flex justify-start items-center max-w-readable ">
                <h4 className="glass p-4 text-2xl font-poppins mb-2 uppercase">
                  {service.serviceName}
                </h4>
                <p className="hidden md:flex md:text-4xl md:mb-2 ml-auto md:order-1 ">
                  {service.servicesIcon}
                </p>
              </div>
              <p className="md:bg-darkest rounded-md mb-2 font-bold md:text-lightest p-4 md:transform md:translate-x-full md:group-hover:translate-x-0 md:transition-transform md:duration-500">
                {service.shortServiceIntro}
              </p>
            </NavLink>
            <Button to="/services" text="Learn More" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesIntro;
