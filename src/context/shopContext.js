import React, { createContext, useState } from 'react'
import { PRODUCT } from "../product"

export const shopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for(let i= 1; i <PRODUCT.length +1; i++){
        cart[i] = 0;
    }
  return cart;
};
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}))
    };
    const contextValue = {cartItems, addToCart, removeFromCart};
    // console.log(cartItems);
      return(
            <shopContext.Provider value={contextValue}>
                {props.children}
            </shopContext.Provider>
            );
    
    };