import React from "react";
// import "../Style/natour/_card.scss";

function Card(props) {
  return (
    <div>
      <div class="col-1-of-3">
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1">&nbsp;</div>
            <h4 class="card__heading">
              <span class="card__heading--span card__heading--span--1">
                {props.title}
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>{props.detail1}</li>
                <li>{props.detail2}</li>
                <li>{props.detail3}</li>
                <li>{props.detail4}</li>
              </ul>
            </div>
          </div>

          <div class="card__side card__side--back card__side--back-1">
            <div class="card__cta">
              <div class="card__price--box">
                <p class="card__price--only">only</p>
                <p class="card__price--value">&#x20b9; {props.price}</p>
              </div>
              <a href="#popup" class="btn btn--white">
                order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
