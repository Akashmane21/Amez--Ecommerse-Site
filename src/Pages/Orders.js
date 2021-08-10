import '../App.scss';
import Header from '../header/Header';
import Leftmenu from '../Components/Leftmenu/Leftmenu';
import React , { useState , useEffect} from 'react'
import firebase from '../Shopie_DB/Config'
import {useCounter} from '../Context/CartContext'
import '../CSS/Orders.scss'
import OrderedItem from '../Components/Orders/OrderedItem';



function Orders() {
  const {UserId} = useCounter()
  // eslint-disable-next-line
  const [isitems, setisitems] = useState(false)
  const [Orders, setOrders] = useState([])
  useEffect(() => {

    
    const Products = firebase.database().ref(`Users/${UserId}/Orders`);
    Products.on('value' , (snapshot)=>{
      const Products_List = []
      const todos =snapshot.val()
     
      for(let id in todos){
        Products_List.push({id, ...todos[id]})
      }
      
      const reversed = Products_List.reverse()
  
      
var AllOrdersdata = []
      for(var i=0 ; i<reversed.length ; i++ ){

       

        var Products = JSON.stringify(reversed[i].Product_info)
        console.log(Products);

    var AllData={
          Date_time:reversed[i].Date_time,
          Address : reversed[i].Address,
          Name:reversed[i].Name,
          Phoneno:reversed[i].Phoneno,
          Total:reversed[i].Total,
          Products:Products,
          Status:reversed[i].Status
        }
        AllOrdersdata.push(AllData)

      }
      console.log(AllOrdersdata);
      setOrders(AllOrdersdata)


      if(reversed.length===0){
        console.log("No items");
        setisitems(true)
    }


    })
// eslint-disable-next-line
  }, [])


  return (
    <div className="App">
    <div className="Menu">

     <Header />
    </div>

  
    <div className="block">
       <div className="left_area">
        <Leftmenu />
       </div>


       <div className="right_area  h11">
        <h6>Your Orders ___
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
        </h6>

<div className="Ordered_items">


        {Orders ?Orders.map((item , index) => 
        <OrderedItem item={item} key={index}  />
        
        ) : ( " ")}

        </div>
       </div>
     
      
      </div>
    </div>
  );
}

export default Orders;
