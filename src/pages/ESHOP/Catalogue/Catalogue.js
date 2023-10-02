import React from 'react';
import { PRODUCTS } from '../products';
import { Product } from "../components/Product/Product";
import { Link } from 'react-router-dom';
export const Catalogue = (props) => {

  return (
    <>
    <div className="allProduct">
      <div className="caddy">
        <Link to="/Cart">
          <img src={process.env.PUBLIC_URL + '/assets/icones/caddy.png'} alt="icone caddy"/>
        </Link>
      </div>
      <div className="resTri">
        <p>Résultats : {PRODUCTS.length}</p>
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
