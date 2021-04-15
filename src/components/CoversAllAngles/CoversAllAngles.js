import React from "react";
import "./CoversAllAngles.scss";
import topIcon from "../../static/images/top-view.png";

function CoversAllAngles(props) {
  return (
    <div className="component-covers-all-angles">
      <div className="caa-heading">Covers all angles</div>
      <div className="caa-subheading">
        With its 360 degree air intake and 360 degree air output . O air
        purifier inhales bad air from every angle and after purification return
        it to every angle by it 360 degree air output vent more effectively.
      </div>
      <div className="caa-image-div">
        <div className="caa-specs">
          <div className="caa-data-div">
            <div className="caa-data">2700</div>
            <div className="caa-data-name">rpm</div>
          </div>
          <div className="caa-data-div">
            <div className="caa-data">700</div>
            <div className="caa-data-name">cfm</div>
          </div>
        </div>
        <div className="caa-img">
          <img src={topIcon} alt="top-img" />
        </div>
      </div>
      <div className="tagline-div">
        12 mins to circulate air once in 440 sq ft room
      </div>
    </div>
  );
}

export default CoversAllAngles;
