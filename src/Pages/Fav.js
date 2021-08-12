import React , { useState , useEffect} from 'react'
import '../CSS/Cart.scss'
import '../CSS/Fav.scss'
import firebase from '../Shopie_DB/Config'
import {useCounter} from '../Context/CartContext'
import Favlist from '../Components/Favlist/Favlist'


function Fav() {
    //  eslint-disable-next-line
    const { UserId} = useCounter()
      

    const [isitems, setisitems] = useState(false)
    const [favdata, setfavdata] = useState([])


useEffect(() => {


    const Products = firebase.database().ref(`Users/${UserId}/Wishlist`);
    Products.on('value' , (snapshot)=>{
      const Products_List = []
      const todos =snapshot.val()
      console.log(todos);
      for(let id in todos){

        const  ID = id
        Products_List.push({ ID , ...todos[id]})
      }
      const reversed = Products_List.reverse()
      setfavdata(reversed)
      
    if(reversed.length === 0){
        console.log("No items");
        setisitems(true)
    }


    })



    

// eslint-disable-next-line
}, [])
  

    return (
        <div className="cart">
        <div className="title">

            <h1>WishList__
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </h1>
          

        </div>

        {isitems ? (
            <div className="noitems">
            <h1>No Items Here !</h1>

            </div>
        ) : ( " " )}
<div className="Fav_items">

        {favdata ? favdata.map((item , key)=> <Favlist item={item} key={key} />) : ""}
</div>
        </div>
    )
}

export default Fav
