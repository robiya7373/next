import React from "react";

const Sitebar = ({ active }) => {
  return (
    <div className="progress">
      <div className="logo">
        <a href="">Directory</a>
      </div>
      <ul className="progress-steps">
        <li className="step active">
          <span style={{ backgroundColor: active == "1" ? "" : "" }}>1</span>
          <p>
            Personal <br />
            <span>25 secs to complete</span>
          </p>
        </li>
        <li className="step">
          <span style={{ backgroundColor: active == "2" ? "" : "" }}>2</span>
          <p>
            Contact <br />
            <span>60 secs to complete</span>
          </p>
        </li>
        <li className="step">
          <span style={{ backgroundColor: active == "3" ? "" : "" }}>3</span>
          <p>
            Security <br />
            <span>30 secs to complete</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sitebar;
