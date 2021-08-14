import React  from 'react'
import './OrderedItem.scss'
import '../../CSS/Checkout.scss'
import Flip from 'react-reveal/Flip';

function OrderedItem({item}) {


    var products_data = JSON.parse(item.Products)
    console.log(products_data);

    return (
        <Flip bottom>

        <div className="mainarea">
                    <h1>Ordered on : {item.Date_time}</h1>

            <div className="Ordered_item">

<div className="ordered_products">



            {products_data ? products_data.map((items , index) => 
                <div className="Allproducts">
                    <img src={items.Image} alt="" />
            
                    <div className="products_info">

                                  <h4>{items.Name}</h4>
                                  <h2>Item's : {items.Items}</h2>
                                  <h3> {items.Total}</h3>
                    </div>
        </div>
            ): ( " ")}
            </div>

            <h2>Total : {item.Total}</h2>
            <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>            Status : {item.Status}</h3>
            </div>
        </div>
        </Flip>
    )
}

export default OrderedItem
