import React from 'react'
import '../CSS/Cart.scss'
import {useCounter} from '../Context/CartContext'
import Cartitems from '../Components/Cartitems/Cartitems'
function Cart() {
    //  eslint-disable-next-line
    const {setCartdata ,Cartdata} = useCounter()


    return (
        <div className="cart">
        <div className="title">

            <h1>Shopping Cart</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
        </div>
<div className="cart_iems">

        {Cartdata ? Cartdata.map((item , key)=> <Cartitems item={item} key={key} />) : ""}
</div>
        </div>
    )
}

export default Cart
