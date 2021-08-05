import React from 'react'
import Header from '../header/Header'
import {useCounter} from '../Context/CartContext'
import '../CSS/Detail.scss'
function Detail() {
    const {Desdata} = useCounter()

    return (
        <div>
            <Header />

            <div className="Detail_box">
                <div className="images">
                <img src={Desdata.Image1} alt=" " />
                <img src={Desdata.Image2} alt=" " />
                <img src={Desdata.Image3} alt=" " />

                </div>
            <div className="info">

            <h1>{Desdata.Name}</h1>
            <h1>{Desdata.Price}</h1>
            <h1>{Desdata.MRP}</h1>
            <h1>{Desdata.Discount}</h1>
            <h1>{Desdata.Categary}</h1>
            <h1>{Desdata.Ratings}</h1>


            </div>
            </div>
        </div>
    )
}

export default Detail
