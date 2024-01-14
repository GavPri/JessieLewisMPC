import React from "react";
// Icons for hamburger menu
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MobileLinks = ({
  showMobileLinks,
  setShowMobileLinks,
  handleMobileLinks,
}) => {
  return (
    <div onClick={handleMobileLinks}>
      {showMobileLinks ? (
        <AiOutlineClose size={20} />
      ) : (
        <AiOutlineMenu size={20} />
      )}
    </div>
  );
};

export default MobileLinks;
