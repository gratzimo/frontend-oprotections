import React from "react";
import "./FeatureList.scss";

function FeatureList(props) {
  return (
    <div className="component-feature-list">
      {props.data.map((item, index) => (
        <div key={index} className="features-div">
          <img
            style={{ filter: item.invert ? "invert(1)" : "invert(0)" }}
            src={item.icon}
            alt="feature-icon"
          />
          <div className="feature-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
