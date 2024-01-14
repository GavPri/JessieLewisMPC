import React from "react";

const Logo = ({ height = 45 }) => {
  return (
    <img
      src="/JessieLewis.png"
      alt="Logo for Jessie Lewis Mental Performance Consulting"
      height={height}
      width={height}
    />
  );
};

export default Logo;
