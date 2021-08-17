import React from 'react'
import '../CSS/Choose.scss'
import { useHistory } from "react-router-dom";

function Choose() {
    let history = useHistory();

    function Customer(){
        history.push('/Auth') 
    }

    function Seller(){
        
        history.push('/SellerAuth') 

    }
    return (
        <div className="Choose">
            <h1>Who are You ?</h1>
<div className="boxes">


            <div className="Seller box"  onClick={Seller}>
                <img src="https://media.istockphoto.com/vectors/cartoon-farmer-vegetable-seller-vector-vector-id637982640" alt=" " />
                <h3>Seller</h3>
            </div>

            <div className="Customer box" onClick={Customer}>
                <img src="https://www.pinclipart.com/picdir/big/216-2167500_working-with-partners-customer-vector-png-clipart.png" alt=" " />
                <h3>Customer</h3>
            </div>

            </div>
        </div>
    )
}

export default Choose
