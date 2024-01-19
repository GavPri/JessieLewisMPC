import React, { useState } from "react";
import Logo from "../Logo";
import MobileLinks from "./MobileLinks";
import DesktopLinks from "./DesktopLinks";

const Header = () => {
  // Use state hook for displaying mobile nav links or desktop navlinks
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  // handle mobile function to display links
  const handleMobileLinks = () => {
    setShowMobileLinks(!showMobileLinks);
  };

  return (
    <header className="bg-transparent fixed top-0 w-full mb-4  left-0 right-0 mx-auto max-w-[1240px] min-w-[280px] h-24 flex justify-between items-center p-4 md:rounded-b-md">
      {/* Logo Div */}
      <Logo height={100} />
      {/* End Of Logo Div */}
      <nav>
        <MobileLinks
          showMobileLinks={showMobileLinks}
          setShowMobileLinks={setShowMobileLinks}
          handleMobileLinks={handleMobileLinks}
        />
        <DesktopLinks />
      </nav>
    </header>
  );
};

export default Header;
