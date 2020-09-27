import React from "react";
import Logo from '../assets/google.png'

const logo = () => {
  return (
    <div className="container-logo">
      <img className="logo" src={Logo} alt="Logo Google" />
    </div>
  );
};

export default logo;