import React , { useState , useEffect} from 'react'
import '../CSS/Cart.scss'
import '../CSS/Fav.scss'

import {useCounter} from '../Context/CartContext'
import Favlist from '../Components/Favlist/Favlist'


function Fav() {
    //  eslint-disable-next-line
    const { wishlist , setwishlist} = useCounter()
        //  eslint-disable-next-line

    const [isitems, setisitems] = useState(false)
useEffect(() => {
    if(wishlist){

    if(wishlist.length===0){
        console.log("No items");
        setisitems(true)
    }
}
       // eslint-disable-next-line
}, [wishlist])
  

    return (
        <div className="cart">
        <div className="title">

            <h1>WishList</h1>
          

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>

        {isitems ? (
            <div className="noitems">
            <h1>No Items Here !</h1>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> */}

            </div>
        ) : ( " " )}
<div className="Fav_items">

        {wishlist ? wishlist.map((item , key)=> <Favlist item={item} key={key} />) : ""}
</div>
        </div>
    )
}

export default Fav
