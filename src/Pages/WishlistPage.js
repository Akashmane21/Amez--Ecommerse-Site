import '../App.scss';
import Header from '../header/Header';
import Leftmenu from '../Components/Leftmenu/Leftmenu';
import {useEffect} from 'react'
import Fav from './Fav';



function WishlistPage() {


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
    <Fav/>
       </div>
     </div>
      
      
    </div>
  );
}

export default WishlistPage;
