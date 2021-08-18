import React , {useState} from 'react'
import '../CSS/Dashboard.scss'
import {useCounter} from '../Context/CartContext'
import { useHistory } from "react-router-dom";

import firebase from '../Shopie_DB/Config'
export default function Dashboard() {
    let history = useHistory();

    const [dataID, setdataID] = useState(" ")
    const {UserName } = useCounter()

    const [isSumit, setisSumit] = useState(false)

    function insert(){
        console.log("clicked");
        var Name = document.getElementById('Title').value
        
        var  Ratings =        document.getElementById('Ratings').value
        var MRP  =         document.getElementById('mrp').value
         var   Price=        document.getElementById('Price').value
    
        var  Image1 =         document.getElementById('Image1').value
        var  Image2 =         document.getElementById('Image2').value
        var  Image3 =         document.getElementById('Image3').value
        var Categary = document.getElementById("mySelect").value
        var Discount = document.getElementById("Discount").value
    
        const movie = { 
            Name : Name , 
            Ratings : Ratings , 
            MRP : MRP , 
            Price : Price , 
            Image1 : Image1 , 
            Image2 : Image2 , 
            Image3 : Image3 ,
            Features:"",
            Categary : Categary , 
            Discount:Discount
    
       
    
        }
     
    
    var mov = firebase.database().ref(`Products/`);
    
    mov.push(movie).then(res => {
        console.log("clicked");

    console.log("address key = " + res.key) ;
    alert(`Movie  ${Name} Added in the Movie DB :`);
setdataID(res.key)    
setisSumit(true)
    
    
       })
    
    }




    
function AddFeature(){

    var Feature = document.getElementById('Features').value
    
        const Featuresdata = { 
            Features:Feature,
        }
    
        

        firebase.database().ref(`Products/${dataID}/Features/`).push(Featuresdata).then(res => {
        document.getElementById('Features').value=" ";
    
    })
    
    
    
    }
    function AddAbout(){
        var Abouts = document.getElementById('About').value
    
    const Aboutdata = { 
        About:Abouts,
    }
    
    firebase.database().ref(`Products/${dataID}/About/`).push(Aboutdata).then(res => {
    document.getElementById('About').value=" ";
    
    })
    
    }
    
    

    function Logout(){
        localStorage.removeItem("authentication")
        localStorage.removeItem('Userid');
        localStorage.removeItem('UserName');
        history.push('/Choose') 
     
    }


    return (
        <div className="dash">
        {/* <Header /> */}
        <div className="logot">
            <h1>Shoppie          <svg className="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
           </h1>
        <button onClick={Logout}>Logout_<i class="fa fa-sign-out" aria-hidden="true"></i></button>
        </div>
        <h1>Hello {UserName} 👋</h1>

<div class="main">

<div class="gg">


<select name="mySelect" id="mySelect">
<option value="All" className="item">All</option>
<option value="Home" className="item">Home</option>
<option value="Fashion" className="item">Fashion</option>
<option value="Electronics" className="item">Electronics</option>
<option value="Mobiles" className="item">Mobiles</option>
<option value="Dresses" className="item">Dresses</option>
<option value="Shoes" className="item">Shoes</option>
<option value="Watches" className="item">Watches</option>
<option value="Appliances" className="item">Appliances</option>
<option value="Kids" className="item">Kids</option>
<option value="Books" className="item">Books</option>

</select>


  
     
  </div>

<br />
<div class="sec">

    Title :
    <input type="text" id="Title" />
</div>

<div class="sec">
    Ratings :
   <input type="text" id="Ratings" />
</div>


<div class="sec">
    M.R.P. :
    <input type="text" id="mrp" />
</div>

<div class="sec">    
Price :
<input type="text" id="Price" />

</div>


<div class="sec">    
    Discount :
    <input type="text" id="Discount" />
    
    </div>
    <div class="sec">

Brand :
<input type="text" id="Brand" />
</div>



<div class="sec"> 
    Image1 :
    <input type="text" id="Image1" />
    Image2 :
    <input type="text" id="Image2" />
    Image3 :
    <input type="text" id="Image3" />
</div>



<hr />
<br />



  



</div>

<button onClick={insert}>Submit</button>
<br />

 {isSumit ? ( 
     <>
     <div class="sec">    

ID : {dataID}
    </div>
    <div class="sec">    
  
  Features :
  <input type="text" id="Features" />
  <button onClick={AddFeature}>Add Feature</button>
</div>



<div class="sec">    

  About :
  <input type="text" id="About" />
  <button onClick={AddAbout}>Add About</button>
</div>
</>
 ) : ( 
" "
 )}



</div>
        
    )
}
