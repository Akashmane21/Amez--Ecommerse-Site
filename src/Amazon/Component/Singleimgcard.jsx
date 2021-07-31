import React from 'react';

import '../CSS/product_card.scss'



function SingleImgCard(props){



  
return (
    <>
        <div className="img_container">
        <h2>{props.title}</h2>
            <div className="img_component">
                <img src={props.img} />
            </div>

            <button  id="btn">{props.link}</button>

        </div>
    </>
)
   
}

export default SingleImgCard;





