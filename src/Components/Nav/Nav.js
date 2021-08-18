import React from 'react'
import {useCounter} from '../../Context/CartContext'
import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './Nav.scss'
function Nav() {
    let history = useHistory();
    const { UserName} = useCounter()
    
    function logout(){
        localStorage.removeItem("authentication")
         localStorage.removeItem('Userid');
         localStorage.removeItem('UserName');
        history.push('/') 
      
      }
      
    return (
        
        <div>
            <div className="profile">

            <img src="https://www.vippng.com/png/full/80-804695_profile-picture-default-png.png" alt="" />
                <h3>{UserName}</h3>
           
            </div>

            <NavLink exact activeClassName = "active_class" to="/Wishlist" className="pos">
        <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <h5>Wishlist</h5>  
                    
        </div>
        </NavLink>

        <NavLink exact activeClassName = "active_class" to="/Orders" className="pos">

        <div className="flex">
        <i class="fa fa-truck" aria-hidden="true"></i>
                            <h5>Orders</h5>  
                    
        </div>
        </NavLink>

        <NavLink exact activeClassName = "active_class" to="/Cart" className="pos">

        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>               
             <h5>Cart</h5>  
                    
        </div>
        </NavLink>

        


<div className="flex logout" onClick={logout}>
<i class="fa fa-sign-out" aria-hidden="true"></i>
    <h5>logout</h5>
</div>
        </div>
        
    )
}

export default Nav
