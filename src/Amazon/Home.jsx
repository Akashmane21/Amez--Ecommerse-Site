
import { useEffect , useState } from "react";
// import Menu from './Component/Menu'
import Upper from './Component/Upper'
// import Header from "../header/Header";
import './../CSS/product_card.scss'
import Collection from "../Components/Collection/Collection";
import Deals from "../Components/Deals/Deals";
import firebase from '../Shopie_DB/Config'
import AmazonUI from "./Component/AmazonUI";


export default function Fav() {


    const [Productsdata, setProductsdata] = useState([])



  useEffect(() => {
    const Products = firebase.database().ref('Products');
    Products.on('value' , (snapshot)=>{
      const Products_List = []
      const todos =snapshot.val()
      for(let id in todos){
        Products_List.push({id, ...todos[id]})
      }
      const reversed = Products_List.reverse()
      console.table(reversed)
      setProductsdata(reversed)
    })


        

  
  }, [])

  return (
      
     <div className="home">

        <Upper />
     
        <Collection />
        <h2> Hot Deals 🔰</h2>

        <div className="products">
          {Productsdata ? Productsdata.map((Product , index)=> <Deals Product={Product} key={index}/>) : ""}
        </div>

        <AmazonUI />

        
     </div>
   )
}



