// import React from 'react';
// import { PRODUCTS } from '../../../ESHOP/products';
// import { shopContext } from '../../../../context/shopContext';
// import { CartItem } from '../../../ESHOP/Cart/cart-item';
// export const OrderHistory = () => {
//   const {cartItems, getSousTotal} = useContext(shopContext);
//   return (
//     <>
//       <div className="orderHistory">
//         <div className="commande">
//         <h3>Commande</h3>
//           <div className="article">
            
//           {PRODUCTS.map((product) => {
//                 if (cartItems[product.id] !== 0){
//                   return <CartItem data={product}/>
//                 }
//                 })}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
