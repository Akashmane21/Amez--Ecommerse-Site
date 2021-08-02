import React from "react";
import "./Header.scss";
// import Headroom from "react-headroom";
// import Zoom from 'react-reveal/Zoom';
// import {NavLink} from 'react-router-dom'
import Headroom from "react-headroom";


function Header() {

  return (
    <>
    <Headroom>
    <div className="search_back">

   

      <header className= "header">




        <a href="/" className="logo">
        {/* <img alt="feedback animation" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" /> */}
          <span className="logo-name">Shopie</span>
        </a><br />




        <div className="search">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          All
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Electronics</a></li>
            <li><a class="dropdown-item" href="#">Mobile phones</a></li>
            <li><a class="dropdown-item" href="#">Home</a></li>
            <li><a class="dropdown-item" href="#">Fashion</a></li>

            <li><a class="dropdown-item" href="#">Aplliances</a></li>

            <li><a class="dropdown-item" href="#">Kids</a></li>

            <li><a class="dropdown-item" href="#">Books</a></li>
            <li><a class="dropdown-item" href="#">Shoes</a></li>

        </ul>
      </div>
        <input className="search" placeholder="Search here" />
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>





        {/* <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "red"}}
        >
          <span className= "navicon"></span>
        </label> */}




                <ul className= "menu">
       
            <li>
              <a href="#Login">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>

              </a>
            </li>
        
            <li>
              <a href="#Fav">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>

              </a>
            </li>
            <li>
              <a href="#Cart" className="menu_icon"> 
              <span className="cartlen">2</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
              </a>
            </li>
            <li>
              <a href="#Notifications" className="menu_icon">
              <span className="cartlen">2</span>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>

              </a>
            </li>
           
           
        </ul>




      </header>
   </div>
   </Headroom>
   </>
   );
}
export default Header;
