import '../CSS/Checkout.scss'
import Header from '../header/Header';
import {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {useCounter} from '../Context/CartContext'
import  {useState } from 'react'
import firebase from '../Shopie_DB/Config'
import { useHistory } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


function Checkout() {
  let history = useHistory();

  const { UserId } = useCounter()
  const [name, setname] = useState(" ")
  const [Phone, setPhone] = useState(" ")
  const [Address, setAddress] = useState(" ")
  const [AllTotal, setAllTotal] = useState(" ")
  const [Allitems, setAllitems] = useState([])



  useEffect(() => {
    document.documentElement.scrollTop = 0; 
    
  var Allt =JSON.parse(localStorage.getItem("Cart"));
  var totalP =localStorage.getItem("Total");
  console.log(Allt);
  console.log(totalP);
  setAllitems(Allt)
  setAllTotal(totalP)


  }, [])

  function Submit(){

    var date_time = new  Date().toLocaleString();
    const Order={
      Name : name,
      Phoneno : Phone,
      Address : Address ,
      Total : AllTotal , 
      Date_time : date_time,    
     Status : "Ordered",
      Product_info : Allitems


    }
    const Ordered_Product = firebase.database().ref(`Users/${UserId}/Orders`);
    Ordered_Product.push(Order).then(res => {
      console.log("address key = " + res.key) ;
      // alert(`Movie  Added in the Movie DB :`);
      history.push('/Placed') 

      })
     

    console.log(Order);
  }


  return (
    <div className="App">

    <div className="Menu">

     <Header />
    </div>
  
     <div className="Packblock">
  
       <div className="Packleft_area">
       <Fade left>

              <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_99VKMQ.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
  </Fade>
            
  
      </div>


       <div className="Packright_area">
              <div className="Pack_lotie">
                <h1>Place Your Order 
                </h1>  
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>


            <div className="data">
            <div>
            <h2>Name :</h2>
              <input placeholder="Ener your Name here" required onChange={event => setname(event.target.value)} />

            </div>

            <div>
            <h2>Phone Number :</h2>
              <input placeholder="Enter Phonr Number" required onChange={event => setPhone(event.target.value)} />

            </div>

            </div>
            
           
            <h2>Address :</h2>
            <textarea rows={3} placeholder="Enter your Address here with pin-code" onChange={event => setAddress(event.target.value)} />
            <br />

           
            <div className="product">

{Allitems ? Allitems.map((item , index)=> 
  <Slide right>

  <div className="Allinfo">
      <img src={item.Image} alt="" />
      
              <div className="item_info">

                            <h4>{item.Name}</h4>
                            <h2>Item's : {item.Items}</h2>
                            <h6> {item.Total}</h6>
              </div>
  </div>
</Slide>

) : ( "")}
</div>

           

<h3>You have to Pay : {AllTotal}</h3>
<br />



            <NavLink exact activeClassName = "active_class" to="/">

            <button className="cancel">Cancel 
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            </NavLink>
            <button className="place" onClick={Submit}>Place Order
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9l6 6-6 6"/><path d="M4 4v7a4 4 0 0 0 4 4h11"/></svg>
            </button>
            </div>
     </div>
     
 

    </div>
  );
}

export default Checkout;
