import React from "react";
import { NavLink } from "react-router-dom";

const DesktopLinks = () => {
  return (
    <ul className="hidden md:flex text-darkest">
      <li className="mr-4">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="mr-4">Services</li>
      <li className="mr-4">Contact</li>
      <li className="mr-4">FAQs</li>
    </ul>
  );
};

export default DesktopLinks;
