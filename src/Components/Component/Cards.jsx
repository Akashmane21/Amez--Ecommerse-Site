import React from "react";

// import {NavLink} from 'react-router-dom'
// import axios from 'axios';
import "../../CSS/product_card.scss";

function Favcard(props) {
  return (
    <>
      <div className="product_container">
        <h2>{props.title}</h2>
        <div className="product_component">
          <div className="product_component_product">
            <img alt="product_img" src={props.img1} />
            <h7>{props.name1}</h7>
          </div>
          <div className="product_component_product">
            <img alt="product_img" src={props.img2} />
            <h7>{props.name2}</h7>
          </div>
          <div className="product_component_product">
            <img alt="product_img" src={props.img3} />
            <h7>{props.name3}</h7>
          </div>
          <div className="product_component_product">
            <img alt="product_img" src={props.img4} />
            <h7>{props.name4}</h7>
          </div>
        </div>

        <button id="btn">see more</button>
      </div>
    </>
  );
}

export default Favcard;
