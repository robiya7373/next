import React, { useState } from "react";
import Sitebar from "./Sitebar";
import Portsonal from "./Portsonal";
import Check from "./Check";
import Step3 from "./Step3";
import Thanks from "./Thanks";

const Register = () => {
  const [active, setActive] = useState(1);

  console.log(active);

  const handleActive = (type) => {
    setActive(type);
  };

  return (
    <div class="site" id="page">
      <div class="container">
        <div class="form-box ">
          <Sitebar active={active} />

          <form action="">
            {active == "1" && <Portsonal handleActive={handleActive} />}
            {active == "2" && <Check handleActive={handleActive} />}
            {active == "3" && <Step3 handleActive={handleActive} />}
            {active == "4" && <Thanks handleActive={handleActive} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
