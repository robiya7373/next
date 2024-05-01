import React from "react";
const Check = ({ handleActive }) => {
  return (
    <div className="form-two form-step">
      <div className="bg-svg"></div>
      <h2>Contact</h2>
      <div>
        <label>Phone</label>
        <input type="tel" placeholder="+99xxxxxx" />
      </div>
      <div>
        <label>Adress</label>
        <input type="text" placeholder="Street Address" />
      </div>
      <div>
        <input type="text" placeholder="App, Suite, Building" />
      </div>
      <div>
        <label>City</label>
        <input type="text" placeholder="City" />
      </div>
      <div>
        <label>State</label>
        <input type="text" placeholder="State/Provence" />
      </div>
      <div>
        <label>Zip Code</label>
        <input type="text" placeholder="Postal/Zip Code" />
      </div>
      <div>
        <label>Country</label>
        <select name="country" id="country">
          <option value="">Please select</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
          <option value="Afganistan">Afganistan</option>
        </select>
      </div>
      <div className="btn-group">
        <button
          onClick={() => handleActive("1")}
          type="button"
          className="btn-prev"
          // disabled
        >
          Back
        </button>
        <button
          onClick={() => handleActive("3")}
          type="button"
          className="btn-next"
          // disable
        >
          Next Step
        </button>{" "}
      </div>
    </div>
  );
};

export default Check;
