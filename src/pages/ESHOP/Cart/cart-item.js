import React,{useContext} from 'react'
import { shopContext } from '../../../context/shopContext';
export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCart} = useContext(shopContext);
  return (
    <div className="cartItems">
        <div className='cartItem'>
            <div className="ProductImage">
                <img className= "imageCarte"src={productImage} alt="Produit" />
            </div>
            <div className="description">
                <div className="productDescription">
                <p>
                    <b>{productName}</b>
                </p>
                </div>
                <div className="productPrice">
                    <p>${price}</p>
                </div>
            </div>
            <div className="countArticle">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input className="inputCount" value={cartItems[id]} onChange={(e)=>updateCart(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
            <div className="delBtn" >
                <p> x </p>
            </div>
        </div>

    </div>
  )
}
