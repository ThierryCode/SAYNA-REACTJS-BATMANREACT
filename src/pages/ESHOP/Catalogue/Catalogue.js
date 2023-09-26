import React from 'react';
import { useContext } from 'react';
import { shopContext } from '../../../context/ShopContext';

export const Catalogue = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems} = useContext(shopContext);
  const cartItemAmount = cartItems[id];
  return (
    <>
    <div className="allProduct">
    <div className="caddy">
      <img src={process.env.PUBLIC_URL + '/assets/icones/caddy.png'} alt="icone caddy" />
    </div>
    <div className="resTri">
      <p>Résultat : 122</p>
      <div className="dropdown">
        <p className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Trier par
        </p>

      </div>
    </div>
      <div className="catalogue ">
          <ul className='cardList'>
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
          </ul>
        </div>
    </div>
    </>
  )
}
