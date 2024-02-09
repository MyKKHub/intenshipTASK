import React from 'react';
import './Care.css';
import HeaderHome from '../../Home///HeaderHome/HeaderHome';
import FooterHome from '../../Home/FooterHome/FooterHome';
import A from './CardImages/A.webp';
import B from './CardImages/B.webp';
import C from './CardImages/C.webp';
import D from './CardImages/D.webp';
import E from './CardImages/E.webp';
import F from './CardImages/F.webp';
import G from './CardImages/G.webp';
import H from './CardImages/H.webp';
import I from './CardImages/I.webp';
import J from './CardImages/J.webp';
import K from './CardImages/K.webp';
import L from './CardImages/L.webp';
import M from './CardImages/M.webp';
import N from './CardImages/N.webp';
import O from './CardImages/O.webp';
import P from './CardImages/P.webp';

const Care = () => {
    // Sample data for cards
    const cardData = [
      {
        id: 1,
        imageSrc: A,
        price: 3000,
        offerPrice: 1500,
      },
      {
        id: 2,
        imageSrc: B,
        price: 1500,
        offerPrice: 999,
      },
      {
        id: 3,
        imageSrc: C,
        price: 1500,
        offerPrice: 999,
      },
      {
        id: 4,
        imageSrc: D,
        price: 2500,
        offerPrice: 1800,
      }, 
      {
        id: 5,
        imageSrc: E,
        price: 2500,
        offerPrice: 1800,
      }, 
      {
        id: 6,
        imageSrc: F,
        price: 1500,
        offerPrice: 799,
      }, 
      {
        id: 7,
        imageSrc: G,
        price: 1500,
        offerPrice: 799,
      }, 
      {
        id: 8,
        imageSrc: H,
        price: 1500,
        offerPrice: 999,
      }, 
      {
        id: 9,
        imageSrc: I,
        price: 1500,
        offerPrice: 599,
      },
      {
        id: 10,
        imageSrc: J,
        price: 1500,
        offerPrice: 699,
      },
      {
        id: 11,
        imageSrc: K,
        price: 1500,
        offerPrice: 999,
      },
      {
        id: 12,
        imageSrc: L,
        price: 1500,
        offerPrice: 499,
      },
      {
        id: 13,
        imageSrc: M,
        price: 1500,
        offerPrice: 1199,
      },
      {
        id: 14,
        imageSrc: N,
        price: 1500,
        offerPrice: 699,
      },
      {
        id: 15,
        imageSrc: O,
        price: 1500,
        offerPrice: 899,
      },
      {
        id: 16,
        imageSrc: P,
        price: 1500,
        offerPrice: 999,
      },

      // Add more data for additional cards
    ];
  
    return (
      <div>
        <header>
          <HeaderHome />
        </header>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {cardData.map((card) => (
            <div key={card.id} className="col">
              <div className="care-card h-100">
                <img src={card.imageSrc} alt={card.title} className="card-img-top" />
                <div className="care-card-body">
                  <div className="price-wrapper">
                    <span className="price">Price:</span>
                    <del className="card-price">₹{card.price}</del>
                  </div>
                  <div className="offer-price-wrapper">
                    <span className="offer-price">Offer Price:</span>
                    <span className="card-offer-price">₹{card.offerPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer>
          <FooterHome />
        </footer>
        </div>
      );
    };
    
    export default Care;