import React from 'react';
import {Filter} from "./Filter/Filter";
import{Catalogue} from"./Catalogue/Catalogue";
import { Cart } from './Cart/Cart';
import { useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { EshopLayout } from './EshopLayout/EshopLayout';
export const Eshop = () => {
  const [showCart, setShowCart] = useState(true)

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
       
            <Link to="Cart">
                <img src={process.env.PUBLIC_URL + '/assets/icones/caddy.png'} alt="icone caddy"/>
            </Link>
          </div>
        </div>

              <Outlet />
      </div>
    );
}