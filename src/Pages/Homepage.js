import '../App.scss';
import Home from './Home' 
import Header from '../header/Header';
import Leftmenu from '../Components/Leftmenu/Leftmenu';
import {useEffect} from 'react'



function Homepage() {


  useEffect(() => {

    
    if(localStorage.getItem("cartData")==null){
      localStorage.setItem('cartData',"[]");
      window.location.reload(false);
     }

  else{
      console.log(localStorage.getItem("cartData"));
     }

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
           <Home />
       </div>
     </div>
      
      
    </div>
  );
}

export default Homepage;
