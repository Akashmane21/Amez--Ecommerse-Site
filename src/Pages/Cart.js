import React , { useState , useEffect} from 'react'
import '../CSS/Cart.scss'
import {useCounter} from '../Context/CartContext'
import Cartitems from '../Components/Cartitems/Cartitems'
function Cart() {
    //  eslint-disable-next-line
    const {setCartdata ,Cartdata} = useCounter()
        //  eslint-disable-next-line

    const [isitems, setisitems] = useState(false)
useEffect(() => {
    if(Cartdata){

    if(Cartdata.length===0){
        console.log("No items");
        setisitems(true)
    }
}
     // eslint-disable-next-line
}, [Cartdata]) 
  // eslint-disable-next-line

    return (
        <div className="cart">
        <div className="title">

            <h1>Shopping Cart</h1>
          

            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
        </div>

        {isitems ? (
            <div className="noitems">
            <h1>No Items Here !</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>


            </div>
        ) : ( " " )}
<div className="cart_iems">

        {Cartdata ? Cartdata.map((item , key)=> <Cartitems item={item} key={key} />) : ""}
</div>
        </div>
    )
}

export default Cart
