import React from "react";
import "./Home.scss";
import homeBg from "../../static/images/home-2.jpg";
import airPurifier from "../../static/images/1.png";

function Home(props) {
  return (
    <div className="home-component">
      <img className="home-bg" src={homeBg} alt="home-bg" />
      <img className="air-purifier" src={airPurifier} alt="air-purifier" />
      <div className="details-div">
        <div className="details-head">Introducing</div>
        <div className="details-name">O Air Purifier</div>
        <div className="details-text">
          Clean breathing air for you and your family should not be a luxury. O
          Air Purifier, developed by O Protections, is a compact, easy to use
          and essential air filter made for the common Indian household.O
          Completely Made in India, O Air Purifier is a durable and affordable
          Air Purifier available in the market.
        </div>
      </div>
    </div>
  );
}

export default Home;
