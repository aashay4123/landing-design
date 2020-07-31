import React from "react";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import Card from "../Card";
import { NavLink } from "react-router-dom";


function Services() {
  return (
    <div id="services">
      <h1>Services</h1>
    
      <section id="section-products" class="section-products">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Our Services
                </h2>
            </div>
            <div class="row">
                
                        <Card title="Product 1" detail1="detail 1" detail2="detail 2" detail3="detail 3" detail4="detail 4" price="4999" />
                        <Card title="Product 2" detail1="detail 1" detail2="detail 2" detail3="detail 3" detail4="detail 4" price="4999" />
                        <Card title="Product 3" detail1="detail 1" detail2="detail 2" detail3="detail 3" detail4="detail 4" price="4999" />
                        
                    
                </div>
                            <div class="u-center-text u-margin-top-huge ">
                <NavLink to="#" class="btn btn--green">know More</NavLink>
            </div>
        </section>

    </div>
  );
}

export default Services;
