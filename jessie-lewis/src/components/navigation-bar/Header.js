import React, { useState } from "react";
import Logo from "../Logo";

const Header = () => {
  // Use state hook for displaying mobile nav links or desktop navlinks
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  // handle mobile function to display links
  const handleMobileLinks = () => {
    setShowMobileLinks(!showMobileLinks);
  };
  
  return (
    <header className="bg-light sticky top-2 m-auto max-w-[1240px] min-w-[280px]">
      {/* Logo Div */}
      <Logo height={45} />
      {/* End Of Logo Div */}
    </header>
  );
};

export default Header;
