import React from "react";
import "./Header.scss";
import logo from "../../static/images/oprotections-logo.png";

const amazonLink =
  "https://www.amazon.in/Air-purifier-FILTRATION-STERILIZES-DISINFECTS/dp/B08XTVCHZS/ref=sr_1_3?dchild=1&keywords=o+air+purifier&qid=1618497797&sr=8-3";

function Header(props) {
  const openLink = (link) => {
    window.open(link);
  };
  return (
    <div className="header-component">
      <div className="oprotections">O PROTECTIONS</div>
      <div className="logo-div">
        <img src={logo} height="40px" alt="logo" />
      </div>
      <div className="menu">
        <div className="menu-item">About Us</div>
        <div className="menu-item">Contact</div>
        <div className="menu-item">Enquiry</div>
        <div onClick={() => openLink(amazonLink)} className="buy-now">
          Buy
        </div>
      </div>
    </div>
  );
}

export default Header;
