import React from 'react'
import './Suggest.scss'
import {useCounter} from '../../Context/CartContext'
import {NavLink} from 'react-router-dom'

function Suggest({item}) {
    const {setCartdata ,Cartdata , wishlist , setwishlist ,   Desdata, setDesdata} = useCounter()

    function Clicked(){
          
        // window.location.reload()
        setDesdata(item) 
        console.log(item);
     }
    return (
        <div>
              <button onClick={Clicked}>
              <NavLink exact activeClassName = "active_class" to="/Detail" >

            <div className="SuggestScroll">

                                <img src={item.Image1} alt=" " />
                                <h4>₹{item.Price}</h4> 
            </div>
            </NavLink>
</button>
        </div>
    )
}

export default Suggest
