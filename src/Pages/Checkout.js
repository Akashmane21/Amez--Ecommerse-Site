import '../CSS/Checkout.scss'
import Header from '../header/Header';
import {useEffect} from 'react'
import {NavLink} from 'react-router-dom'



function Checkout() {


  useEffect(() => {
    document.documentElement.scrollTop = 0; 

    

  }, [])


  return (
    <div className="App">
    <div className="Menu">

     <Header />
    </div>

     <div className="Packblock">
       <div className="Packleft_area">

              <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_h439ffuh.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>

            
  
      </div>


       <div className="Packright_area">
              <div className="Pack_lotie">
                <h1>Place Your Order 
                </h1>  
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>

            <h2>Name :</h2>
            <input placeholder="Ener your Name here" required />

            <h2>Phone Number :</h2>
            <input placeholder="Enter Phonr Number" required/>

            <h2>Address :</h2>
            <textarea rows={4} placeholder="Enter your Address here with pin-code" />
            <br />
            <NavLink exact activeClassName = "active_class" to="/">

            <button className="cancel">Cancel 
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="orangered" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            </NavLink>
            <button className="place">Place Order
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9l6 6-6 6"/><path d="M4 4v7a4 4 0 0 0 4 4h11"/></svg>
            </button>
            </div>
     </div>
      
      
    </div>
  );
}

export default Checkout;
