import React from "react";
import "./Collection.scss";
import { NavLink } from "react-router-dom";
import LightSpeed from "react-reveal/LightSpeed";

function Collection() {
  return (
    <LightSpeed right>
      <div className="Coll">
        {/* <h2>Popular Categories ✨</h2> */}
        <NavLink exact activeClassName="active_class" to="/Category">
          <div className="Coll_body">
            <div
              className="Coll_block"
              onClick={() => localStorage.setItem("Category", "Offers")}
            >
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                alt="img"
              />
              <h3>Top Offers</h3>
            </div>

            <div
              className="Coll_block"
              onClick={() => localStorage.setItem("Category", "Electronics")}
            >
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                alt="img"
              />
              <h3>Electronics</h3>
            </div>
            <div
              className="Coll_block"
              onClick={() => localStorage.setItem("Category", "Mobiles")}
            >
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt="img"
              />
              <h3>Mobiles</h3>
            </div>
            <div
              className="Coll_block"
              onClick={() => localStorage.setItem("Category", "Appliances")}
            >
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                alt="img"
              />
              <h3>Grocery</h3>
            </div>
            <div
              className="Coll_block"
              onClick={() => localStorage.setItem("Category", "Fashion")}
            >
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
                alt="img"
              />
              <h3>Fashion</h3>
            </div>
            <div
              className="Coll_block"
              onClick={() => localStorage.setItem("Category", "Home")}
            >
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                alt="img"
              />
              <h3>Home</h3>
            </div>
            <div
              className="Coll_block"
              onClick={() => localStorage.setItem("Category", "Appliances")}
            >
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                alt="img"
              />
              <h3>Appliances</h3>
            </div>
            <div
              className="Coll_block"
              onClick={() => localStorage.setItem("Category", "Travel")}
            >
              <img
                src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
                alt="img"
              />
              <h3>Travel</h3>
            </div>
          </div>
        </NavLink>
      </div>
    </LightSpeed>
  );
}

export default Collection;
