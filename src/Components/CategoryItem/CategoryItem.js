import React from 'react'
import './CategoryItem.scss'
function CategoryItem({Product}) {
    return (
        <div className="category_block">
        <div className="img">

            <img src={Product.Image1} alt=" " />
        </div>
            <div className="Cat_info">

            <h1>{Product.Name}</h1>
            <h2>{Product.Price}</h2>
            <h3>{Product.MRP}</h3> 
            <h6>({Product.Discount}) *off</h6>
            {/* <div className="btnflex"> */}
                <button>Add to Cart</button>
                <button>Buy Now</button>

            {/* </div> */}
            </div>
        </div>
    )
}

export default CategoryItem
