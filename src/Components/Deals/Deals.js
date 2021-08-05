import React , { useState } from 'react'
import './Deals.scss'

import {useCounter} from '../../Context/CartContext'

function Deals({Product}) {
    // eslint-disable-next-line
    const {setCartdata ,Cartdata} = useCounter()
    const [BG, setBG] = useState(false)

    const [status, setstatus] = useState(false)
  
    //    const data =   JSON.parse(localStorage.getItem("cartData"));
       // eslint-disable-next-line
    //    const [Cartdata, setCartdata] = useState(data)


   const item = {
        id : `${Product.id}`,
        Name : `${Product.Name}`,
        Categary : `${Product.Categary}`,
        Discount : `${Product.Discount}`,
        Image1 : `${Product.Image1}`,
        Image2 : `${Product.Image2}`,
        Image3 : `${Product.Image3}`,
        MRP : `${Product.MRP}`,
        Price : `${Product.Price}`,
        Trend : `${Product.Trend}`,
        Ratings : `${Product.Ratings}`
   }

    function Add(){
       
        Cartdata.push(item)
        var string = JSON.stringify(Cartdata);
        localStorage.setItem('cartData',string);
        setstatus(true)
       
    }


    return (
        <div className="Deals">
           <img src={Product.Image1} alt="" />
           <h2>{Product.Name}</h2>
           
           <div className="Price">
        <span>Price :</span>   ₹{Product.Price}
           </div>

           <div className="MRP">
        <span>M.R.P :</span> <span className="mrp"> ₹{Product.MRP}</span>  ({Product.Discount})
            </div>

            <div className="Categary">
            <span>Categary :</span>  {Product.Categary}

            </div>
           

                <div className="cart_btn">

                <div className="Like">
                <button onClick={()=> setBG(!BG)}>

               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={BG ? "red" : "none"} stroke={BG ? "red" : "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
               </div>
              
              <button onClick={Add}>
              {status? (
            <>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Added
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg> */}
              </>
              ) : (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

                Add to Cart
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg> */}
              </>


              )}
                </button>

                </div>




        </div>
    )
}

export default Deals
