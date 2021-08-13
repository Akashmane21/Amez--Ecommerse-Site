import React , { useState } from 'react'
import './Deals.scss'
import {NavLink} from 'react-router-dom'
import firebase from '../../Shopie_DB/Config'
import {useCounter} from '../../Context/CartContext'

function Deals({Product}) {
    // eslint-disable-next-line
    const {UserId, setCartdata ,Cartdata , wishlist , setwishlist ,   Desdata, setDesdata} = useCounter()
    const [BG, setBG] = useState(false)

    const [status, setstatus] = useState(false)




    function Add(){


      
      var to = `${Product.Price}`.replace(/,/g,'')
      var toa = to.replace("₹",'');
      var totalprice = parseInt(toa)


      const itemdata ={
        noofitems : 1,
        Total:totalprice
      }

      const all={...itemdata , ...Product}
     

        const cart_item = firebase.database().ref(`Users/${UserId}/Cart`);
        cart_item.push(all).then(res => {
          alert(`Product is Added to your Cart`);
          setstatus(true)
          // history.push('/Placed') 
    
          })
         
       
    }

    function Fav(){

                    
      const fav_item = firebase.database().ref(`Users/${UserId}/Wishlist`);
      fav_item.push(Product).then(res => {
      alert(`Product is Added to your Wishlist `);
      setBG(true)

     
    })
  
  }
    


      function Save(){
        setDesdata(Product)
      
       
      }

    return (
    
        <div className="Deals">
        <NavLink exact activeClassName = "active_class" to="/Detail" onClick={Save}>

           <img src={Product.Image1} alt="" />
         

          
           </NavLink>
           <div className="pp">
           <h2>{Product.Name}</h2>
           <div className="Price">
        <span>Price :</span>   {Product.Price}
           </div>

           <div className="MRP">
        <span>M.R.P :</span> <span className="mrp"> {Product.MRP}</span> 
        <br />
        ({Product.Discount}) *off
            </div>

            
                <div className="cart_btn">

                <div className="Like">
                <button onClick={Fav}>

               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={BG ? "red" : "none"} stroke={BG ? "red" : "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
               </div>
              
              <button onClick={Add}>
              {status? (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Added
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
              </>
              ) : (
                <>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

                Add to Cart
              </>


              )}
                </button>

                </div>

                </div>


        </div>
    )
}

export default Deals
