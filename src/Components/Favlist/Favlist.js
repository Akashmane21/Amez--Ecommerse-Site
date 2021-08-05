import React   from 'react'
import '../Deals/Deals.scss'
import '../Cartitems/cartitems.scss'
import './Favlist.scss'
import {useCounter} from '../../Context/CartContext'
import {NavLink} from 'react-router-dom'


function Favlist({item}) {
    // eslint-disable-next-line
    const {setCartdata ,Cartdata , wishlist , setwishlist ,   Desdata, setDesdata} = useCounter()
        // eslint-disable-next-line

   
    
        function addtoCart(){
           
            Cartdata.push(item)
            var string = JSON.stringify(Cartdata);
            localStorage.setItem('cartData',string);
          
           
        }
    

    function del(){
        const idToRemove = `${item.id}`
        const filteredPeople = wishlist.filter((item) => item.id !== idToRemove);
        console.log(filteredPeople);
        var string = JSON.stringify(filteredPeople);
        localStorage.setItem('Wishlist',string);
        window.location.reload()


    }

    
    function Save(){
        setDesdata(item)
      
       
      }


    return (
<>

<div className="Wishbox">
<NavLink exact activeClassName = "active_class" to="/Detail" onClick={Save}>

  <img src={item.Image1} alt="" />
  </NavLink>
  <div className="wishbtns">
      <button className="green" onClick={addtoCart}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>

          Cart
      </button>
      <button className="red" onClick={del}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>

          Remove
      </button>
  </div>

</div>

</>

    )
}

export default Favlist
