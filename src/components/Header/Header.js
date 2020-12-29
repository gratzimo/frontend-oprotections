import React from "react";
import "./Header.scss";
import logo from "../../static/images/oprotections-logo.png";

function Header(props) {
  return (
    <div className="header-component">
      <div className="oprotections">OPROTECTIONS</div>
      <div className="logo-div">
        <img src={logo} width="40px" alt="logo" />
      </div>
      <div className="menu">
        <div className="menu-item">About Us</div>
        <div className="menu-item">Contact</div>
        <div className="menu-item">Enquiry</div>
        <div className="buy-now">Buy</div>
      </div>
    </div>
  );
}

export default Header;
