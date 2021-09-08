import "../App.scss";
import Header from "../header/Header";
// import Leftmenu from '../Components/Leftmenu/Leftmenu';
import { useEffect } from "react";
// import Cart from './Cart';
import { useState } from "react";
import firebase from "../Shopie_DB/Config.js";
// import Deals from "../Components/Deals/Deals";
import "./../CSS/product_card.scss";
import "../CSS/Category.scss";
import CategoryItem from "../Components/CategoryItem/CategoryItem";
import Slide from "react-reveal/Slide";

function Category() {
  const [Productsdata, setProductsdata] = useState([]);

  // eslint-disable-next-line
  const [Category, setCategory] = useState(" ");
  const [poster, setposter] = useState(" ");

  useEffect(() => {
    const name = localStorage.getItem("Category");
    setCategory(name);

    if (Category === "Electronics") {
      setposter(
        "https://hosfeltelectronics.com/wp-content/uploads/2021/05/consumer-electronics-1.jpg"
      );
    } else if (Category === "Mobiles") {
      setposter(
        "https://i.gadgets360cdn.com/large/Oneplus_nord_ce_5g_amazon_1623046758306.jpg"
      );
    } else if (Category === "Home") {
      setposter(
        "https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-taobao-e-commerce-appliances-promotion-poster-banner-image_155307.jpg"
      );
    } else if (Category === "Fashion") {
      setposter(
        "https://planetfashion.imgix.net/img/app/shopmedia/production/1/10-56-4186.jpg?w=992&auto=format"
      );
    } else if (Category === "Appliances") {
      setposter(
        "https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-99-household-appliances-big-promotion-carnival-blue-banner-image_166711.jpg"
      );
    } else if (Category === "Kids") {
      setposter(
        "https://cdn.fcglcdn.com/brainbees/images/cattemplate/desktop_cat_suave_cotten_affair_09042021_02.jpg"
      );
    } else if (Category === "Books") {
      setposter(
        "https://m.media-amazon.com/images/S/aplus-media/vc/e845f70b-2d78-4476-929e-78429a6ebbec.__CR0,0,970,300_PT0_SX970_V1___.jpg"
      );
    } else if (Category === "Shoes") {
      setposter(
        "https://columbia.scene7.com/is/image/ColumbiaSportswear2/08-01_28839_Facet_Brand_Sub_v2_Poster_XL?$aem_pjpeg$"
      );
    }

    firebase
      .database()
      .ref(`Products/`)
      .orderByChild("Categary")
      .equalTo(Category)
      .once("value", (snapshot) => {
        const Moviesdblist = [];
        const todos = snapshot.val();
        for (let id in todos) {
          Moviesdblist.push({ id, ...todos[id] });
        }
        const reversed = Moviesdblist.reverse();
        console.log(reversed);
        setProductsdata(reversed);
      });
  }, [Category]);

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
            <Slide top>
              <div className="ata">
                <img src={poster} alt=" " />
                {/* <h1>_________</h1> */}
                <div className="up">
                  <h1>{Category}</h1>
                </div>
              </div>
            </Slide>
            <div className="pro">
              <div className="products">
                {Productsdata
                  ? Productsdata.map((Product, index) => (
                      <CategoryItem Product={Product} key={index} />
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
