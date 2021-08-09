import React   from 'react'
import '../Deals/Deals.scss'
import './cartitems.scss'
import {useCounter} from '../../Context/CartContext'
import {NavLink} from 'react-router-dom'
import firebase from '../../Shopie_DB/Config'

function Cartitems({item}) {

    // eslint-disable-next-line
    const {  UserId, setDesdata} = useCounter()
        // eslint-disable-next-line


    var pr = `${item.Price}`.replace(/,/g,'')
    var pri = pr.replace("₹",'');
    var actualprice = parseInt(pri)

    var to = `${item.Total}`.replace(/,/g,'')
    var toa = to.replace("₹",'');
    var totalprice = parseInt(toa)




    function Dec(){
       
        const alll = item.noofitems - 1

        const totalp = totalprice  - actualprice 
        const itemPrice = firebase.database().ref(`Users/${UserId}/Cart`).child(item.id);
        itemPrice.update({
            noofitems:alll,
            Total:totalp
        })



    }
    function Inc(){
    
        const alll = item.noofitems + 1

        const totalp = actualprice + totalprice

        const itemPrice = firebase.database().ref(`Users/${UserId}/Cart`).child(item.id);
        itemPrice.update({
            noofitems:alll,
            Total : totalp
        })

    }

    function del(){
        const itemtodel = firebase.database().ref(`Users/${UserId}/Cart`).child(item.id);
        itemtodel.remove()
    }

    
    function Save(){
        setDesdata(item)
      
       
      }


    return (
        <div className="items">
                <NavLink exact activeClassName = "active_class" to="/Detail" onClick={Save}>

           <img src={item.Image1} alt="" />
           </NavLink>
           <div>
           <NavLink exact activeClassName = "active_class" to="/Detail" onClick={Save}>

           <h2>{item.Name}</h2>
            </NavLink>

           <div className="rate">
                <div className="Price">
              <span>Price :</span>   {item.Price}
              </div>
           
           <div className="MRP">
                 <span>M.R.P :</span> <span className="mrp"> {item.MRP}</span>  ({item.Discount})
            </div>
           </div>
           
           </div>


           
           <div>
          
            <div className="Categary Flex">
          {item.Categary}
          <button onClick={del}>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>

            </div>

            <div className="incbtn">
                <button onClick={Dec}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <h3>{item.noofitems}</h3>
                <button onClick={Inc}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>

            </div>


            <div className="Price total">
               <span>Total :</span> ₹{item.Total}
           </div>


           </div>
           
                




        </div>
    )
}

export default Cartitems
