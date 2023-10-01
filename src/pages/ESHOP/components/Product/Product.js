import React from 'react'
import { useContext } from 'react';
import { shopContext } from '../../../../context/shopContext';
import { PRODUCTS } from "../../products"
export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems} = useContext(shopContext);
  const cartItemAmount = cartItems[id];
  return (

      <li className="Card col-3">
        <div className="infoProduct">
        <img src={productImage} alt="produit" />
          <p className="productName">{productName}</p>
          <p className="productPrice">{price}$</p>
        </div>
        <div className="Button">
          <button onClick = {() => addToCart(id)}>
          Ajouter au panier {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
      </li> 

  )
}
