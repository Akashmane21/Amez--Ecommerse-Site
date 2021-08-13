import React from 'react'
import './Navbar.scss'
// import '../../CSS/product_card.scss'
function Navbar() {

    function open(){

        // document.querySelector(document).ready(function () {
        //     document.querySelector(".menu-btn").click(function (event) {
              document.querySelector(".navbar-demo").classList.toggle("open-nav");
        //     });
        //   });
    }
      
    return (
        <div >


<header id="header" class="navbar-demo">
	<div class="nav-bar">
		<ul>
			<li>
            {/*  eslint-disable-next-line */}
            <a href="#">Home</a>
            {/* eslint-disable-next-line */}
				<a href="#">Gallery</a>
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
