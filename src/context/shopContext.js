import React, { createContext, useContext, useState } from 'react'
import { PRODUCTS } from "../pages/ESHOP/products"

export const shopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for(let i= 1; i <PRODUCTS.length +1; i++){
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
      return(
            <shopContext.Provider value={contextValue}>
                {props.children}
            </shopContext.Provider>
            );
    
    };