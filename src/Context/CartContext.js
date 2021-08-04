import { useState , createContext ,useContext  } from "react";

 const CartContext = createContext()

 export const  useCounter =() => useContext(CartContext)
 
function CartContextProider(props){

            const data =   JSON.parse(localStorage.getItem("cartData"));
            const [Cartdata, setCartdata] = useState(data)
 
    const value={ Cartdata ,setCartdata }

    return(
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>

    )

}

export default CartContextProider;