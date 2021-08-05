import React  , {useState} from 'react'
import '../Deals/Deals.scss'
import './cartitems.scss'
function Cartitems({item}) {

    const [num, setnum] = useState(1)
    const [bigp, setbigp] = useState(2)
    var ap = parseInt(`${item.Price}`.replace(/,/g, ''));

const [Total, setTotal] = useState(ap)
//  eslint-disable-next-line
const [actualP, setactualP] = useState(ap)

    function Dec(){
        setnum(num-1)
        setbigp(bigp-1)
        setTotal(Total-actualP);



    }
    function Inc(){
        setnum(num+1)
        setbigp(bigp+1)
       
        setTotal(actualP*bigp);

       


    }
    return (
        <div className="items">
           <img src={item.Image1} alt="" />
           <div>
           <h2>{item.Name}</h2>
            <div className="Price">
        <span>Price :</span>   ₹{item.Price}
           </div>
           
           <div className="MRP">
        <span>M.R.P :</span> <span className="mrp"> ₹{item.MRP}</span>  ({item.Discount})
            </div>
           </div>
           
           <div>
          
            <div className="Categary">
          {item.Categary}

            </div>

            <div className="incbtn">
                <button onClick={Dec}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <h3>{num}</h3>
                <button onClick={Inc}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>

            </div>

            <div className="Price total">
        <span>Total :</span>   ₹{Total}
           </div>


           </div>
          
           
                




        </div>
    )
}

export default Cartitems
