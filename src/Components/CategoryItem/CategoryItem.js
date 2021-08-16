import React ,{useState} from 'react'
import './CategoryItem.scss'
import firebase from '../../Shopie_DB/Config'
import {useCounter} from '../../Context/CartContext'
import {NavLink} from 'react-router-dom'
import LightSpeed from 'react-reveal/LightSpeed';

function CategoryItem({Product}) {
    const [status, setstatus] = useState("Add to Cart")
    const { UserId , setDesdata} = useCounter()

    function buy(){
  
        var Sorted=[]
            var dataa={
                Name:Product.Name,
                Image:Product.Image1,
                Total:Product.Price,
                Items:1
            }
         Sorted.push(dataa);
        var All_Total = Product.Price
        var SortedCart = JSON.stringify(Sorted);
        localStorage.setItem("Cart",SortedCart);
        localStorage.setItem("Total",All_Total);
    }
    function addCart(){
        var to = `${Product.Price}`.replace(/,/g,'')
            var toa = to.replace("₹",'');
            var totalprice = parseInt(toa)

        const itemdata ={
            noofitems : 1,
            Total: totalprice
          }
    
          const all={...itemdata , ...Product}
         
        
        const cart_item = firebase.database().ref(`Users/${UserId}/Cart`);
        cart_item.push(all).then(res => {
          setstatus("Added")    
          })

      
       
    }

    function Save(){
        setDesdata(Product)
      
       
      }


    return (
        <LightSpeed left>


        <div className="category_block">
        <div className="img">
        <NavLink exact activeClassName = "active_class" to="/Detail" onClick={Save}>

            <img src={Product.Image1} alt=" " />
            </NavLink>
        </div>
            <div className="Cat_info">
            <NavLink exact activeClassName = "active_class" to="/Detail" onClick={Save}>

            <h1>{Product.Name}</h1>
            </NavLink>
            <h2>{Product.Price}</h2>
            <h3>{Product.MRP}</h3> 
            <h6>({Product.Discount}) *off</h6>
            {/* <div className="btnflex"> */}
                <button onClick={addCart}>{status}</button>
                <NavLink exact activeClassName = "active_class" to="/Checkout" >

                <button onClick={buy}>Buy Now</button>
                </NavLink>

            {/* </div> */}
            </div>
        </div>
        </LightSpeed>
       
    )
}

export default CategoryItem
