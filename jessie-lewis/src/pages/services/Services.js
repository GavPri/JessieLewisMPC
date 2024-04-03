import React from "react";
// ----- Hero Image
import service from "../../images/services.jpg";
// ----- Services data
import servicesData from "../../data/services-data/servicesData";
// ----- NavLink & Button import
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../components/Button";

const Services = () => {
  // ----- Style of div to hold background image
  const divStyle = {
    backgroundImage: `url(${service})`,
    backgroundSize: "cover",
    backgroundPosition: "top, center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="max-w-[1240px] m-auto mt-24">
      {/* ----- Banner image */}
      <div
        className="w-full h-[50vh] bg-darkest flex justify-center items-center"
        style={divStyle}
      >
        {/* ----- Bannner  */}
        <div className="px-4 py-2 bg-gradient-to-r from-darkest to-light text-3xl rounded-md flex justify-center items-center">
          <h1 className="uppercase text-2xl">Services</h1>
        </div>
      </div>
      {/* Services list */}
      <div className="lg:flex">
        {servicesData.services.map((service, index) => (
          <div
            key={index}
            className="drop-shadow-lg overflow-hidden group bg-transparent sm:w-11/12 lg:mx-4 lg:flex lg:flex-col lg:justify-between lg:items-start text-darkest  mt-4 rounded-lg p-4 border-2 border-transparent hover:border-darkest hover:text-lightest glass hover:bg-darkest transition-all duration-500"
          >
            <NavLink to="/services">
              <div className="flex justify-start items-center max-w-readable ">
                <h4 className="glass p-4 text-2xl font-poppins mb-2 uppercase">
                  {service.serviceName}
                </h4>
                <p className="hidden lg:flex lg:text-4xl lg:mb-2 ml-auto lg:order-1 ">
                  {service.servicesIcon}
                </p>
              </div>
              <p className="lg:bg-darkest rounded-md mb-2 font-bold lg:text-lightest p-4 lg:transform lg:translate-x-full lg:group-hover:translate-x-0 lg:transition-transform lg:duration-500">
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

export default Services;
