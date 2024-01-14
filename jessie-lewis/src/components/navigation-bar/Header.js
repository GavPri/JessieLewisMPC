import React, { useState } from "react";
import Logo from "../Logo";
import MobileLinks from "./MobileLinks";

const Header = () => {
  // Use state hook for displaying mobile nav links or desktop navlinks
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  // handle mobile function to display links
  const handleMobileLinks = () => {
    setShowMobileLinks(!showMobileLinks);
  };

  return (
    <header className="bg-light sticky top-2 m-auto max-w-[1240px] min-w-[280px] h-24 flex justify-between items-center p-4">
      {/* Logo Div */}
      <Logo height={45} />
      {/* End Of Logo Div */}
      <nav>
        <MobileLinks
          showMobileLinks={showMobileLinks}
          setShowMobileLinks={setShowMobileLinks}
          handleMobileLinks={handleMobileLinks}
        />
      </nav>
    </header>
  );
};

export default Header;
