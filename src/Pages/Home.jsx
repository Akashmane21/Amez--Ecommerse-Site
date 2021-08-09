
import { useEffect , useState } from "react";
import Upper from '../Components/Component/Upper'
import './../CSS/product_card.scss'
import Collection from "../Components/Collection/Collection";
import Deals from "../Components/Deals/Deals";
import firebase from '../Shopie_DB/Config'
import AmazonUI from "../Components/Component/AmazonUI";


export default function Fav() {


    const [Productsdata, setProductsdata] = useState([])



  useEffect(() => {
    const Products = firebase.database().ref('Products');
    Products.on('value' , (snapshot)=>{
      const Products_List = []
      const todos =snapshot.val()
      console.log(todos);
      for(let id in todos){
        const  ID = id
        Products_List.push({ID ,  ...todos[id]})
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
        <h1> Today's Deals 🔥</h1>

        <div className="products">
          {Productsdata ? Productsdata.map((Product , index)=> <Deals Product={Product} key={index}/>) : ""}
        </div>

        <AmazonUI />

        
     </div>
   )
}



