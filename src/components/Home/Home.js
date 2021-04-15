import React from "react";
import "./Home.scss";
import homeBg from "../../static/images/home-2.jpg";
import airPurifier from "../../static/images/1.png";

function Home(props) {
  return (
    <div className="home-component">
      {/* <div className="home-bg"></div> */}
      {/* <img className="home-bg" src={homeBg} alt="home-bg" /> */}

      <div className="details-div">
        <div className="details-heading">O Air Purifier</div>
        <div className="details-subheading">Be smart and join the genius</div>
        <div className="details-text">
          Most efficient and sustainable air purification <br />
          UV Air purifier with certified gas & Hepa filtration
          <br />
          Live AQI
        </div>
        <div className="ap-div">
          <img className="air-purifier" src={airPurifier} alt="air-purifier" />
        </div>
      </div>
    </div>
  );
}

export default Home;
