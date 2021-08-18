import React , {useEffect} from 'react'
import '../CSS/Choose.scss'
import { useHistory } from "react-router-dom";

function Choose() {
    let history = useHistory();

    useEffect(() => {

    
        if(localStorage.getItem("authentication")!=null){
         
          history.push('/Home') 
    
         }
    
      else{
    
      }
    // eslint-disable-next-line
      }, [])

    function Customer(){
        history.push('/Auth') 
    }

    function Seller(){
        
        history.push('/SellerAuth') 

    }
    return (
        <div className="Choose">
            <h1>Login as  . </h1>
<div className="boxes">


            <div className="Seller box"  onClick={Seller}>
                <img src="https://media.istockphoto.com/vectors/farmer-vegetable-seller-at-the-counter-organic-food-farm-street-with-vector-id945207338?b=1&k=6&m=945207338&s=612x612&w=0&h=csgzIDAgIi_rh5Spd5GrAt19Qv1l3S5bmVNiHsQZZ3E=" alt=" " />
                <h3>Seller</h3>
            </div>

            <div className="Customer box" onClick={Customer}>
                <img src="https://st2.depositphotos.com/7874342/12403/v/600/depositphotos_124035000-stock-illustration-happy-family-couple-with-shopping.jpg" alt=" " />
                <h3>Customer</h3>
            </div>

            </div>
        </div>
    )
}

export default Choose
