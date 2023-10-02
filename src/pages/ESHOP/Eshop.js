import React from 'react'
import {Filter} from "./Filter/Filter"
import{Catalogue} from"./Catalogue/Catalogue"

import { Cart } from './Cart/Cart';
import { useState} from 'react';
export const Eshop = () => {
  const [showCart, setShowCart] = useState(false)

  return (
      <div>
        <div className="ImageBackroundShop">
          <div className="IntroShop">
            <div className="Textintro">
              <h1 className='introTextShop'>
                Récupérez le flow de <br />
                Batman avec notre e-shop!
              </h1>
            </div>
          </div>
        </div>
        <div className="caddy">
          <p>path</p>
          <div className="imgCaddy">
            <div onClick={()=>{
              setShowCart(!showCart);
            }}> 
              <img src={process.env.PUBLIC_URL + '/assets/icones/caddy.png'} alt="icone caddy"/>
            </div >
          </div>
        </div>
              {showCart && <Cart />}

          {!showCart && 
        <div className='CatalFilter container-fluid'>
          <Filter className="Filter "/>
          <Catalogue />
        </div>
          }
      </div>
    );
}
