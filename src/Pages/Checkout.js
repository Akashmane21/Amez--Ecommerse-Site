import '../App.scss';
import Header from '../header/Header';
import Leftmenu from '../Components/Leftmenu/Leftmenu';
import {useEffect} from 'react'
import Cart from './Cart';



function Checkout() {


  useEffect(() => {

    

  }, [])


  return (
    <div className="App">
    <div className="Menu">

     <Header />
    </div>

<h1>Checkout Page</h1>  
     {/* <div className="block">
       <div className="left_area">
        <Leftmenu />
       </div>
       <div className="right_area">
        
       </div>
     </div>
       */}
      
    </div>
  );
}

export default Checkout;
