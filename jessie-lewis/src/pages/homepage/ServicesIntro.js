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
      <div className="lg:flex">
        {servicesData.services.map((service, index) => (
          <div key={index}>
            <NavLink to="/services">
              <p className="">{service.servicesIcon}</p>
              <h4 className="">{service.serviceName}</h4>
              <p className="">{service.shortServiceIntro}</p>
            </NavLink>
            <Button to="/services" text="Learn More" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesIntro;
