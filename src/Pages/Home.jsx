
import { useEffect , useState } from "react";
// import Menu from './Component/Menu'
import Upper from '../Components/Component/Upper'
// import Header from "../header/Header";
import './../CSS/product_card.scss'
import Collection from "../Components/Collection/Collection";
import Deals from "../Components/Deals/Deals";
// import firebase from '../Shopie_DB/Config'
import AmazonUI from "../Components/Component/AmazonUI";
import Data from "../Shopie_DB/Data";
// import Data from "../Shopie_DB/Data";


export default function Fav() {


    const [Productsdata, setProductsdata] = useState([])



  useEffect(() => {
    // const Products = firebase.database().ref('Products');
    // Products.on('value' , (snapshot)=>{
    //   const Products_List = []
    //   const todos =snapshot.val()
    //   console.log(todos);
    //   for(let id in todos){
    //     Products_List.push({id, ...todos[id]})
    //   }
    //   const reversed = Products_List.reverse()
    //   console.table(reversed)
    //   setProductsdata(reversed)
    // })


    const Products_List = []
      const todos =Data
      for(let id in todos){
        Products_List.push({id, ...todos[id]})
      }
      const reversed = Products_List.reverse()
      console.table(reversed)
      setProductsdata(reversed)
      
console.log(Data);
        

  
  }, [])

  return (
      
     <div className="home">

        <Upper />
     
        <Collection />
        <h1> Hot Deals 🔥</h1>

        <div className="products">
          {Productsdata ? Productsdata.map((Product , index)=> <Deals Product={Product} key={index}/>) : ""}
        </div>

        <AmazonUI />

        
     </div>
   )
}



