import React from 'react'
import './Navbar.scss'
// import '../../CSS/product_card.scss'
import {useCounter} from '../../Context/CartContext'
import {NavLink} from 'react-router-dom'

function Navbar() {
    const { UserName} = useCounter()

    function open(){

         document.querySelector(".navbar-demo").classList.toggle("open-nav");
        
    }
      
    return (
        <div >


<header id="header" class="navbar-demo">
	<div class="nav-bar">
    <div className="profile">

    <img src="https://www.vippng.com/png/full/80-804695_profile-picture-default-png.png" alt="" />
		<h3>{UserName}</h3>
    <hr />
    </div>
        <ul>
			<li>
            {/*  eslint-disable-next-line */}
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <h5>Wishlist</h5>
            </a>
         
            {/* eslint-disable-next-line */}
				<a href="#">
                <NavLink exact activeClassName = "active_class" to="/Orders">

{/* <a href="#Notifications" className="menu_icon"> */}
<div className="header_btn">

{/* <span className="cartlen">1</span> */}

<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11.5" cy="8.5" r="5.5"/><path d="M11.5 14v7"/></svg>
<h5>Orders</h5>
</div>
{/* </a> */}
</NavLink></a>
         

                {/* eslint-disable-next-line */}
				<a href="#">About Me</a>
                {/* eslint-disable-next-line */}
				<a href="#">Contact Me</a>
			</li>
		</ul>
		
	</div>

	<button type="" class="menu-btn" onClick={open}>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 9.5H3M21 4.5H3M21 14.5H3M17 19.5H3"/></svg> */}
    <i class="fa fa-bars" aria-hidden="true"></i>
    
    </button>
</header> 

        </div>
    )
}

export default Navbar
