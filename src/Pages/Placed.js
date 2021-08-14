import React from 'react'
import Header from '../header/Header'
import '../CSS/Placed.scss'
import {NavLink} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


function Placed() {
    return (
        <div className="bgm">
            <Header />

<div className="main_block">

<Slide top>

        <div className="names">
           <h1>Order Placed Successfully 
           <svg xmlns="http://www.w3.org/2000/svg" width="38" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
           </h1>

           <h5>Your order is on the way 🚚</h5>
           <NavLink exact activeClassName = "active_class" to="/">

           <button>Continue Shopping__
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h7"/></svg>           </button>
        </NavLink>
        </div>
        </Slide>

        <div className="lottie">
        <Fade left>

            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_jmejybvu.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
      </Fade>
        </div>

           
       

</div>
           
        </div>
    )
}

export default Placed
