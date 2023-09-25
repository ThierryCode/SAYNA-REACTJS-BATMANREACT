import React from 'react'
import {Filter} from "./Filter/Filter"
import{Catalogue} from"./Catalogue/Catalogue"
export const Eshop = () => {
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
        <div className='CatalFilter container-fluid'>
          <Filter className="Filter "/>
          <Catalogue />
        </div>
      </div>
    );
}
