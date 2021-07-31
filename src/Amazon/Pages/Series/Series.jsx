import react, { useState } from 'react';
import Menu from '../../Component/Menu';
import axios from 'axios';

import {useParams} from 'react-router-dom'
import Data from '../../Show_coll'
import './style1.css'
import { Prompt } from 'react-router-dom/cjs/react-router-dom.min';


function Series(){

    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
    const { name } =useParams();


    const [sname , newsname] = useState("NA")
    const [plot , newplot] = useState("NA")
    const [genre , newgenre] = useState("NA")
    const [year , newyear] = useState("NA")
    const [seasons , newseasons] = useState("NA")
    const [episodes , newepisodes] = useState("NA")
    const [imdb , newimdb] = useState("NA")
    const [img1 , newimg1] = useState("NA")



    function save(){
  
        let request = {
            sname:`${sname}`,
            img1 : `${img1}`,
            img2 : "",
            img3 : "",
            link: " ",
            plot: `${plot}`,
            imdb: parseFloat(`${imdb}`),
            seasons  : parseFloat(`${seasons}`),
            episodes  :parseFloat(`${episodes}`),
            year:`${year}`,
            genre :`${genre}`,
            
            
        }
    
    
    
        axios.post('http://localhost:8080/favourites',request)
        .then(resp => {
            alert(resp.data.message)
    
        })
    
        .catch(err => {
            console.log(err);
        }
        )
    }


    function get(){
        const request = {
            sname : name
        }
        axios.post('http://localhost:8080/get/Series' , request)
        .then(response => {
          console.log(response.data)
        newimg1(response.data[0].img1)
        newsname(response.data[0].sname)
        newplot(response.data[0].plot)
        newimdb(response.data[0].imdb)
        newseasons(response.data[0].seasons)
        newepisodes(response.data[0].episodes)
        newyear(response.data[0].year)


        
        
        })
         .catch(err => {
            console.log(err);
        }
        )

    }
    get()
     
return (
    <>
    <Menu />
    <br />
    <br />
    <br />


    <h>--- :  {sname}  :---</h>
    <div class="mcontainer" >
    <h3>Plot :</h3><p>  {plot}</p>
    <div class="content" >
        <h4>Genre </h4>           <c>:  </c>   <p1>  {genre}</p1>
        <h4>Release Date  </h4>   <c>:  </c>   <p1>  {year}</p1>
        <h4>No. of Seasons</h4>   <c>:  </c>     <p1>  {seasons}</p1>
        <h4>No. of Episodes</h4>   <c>:  </c>     <p1>  {episodes}</p1>
        <h4>IMDB Rating</h4>   <c>:  </c>     <p1>  {imdb}</p1> 
        <img id="star" src={Data[0].star} alt="" />

        </div>
    <button class="btn">Watch Now</button>
    <button onClick={save} class="btn">Save to Watch Later</button>
    </div>
   
    
     <img src={img1} alt="" id="img2" />
    </>
)
   
}




export default Series;