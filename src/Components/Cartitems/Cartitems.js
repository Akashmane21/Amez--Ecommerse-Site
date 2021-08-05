import React  , {useState} from 'react'
import '../Deals/Deals.scss'
import './cartitems.scss'
import {useCounter} from '../../Context/CartContext'


function Cartitems({item}) {
    // eslint-disable-next-line
    const {setCartdata ,Cartdata} = useCounter()
        // eslint-disable-next-line

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

    function del(){
        const idToRemove = `${item.id}`
        const filteredPeople = Cartdata.filter((item) => item.id !== idToRemove);
        console.log(filteredPeople);
        var string = JSON.stringify(filteredPeople);
        localStorage.setItem('cartData',string);
        window.location.reload()
        // localStorage.setItem('cartData',filteredPeople);


    }
    return (
        <div className="items">
           <img src={item.Image1} alt="" />
           <div>
           <h2>{item.Name}</h2>


           <div className="rate">
                <div className="Price">
              <span>Price :</span>   ₹{item.Price}
              </div>
           
           <div className="MRP">
                 <span>M.R.P :</span> <span className="mrp"> ₹{item.MRP}</span>  ({item.Discount})
            </div>
           </div>
           
           </div>


           
           <div>
          
            <div className="Categary Flex">
          {item.Categary}
          <button onClick={del}>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>

            </div>

            <div className="incbtn">
                <button onClick={Dec}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <h3>{num}</h3>
                <button onClick={Inc}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>

            </div>


            <div className="Price total ">
               <span>Total :</span>   ₹{Total}
           </div>


           </div>
           
                




        </div>
    )
}

export default Cartitems
