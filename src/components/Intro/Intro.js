import React from "react";
import "./Intro.scss";
import apImg from "../../static/images/2.png";
function Intro(props) {
  return (
    <div className="component-intro">
      <div className="intro-heading">
        O Air Purifier<br />
        <span>keeps your indoor air sterile</span>
      </div>
      <div className="intro-subheading">
        Clean air is not a luxury, it’s a necessity now. With the rise of air
        pollution and viruses and bacteria in air, it is very important to have
        an efficient & durable preventive health care solution in your space.
        And O air purifier does it better than anybody else in the market.
      </div>
      <div className="details-div">
        <div className="data-div">
          <div className="data">5.0</div>
          <div className="data-name">ACH</div>
        </div>
        <div className="line-div"></div>
        <div className="data-div">
          <div className="data">405</div>
          <div className="data-name">CADR</div>
        </div>
      </div>
      <div className="ap-img-div">
        <img src={apImg} alt="air-purifier-front-view" />
      </div>
    </div>
  );
}

export default Intro;
