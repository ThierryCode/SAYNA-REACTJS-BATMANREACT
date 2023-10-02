import React from 'react'
import { useContext } from 'react';
import { shopContext } from '../../../../context/shopContext';
export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems} = useContext(shopContext);
  const cartItemAmount = cartItems[id];
  return (

      <li className="Card col-3">
        <div className="infoProduct">
          <div className="badgeCoeur">
            
          </div>
          <div className="imageProduct">
        <img src={productImage} alt="produit" />
          </div>
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
