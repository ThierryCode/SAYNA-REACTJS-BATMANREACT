import React from 'react';
import { PRODUCTS } from '../products'
import { Product } from "../components/Product/Product"
export const Catalogue = (props) => {

  return (
    <>
    <div className="allProduct">
    <div className="caddy">
      <img src={process.env.PUBLIC_URL + '/assets/icones/caddy.png'} alt="icone caddy" />
    </div>
    <div className="resTri">
      <p>Résultat : {PRODUCTS.length}</p>
      <div className="dropdown">
        <p className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Trier par
        </p>

      </div>
    </div>
    <div className="catalogue">
    <ul className='cardList'>
          {PRODUCTS.map((product)=>(
          <Product data={product} />
          ))}
    </ul>
  </div>
    </div>
    </>
  )
}
