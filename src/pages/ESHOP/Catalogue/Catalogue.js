import React from 'react'

export const Catalogue = () => {
  return (
    <>
      <div className="catalogue">
          <ul className='cardList'>
            <li className="Card ">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_1.png'} alt="produit" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
            <li className="Card">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_2.png'} alt="" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
            <li className="Card">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_3.png'} alt="" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
            <li className="Card">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_4.png'} alt="" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
            <li className="Card">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_5.png'} alt="" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
            <li className="Card">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_6.png'} alt="" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
            <li className="Card">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_7.png'} alt="" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
            <li className="Card">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_8.png'} alt="" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
            <li className="Card">
              <img src={process.env.PUBLIC_URL + '/assets/images/article_9.png'} alt="" />
              <p className="productName">Name</p>
              <p className="productPrice">000$</p>
            </li>
          </ul>
        </div>
    </>
  )
}
