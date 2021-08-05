import '../App.scss';
import Header from '../header/Header';
import Leftmenu from '../Components/Leftmenu/Leftmenu';
import {useEffect} from 'react'
import Cart from './Cart';



function Cartpage() {


  useEffect(() => {

    

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
       <div className="right_area">
        <Cart />
       </div>
     </div>
      
      
    </div>
  );
}

export default Cartpage;
