import React from 'react';

import './Favcss.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios';

import {  IconButton} from '@material-ui/core'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';


function Favcard(props){


    
    window.addEventListener("scroll" , function(){
        let header = document.querySelector("header");
        header.classList.toggle("sticky" , window.scrollY)
    })


   
    function Delete(){
        console.log(`${props.sname} `);


        let req = {
            name  : `${props.sname}`
         
        }
    
    
    
        axios.post('http://localhost:8080/del/fav',req)
        .then(resp => {
            alert(resp.data.message)
            console.log(resp.data.message);
    
        })
    
     window.location.reload()
        
        .catch(err => {
            console.log(err);
        }
        )
    }
    
return (
    <>
<div className="movie" id ="bgm">

        <NavLink to={`/series/${props.sname}`}> <img src={props.img1} alt="Show" className="card_img" id="img1" /></NavLink>
        <div className="delete">
        <button id="del" onClick={Delete}><IconButton >
            <ClearRoundedIcon  /></IconButton></button></div>
            <h2> {props.sname}</h2>
            <div className="plot">{props.plot}</div>
            

            <div className="show_info">
                  
                    <span className="date">{props.year}</span>
                    <span className="imdb">
                    <img src="imgs/imdbstar.png"></img>
                    {props.imdb}/10
                    </span>
           
            </div>     
</div>
    </>
)
   
}

export default Favcard;





