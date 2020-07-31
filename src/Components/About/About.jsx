import React from "react";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import { NavLink } from "react-router-dom";
// import nat1 from "../img/nat-1-large.jpg"
// import nat2 from "../img/nat-2-large.jpg"
// import nat3 from "../img/nat-3-large.jpg"


function About() {
  return (
    <div id="about">
      
      <section class="section-about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    About Us
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary  u-margin-bottom-small u-margin-bottom-small">
                        Heading 3 some description of product
                    </h3>
                    <p class="paragraph">
                    <p>
        <LoremIpsum p={1} />
      </p>
                    </p>
                    <h3 class="heading-tertiary u-margin-bottom-small">
                        Heading 3 some description of product
                    </h3>
                    <p class="paragraph">
                    <p>
        <LoremIpsum p={1} />
      </p>
                    </p>
                    <NavLink to="#" class="btn-text">learn more &rarr;</NavLink>
                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        {/* <img src={nat1} alt="photo 1" class="composition__photo composition__photo--p1"/>
                        <img src={nat2} alt="photo 2" class="composition__photo composition__photo--p2"/>
                        <img src={nat3} alt="photo 3" class="composition__photo composition__photo--p3"/> */}
                    </div>
                </div>
            </div>
        </section>
     
    </div>
  );
}

export default About;
