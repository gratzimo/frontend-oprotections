import React from "react";
import "./UltraQuiet.scss";
import frontImg from "../../static/images/6.png";

function UltraQuiet(props) {
  return (
    <div className="component-ultra-quiet">
      <div className="uq-title">Ultra Quiet and energy efficient</div>
      <div className="uq-subtitle">
        Sleep soundly with the ultra – quiet O Air purifier. Advanced
        aerodynamics reduce noise and wind resistance so you can enjoy peace and
        silence at night. ( Speed 1 for silent mode ).
      </div>
      <div className="energy-data">
        <div className="energy-stats">
          <div className="energy-title">
            LOW POWER CONSUMPTION <span>(kw-h)</span>
          </div>
          <div className="energy-data-div">
            <div className="data-div">
              <div className="data">0.44</div>
              <div className="data-name">Speed 1</div>
            </div>
            <div className="data-div">
              <div className="data">0.72</div>
              <div className="data-name">Speed 2</div>
            </div>
            <div className="data-div">
              <div className="data">1.2</div>
              <div className="data-name">Speed 3</div>
            </div>
            <div className="data-div">
              <div className="data">2.1</div>
              <div className="data-name">Speed 4</div>
            </div>
          </div>
        </div>
        <div className="image-div">
          <img src={frontImg} alt="front-view" />
        </div>
      </div>
      <div className="tagline-title">YOUR GENIUS ATMOSPHERE</div>
    </div>
  );
}

export default UltraQuiet;
