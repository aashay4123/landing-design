import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div id="home">
      <h1>
        Building Automation | Enjoy your automation experience more Securely
      </h1>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Building Automation</span>
          <span class="heading-primary--sub">
            {" "}
            Enjoy your automation experience more Securely{" "}
          </span>
        </h1>
        <NavLink to="#" class="btn btn--white btn--animation">
          Know More
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
