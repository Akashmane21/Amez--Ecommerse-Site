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
                {/* <img src={Desdata.Image1} alt=" " />

                <img src={Desdata.Image1} alt=" " />
                <img src={Desdata.Image2} alt=" " />
                <img src={Desdata.Image3} alt=" " /> */}





                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner   imgs">
                                <div class="carousel-item active imgs" data-interval="10000">
                                <img src={Desdata.Image1} class="d-block w-100 h-100" alt="..." />
                                </div>
                                <div class="carousel-item imgs" data-interval="2000">
                                <img src={Desdata.Image2} class="d-block w-100 h-100" alt="..." />

                                </div>
                                <div class="carousel-item imgs" data-interval="2000">
                                <img src={Desdata.Image3} class="d-block w-100 h-100" alt="..." />

                                </div>
              
                          </div>


                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-gray" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>


                </div>







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

              

          <div className="shop_btns">
              <button className="buy_btn">Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg></button>
              <button className="cart_btn">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg></button>

          </div>


            </div>
            </div>
        </div>
    )
}

export default Detail
