import React , { useState  , useEffect} from "react";
import "./Header.scss";
import {NavLink} from 'react-router-dom'
import Headroom from "react-headroom";
import {useCounter} from '../Context/CartContext'
import firebase from '../Shopie_DB/Config'
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();

  // eslint-disable-next-line
  const {UserId} = useCounter()
// eslint-disable-next-line
const [length, setlength] = useState(" ")

useEffect(() => {

  const Products = firebase.database().ref(`Users/${UserId}/Cart`);
  Products.on('value' , (snapshot)=>{
    const Products_List = []

    const todos =snapshot.val()
   
    for(let id in todos){
      Products_List.push({id, ...todos[id]})
    }
    
    const reversed = Products_List.reverse()
    setlength(reversed.length)
    
  })



// eslint-disable-next-line
}, [])

function logout(){
  localStorage.removeItem("Userid");
  history.push('/Auth') 

}



  return (
    <>
    <Headroom>
    <div className="search_back">

   

      <header className= "header">




      <NavLink exact activeClassName = "active_class" to="/">

        {/* <img alt="feedback animation" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" /> */}
          <span className="logo-name">

          {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>      */}
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>

             <span className="logo-name p-l">Shopie</span> </span>
        </NavLink>

        <ul className= "mob_icon">
        <li>
              <a href="#Login" className="pos1">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

              </a>
            </li>
        <li>
        <NavLink exact activeClassName = "active_class" to="/Wishlist" className="pos">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>

             </NavLink>
            </li>
        <li>

 
        <NavLink exact activeClassName = "active_class" to="/Cart">
              <span className="cartlen">{length}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
              </NavLink>
            </li>
            

        </ul>


        <div className="search">
        <div class="dropdown">
  <select name="cars" id="cars">
    <option value="All" className="item">All</option>
    <option value="Home" className="item">Home</option>
    <option value="Fashion" className="item">Fashion</option>
    <option value="Electronics" className="item">Electronics</option>
    <option value="Mobiles" className="item">Mobiles</option>
    <option value="Dresses" className="item">Dresses</option>
    <option value="Shoes" className="item">Shoes</option>
    <option value="Watches" className="item">Watches</option>
    <option value="Appliances" className="item">Appliances</option>
    <option value="Kids" className="item">Kids</option>
    <option value="Books" className="item">Books</option>

  </select>


      
         
      </div>
        <input className="search1" placeholder="Search here" />
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>







                <ul className= "menu">
       
                <li>
              <a href="#Notifications" className="menu_icon">
              <div className="header_btn">

              {/* <span className="cartlen">1</span> */}

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <h5>_{UserId}</h5>
              </div>
              </a>
              
            </li>
          
            <li>
            <NavLink exact activeClassName = "active_class" to="/Wishlist">

              <div className="header_btn">

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <h5>Wishlist</h5>
              </div>
              </NavLink>
            </li>
            <li>
            <NavLink exact activeClassName = "active_class" to="/Orders">

              {/* <a href="#Notifications" className="menu_icon"> */}
              <div className="header_btn">

              {/* <span className="cartlen">1</span> */}

         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11.5" cy="8.5" r="5.5"/><path d="M11.5 14v7"/></svg>
              <h5>Orders</h5>
              </div>
              {/* </a> */}
              </NavLink>
            </li>
            <li >
            <NavLink exact activeClassName = "active_class" to="/Cart">
        <div className="header_btn">

              <span className="cartlen">{length}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
           <h5>Cart</h5>
        </div>
           </NavLink>
              
            </li>
            <li className="login_div">
              <button className="Login" onClick={logout}>logout</button>
            </li>
           
        </ul>




      </header>
   </div>
   </Headroom>
   </>
   );
}
export default Header;
