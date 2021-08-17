import React from 'react'
import './Footer.scss'
function Footer() {
    function up(){
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="Footer">

              <i onClick={up} class="fa fa-angle-up" aria-hidden="true"></i>


        
            <div className="Icons">
             <a href="https://www.linkedin.com/in/akashmane21/" > <i class="fa fa-linkedin-square" aria-hidden="true"></i></a>  
             <a href="https://www.linkedin.com/in/akashmane21/" >   <i class="fa fa-instagram" aria-hidden="true"></i></a> 
             <a href="https://www.linkedin.com/in/akashmane21/" >  <i class="fa fa-facebook-square" aria-hidden="true"></i></a> 
            </div>
      



            <h1>Made with 💖 by Akash Mane</h1>
        </div>
    )
}

export default Footer

