import React from 'react'
import './Leftmenu.scss'
import {NavLink} from 'react-router-dom'
import Fade from 'react-reveal/Fade';


function Leftmenu() {
    return (
        <Fade left>
        <div className="Left">

        <div className="Head">

        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <h1>Categories</h1>
        </div>
        <NavLink exact activeClassName = "active_class" to="/Category" >

        <div className="list">
            <ul>
                                   {/* eslint-disable-next-line */}
            <li onClick={()=>  localStorage.setItem('Category',"Electronics")}><a class="dropdown-item" href="#">
            Electronics</a></li>
                       {/* eslint-disable-next-line */}
            <li onClick={()=>  localStorage.setItem('Category',"Mobiles")}><a class="dropdown-item" href="#">
            Mobile phones</a></li>
                       {/* eslint-disable-next-line */}
            <li onClick={()=>  localStorage.setItem('Category',"Home")}><a class="dropdown-item" href="#">Home</a></li>
                       {/* eslint-disable-next-line */}
            <li onClick={()=>  localStorage.setItem('Category',"Fashion")}><a class="dropdown-item" href="#">Fashion</a></li>
                       {/* eslint-disable-next-line */}
            <li onClick={()=>  localStorage.setItem('Category',"Appliances")}><a class="dropdown-item" href="#">Aplliances</a></li>
                       {/* eslint-disable-next-line */}
            <li onClick={()=>  localStorage.setItem('Category',"Kids")}><a class="dropdown-item" href="#">Kids</a></li>
           {/* eslint-disable-next-line */}
            <li onClick={()=>  localStorage.setItem('Category',"Books")}><a class="dropdown-item" href="#">Books</a></li>
                       {/* eslint-disable-next-line */}
            <li onClick={()=>  localStorage.setItem('Category',"Shoes")}><a class="dropdown-item" href="#">Shoes</a></li>

            </ul>
        </div>
        </NavLink>


        <div className="Bottom">


<div className="bottom_icon">
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg><h1>Offer Zone</h1>
</div>

<div className="bottom_icon">
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
<h1>Help </h1>
</div>

<div className="bottom_icon">
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<h1>My Account</h1>
</div>

</div>
            
        </div>
        </Fade>
    )
}

export default Leftmenu
