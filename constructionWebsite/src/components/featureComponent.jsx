import React from "react";
import "./featureComponent.css";

const FeatureComponent = ({icon, title, description, color}) => {
  return (
    <div className="feature-card">
      <div className="icon" style={{color: color}}>{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p>{description}</p>
      <button style={{backgroundColor: "white", color: "black"}}>Get started now!</button>
    </div>
  );
};

export default FeatureComponent;
