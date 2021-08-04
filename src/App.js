import './App.scss';
import Home from './Amazon/Home' 
import Header from './header/Header';
import Leftmenu from './Components/Leftmenu/Leftmenu';
import firebase from './Shopie_DB/Config'
import CartContextProider from './Context/CartContext';
import {useEffect} from 'react'



function App() {


  useEffect(() => {

    
    if(localStorage.getItem("cartData")==null){
      localStorage.setItem('cartData',"[]");
      window.location.reload(false);
     }

  else{
      console.log(localStorage.getItem("cartData"));
     }

  }, [])


console.log(firebase);
  return (
    <CartContextProider>
    <div className="App">
    <div className="Menu">

     <Header />
    </div>

     <div className="block">
       <div className="left_area">
        <Leftmenu />
       </div>
       <div className="right_area">
           <Home />
       </div>
     </div>
      
      
    </div>
    </CartContextProider>
  );
}

export default App;
