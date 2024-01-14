import React from "react";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="bg-light sticky top-2 m-auto max-w-[1240px] min-w-[280px]">
      {/* Logo Div */}
      <Logo height={45} />
      {/* End Of Logo Div */}
    </header>
  );
};

export default Header;
