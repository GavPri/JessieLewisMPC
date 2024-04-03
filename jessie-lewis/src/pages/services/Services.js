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
      ></div>
      {/* Services list */}
      {/* ----- Bannner  */}
      <div className="m-auto text-center px-4 py-2 bg-gradient-to-r from-darkest to-neutral bg-clip-text text-3xl border-b-2 w-[50%] border-darkest">
        <h1 className="uppercase text-transparent">Services</h1>
      </div>
      <div className="lg:flex m-auto max-w-[80vh] md:max-w-[1240px]">
        {servicesData.services.map((service, index) => (
          <div
            key={index}
            className="text-center drop-shadow-lg overflow-hidden group bg-transparent sm:w-11/12 lg:mx-4 lg:flex lg:flex-col lg:justify-between lg:items-start text-darkest  mt-4 rounded-lg p-4 border-2 border-transparent hover:border-darkest hover:text-lightest glass hover:bg-darkest transition-all duration-500"
          >
            <NavLink to="/services">
              <div className="flex justify-center items-center max-w-readable bg-gradient-to-r from-darkest to-neutral bg-clip-text text-3xl border-b-2 border-neutral ">
                <h4 className=" p-4 text-2xl font-poppins uppercase text-transparent">
                  {service.serviceName}
                </h4>
                <p className="hidden lg:flex lg:text-4xl lg:mb-2 ml-auto lg:order-1 ">
                  {service.servicesIcon}
                </p>
              </div>
              <p className="lg:bg-darkest rounded-md mb-2 font-bold lg:text-lightest p-4 lg:transform lg:translate-x-full lg:group-hover:translate-x-0 lg:transition-transform lg:duration-500">
                {service.serviceDescription}
              </p>
            </NavLink>
            <Button to="/contact" text="Contact Me" className={`m-auto`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
