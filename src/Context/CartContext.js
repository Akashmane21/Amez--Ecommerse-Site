import { useState , createContext ,useContext  } from "react";

 const CartContext = createContext()

 export const  useCounter =() => useContext(CartContext)
 
function CartContextProider(props){

          
            const [Desdata, setDesdata] = useState([])


            const Username =  localStorage.getItem("UserName");
            // eslint-disable-next-line
            const [UserName, setUserName] = useState(Username)

            
            const userid =  localStorage.getItem("Userid");
            // eslint-disable-next-line
            const [UserId, setUserId] = useState(userid)
            const [cat, setcat] = useState("")


 
    const value={ UserId , Desdata, setDesdata , UserName , cat, setcat}

    return(
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>

    )

}

export default CartContextProider;