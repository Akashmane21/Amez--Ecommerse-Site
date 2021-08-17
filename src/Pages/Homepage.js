import '../App.scss';
import Home from './Home' 
import Header from '../header/Header';
import Leftmenu from '../Components/Leftmenu/Leftmenu';
import {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import Rotate from 'react-reveal/Rotate';
import Footer from '../Components/Footer/Footer';



function Homepage() {
  let history = useHistory();


  useEffect(() => {

    
    if(localStorage.getItem("authentication")==null){
     
      history.push('/Auth') 

     }

  else{
      console.log(localStorage.getItem("cartData"));
     }
// eslint-disable-next-line
  }, [])


  return (
    <div className="App">
    <div className="Menu">

     <Header />
     {/* <Navbar /> */}
    </div>

     <div className="block">
       <div className="left_area">
       <Rotate top left>

        <Leftmenu />
        </Rotate>
       </div>
       <div className="right_area">
           <Home />
       </div>
     </div>
      <Footer />
    </div>
  );
}

export default Homepage;
