import React, { useState, useEffect } from "react";
import "../CSS/Cart.scss";
import { useCounter } from "../Context/CartContext";
import Cartitems from "../Components/Cartitems/Cartitems";
import firebase from "../Shopie_DB/Config";
import { NavLink } from "react-router-dom";

function Cart() {
  //  eslint-disable-next-line
  const { UserId } = useCounter();

  const [isitems, setisitems] = useState(false);
  const [CartItem, setCartItem] = useState([]);
  const [ActualTime, setActualTime] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const Products = firebase.database().ref(`Users/${UserId}/Cart`);
    Products.on("value", (snapshot) => {
      const Products_List = [];

      const todos = snapshot.val();
      setisLoading(false);

      for (let id in todos) {
        Products_List.push({ id, ...todos[id] });
      }

      const reversed = Products_List.reverse();
      setCartItem(reversed);

      var output = [];
      var All_Total = 0;

      for (var i = 0; i < reversed.length; i++) {
        output.push(reversed[i].Total);
      }
      // eslint-disable-next-line
      for (var i = 0; i < output.length; i++) {
        All_Total += output[i];
      }

      // console.log(output[0]);
      console.log(All_Total);

      setActualTime(All_Total);

      var Sorted = [];

      for (i = 0; i < reversed.length; i++) {
        var dataa = {
          Name: reversed[i].Name,
          Image: reversed[i].Image1,
          Total: `₹ ${reversed[i].Total}`,
          Items: reversed[i].noofitems,
        };
        Sorted.push(dataa);
      }

      console.log(Sorted);
      var SortedCart = JSON.stringify(Sorted);
      localStorage.setItem("Cart", SortedCart);
      localStorage.setItem("Total", `₹ ${All_Total}`);

      if (reversed.length === 0) {
        console.log("No items");
        setisitems(true);
      }
    });

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="cart">
        <div className="title">
          <h1>
            Shopping Cart__
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            >
              <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
            </svg>
          </h1>
        </div>

        {isitems ? (
          <div className="noitems">
            <h1>No Items Here !</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
          </div>
        ) : (
          " "
        )}
        {isLoading ? (
          <lottie-player
            src="https://assets8.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        ) : (
          " "
        )}
        <div className="cart_iems">
          {CartItem
            ? CartItem.map((item, key) => <Cartitems item={item} key={key} />)
            : ""}
        </div>
      </div>

      {/* <div className="pb">

        </div> */}
      <div className="Place">
        <h1>Total Amount : </h1>
        <h2>₹{ActualTime}</h2>
        <NavLink exact activeClassName="active_class" to="/Checkout">
          <button>
            Place Order__
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="yellow"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8l4 4-4 4M8 12h7" />
            </svg>
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
