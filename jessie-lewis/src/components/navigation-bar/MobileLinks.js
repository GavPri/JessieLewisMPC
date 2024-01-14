import React from "react";
// Icons for hamburger menu
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MobileLinks = ({
  showMobileLinks,
  setShowMobileLinks,
  handleMobileLinks,
}) => {
  return (
    <div onClick={handleMobileLinks} className="md:hidden">
      <div className="text-darkest">
        {showMobileLinks ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <ul className={showMobileLinks ? "fixed top-24 right-0" : "fixed top-24 right-[-100%]"
      }>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>
    </div>
  );
};

export default MobileLinks;
