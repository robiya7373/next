import React from "react";

const Step3 = () => {
  return (
    <div className="form-three form-step">
      <div className="bg-svg"></div>
      <h2>Security</h2>
      <div>
        <label>Email</label>
        <input type="email" placeholder="Your email address" />
      </div>
      <div>
        <label>Username</label>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <input type="password" placeholder="Confirm Password" />
      </div>
      <div className="chackbox">
        <input type="checkbox" />
        <label>Receive our news latter and special offers</label>
      </div>
    <div className="btn-group">
    <button  onClick={() => handleActive("2")} type="button" className="btn-prev" disabled>
          Back
        </button>
      <button  onClick={() => handleActive("")} type="button" className="btn-submit" disable>Submit</button>
    </div>
    </div>
  );
};

export default Step3;
