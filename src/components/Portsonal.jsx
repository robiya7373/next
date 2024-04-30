import React from "react";

const Portsonal = ({ handleActive }) => {
  return (
    <div className="form-one form-step active">
      <div className="bg-svg"></div>
      <h2>Personal Information</h2>
      <p>Enter your personal information correctly</p>
      <div>
        <label>First Name</label>
        <input type="text" placeholder="e.g Robiya" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder="e.g Ekinboyeva" />
      </div>
      <div className="birth">
        <label>Data of Birth</label>
        <div className="grouping">
          <input
            type="text"
            patter="[0-9]*"
            name="day"
            //   value=""
            min="0"
            max="31"
            placeholder="DD"
          />
          <input
            type="text"
            patter="[0-9]*"
            name="month"
            //   value=""
            min="0"
            max="12"
            placeholder="MM"
          />
          <input
            type="text"
            patter="[0-9]*"
            name="year"
            //   value=""
            min="0"
            max="20 "
            placeholder="YYYY"
          />
        </div>
      </div>
      <div className="btn-group">
        <button type="button" className="btn-prev" disabled>
          Back
        </button>
        <button
          onClick={() => handleActive("2")}
          type="button"
          className="btn-next"
          disable
        >
          Next Step
        </button>{" "}
      </div>
    </div>
  );
};

export default Portsonal;
