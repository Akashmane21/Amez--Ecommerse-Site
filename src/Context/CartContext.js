import { useState , createContext ,useContext  } from "react";

 const CartContext = createContext()

 export const  useCounter =() => useContext(CartContext)
 
function CartContextProider(props){

            const data =   JSON.parse(localStorage.getItem("cartData"));
            const [Cartdata, setCartdata] = useState(data)
 

            const Wishlist =   JSON.parse(localStorage.getItem("Wishlist"));
            const [wishlist, setwishlist] = useState(Wishlist)
 
    const value={ Cartdata ,setCartdata  , wishlist , setwishlist}

    return(
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>

    )

}

export default CartContextProider;