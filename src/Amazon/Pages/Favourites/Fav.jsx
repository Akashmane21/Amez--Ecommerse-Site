
import { Component } from "react";
import react  from 'react'
import axios from 'axios'
import Menu from '../../Component/Menu'
import Card from './Cards'




class Fav extends Component {
    constructor(props) {
       super(props);
       this.state = {
          data: []
       }
    }

 componentDidMount() {
     axios.post('http://localhost:8080/get/Favourites')
       .then(response => {
           console.log(response.data);
           if (response.status === 200 && response != null) {
             this.setState({
                  data: response.data
             });
      } else {
        console.log('problem');
      }
 })
 .catch(error => {
     console.log(error);
 });
}



render() {
  const { data } = this.state;
  return (
      
     <>
     <Menu />
     <br/>     <br/>
     <br/>
    
     {/* <Card /> */}
     
    
       {Array.isArray(data) && data.map(object => (
         
        <Card 
      img1 ={object.img1}
      sname = {object.sname}
      year = {object.year}
      imdb = {object.imdb}
      plot = {object.plot}
    />
        ))}
        
     </>
   )
}
}


export default Fav 