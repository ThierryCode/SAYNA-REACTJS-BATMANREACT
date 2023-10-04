import React from 'react';
import { PRODUCTS } from '../products';
import { Product } from "../components/Product/Product";
import { ProductList } from '../ProductList/ProductList';
import { Filter } from '../Filter/Filter';

export const Catalogue = (props) => {

  return (
    <>
    < div className='CatalFilter container-fluid'>
      < Filter />
      < ProductList/>
    </div >
    </>
  )
}
