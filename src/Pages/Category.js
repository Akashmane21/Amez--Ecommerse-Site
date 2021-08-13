import '../App.scss';
import Header from '../header/Header';
// import Leftmenu from '../Components/Leftmenu/Leftmenu';
import {useEffect} from 'react'
// import Cart from './Cart';
import { useState  } from "react";
import firebase from '../Shopie_DB/Config.js'
// import Deals from "../Components/Deals/Deals";
import './../CSS/product_card.scss'
import '../CSS/Category.scss'
import CategoryItem from '../Components/CategoryItem/CategoryItem';

function Category() {
  const [Productsdata, setProductsdata] = useState([])


  // eslint-disable-next-line
  const [Category, setCategory] = useState(" ")
  const [poster, setposter] = useState(" ")


  useEffect(() => {
    const name =  localStorage.getItem("Category");
    setCategory(name)

          if(Category === "Electronics"){
            setposter("https://hosfeltelectronics.com/wp-content/uploads/2021/05/consumer-electronics-1.jpg")
          }
          else if(Category === "Mobiles"){
            setposter("https://i01.appmifile.com/webfile/globalimg/0320/TO-B/New-Product-Banner/Mi-11i-banner-en-PC.jpg")
          }
          else if(Category === "Home"){
            setposter("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-taobao-e-commerce-appliances-promotion-poster-banner-image_155307.jpg")


          }
          else if(Category === "Fashion"){
            setposter("https://iswadeshi.com/wp-content/uploads/2021/05/MAN-FASHION.jpg")

          }
          else if(Category === "Appliances"){
            setposter("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-99-household-appliances-big-promotion-carnival-blue-banner-image_166711.jpg")


          }
          else if(Category === "Kids"){
            setposter("https://assetscdn1.paytm.com/images/catalog/view_item/496385/1578050692471.jpg?imwidth=1600&impolicy=hq")


          }
          else if(Category === "Books"){
            setposter("https://www.universityproducts.com/pub/media/amasty/amoptmobile/wysiwyg/library-prods_png.webp")


          }
          else if(Category === "Shoes"){
            setposter("https://www.marketing91.com/wp-content/uploads/2020/06/Nike-advertising.jpg")


}


    firebase.database().ref(`Products/`).orderByChild("Categary").equalTo(Category).once("value", snapshot => {
      const Moviesdblist = []
      const todos =snapshot.val()
      for(let id in todos){ Moviesdblist.push({id, ...todos[id]}) }
      const reversed = Moviesdblist.reverse();
      console.log(reversed)
      setProductsdata(reversed)

    })
    
 
  }, [Category])


  return (
    <div className="App">
    <div className="Menu">

     <Header />
    </div>

     <div className="blolck">
       {/* <div className="left_area">
        <Leftmenu />
       </div> */}
       <div className="rightarea">
       <div className="Cate">

    <div className="ata">
        <img src={poster} alt=" " />
        {/* <h1>_________</h1> */}
        <div className="up">

        <h1>{Category}</h1>
        </div>

    </div>
        <div className="pro">

        <div className="products">
          {Productsdata ? Productsdata.map((Product , index)=> <CategoryItem Product={Product} key={index}/>) : ""}
        </div>
        </div>

        </div>
       </div>
     </div>
      
      
    </div>
  );
}

export default Category;
