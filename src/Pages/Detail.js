import React  , { useState , useEffect} from 'react'
import Header from '../header/Header'
import {useCounter} from '../Context/CartContext'
import '../CSS/Detail.scss'
function Detail() {
    const {Desdata} = useCounter()
    const [Feature, setFeature] = useState([])
    const [Aboutdata, setAboutdata] = useState([])

    useEffect(() => {
        
       
        
             const Products_List = []
             const data =Desdata.Features
            for(let id in data){
                Products_List.push({id, ...data[id]})
            }
            setFeature(Products_List)

            
            const About_List = []
            const abouts =Desdata.About
           for(let id in abouts){
               About_List.push({id, ...abouts[id]})
           }
           setAboutdata(About_List)

// eslint-disable-next-line
    }, [])
    

   

    return (
        <div>
            <Header />

            <div className="Detail_box">
                <div className="images">
                <img src={Desdata.Image1} alt=" " />

                <img src={Desdata.Image1} alt=" " />
                <img src={Desdata.Image2} alt=" " />
                <img src={Desdata.Image3} alt=" " />

            </div>


            <div className="info">

                <h1>{Desdata.Name}</h1>


                <div className="rate">
                    <span className="star">
                    4.5
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    
                    </span>
                    {Desdata.Ratings} Ratings & reviews

                </div>


                <div className="info_price">
                <h2>₹{Desdata.Price}</h2>
                <h3>₹{Desdata.MRP}</h3>
                <h5>({Desdata.Discount} OFF)</h5>
           
                </div>


                <h4>Features : </h4>
                <ol>
                    {Feature?Feature.map((Featuedata , index) => 
                                <li>{Featuedata.Features}</li>
                                ) : (" ")}
                </ol>


                            <h4>About : </h4>
                <dl className="dl">
                {Aboutdata?Aboutdata.map((about , index) => 
                                <li>{about.About}</li>
                                ) : (" ")}

                </dl>  

              

          


            </div>
            </div>
        </div>
    )
}

export default Detail
