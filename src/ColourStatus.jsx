import React from "react";
import "./ColourStatus.css";

const ColourStatus = () => {
  return (
    <div className="card-container">
      <div className="card">
        <label className="checkbox-label">
          Child
          <input type="checkbox" disabled />
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-label">
          Adult
          <input type="checkbox" disabled />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default ColourStatus;
