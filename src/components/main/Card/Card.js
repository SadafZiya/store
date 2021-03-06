import React from 'react';

//Styles
import './Card.css';

const Card = ({ id, image, title, price, rating }) => {
  return (
    <div className='card'>
      <div className='product-image'>
        <img src={image} alt='a Cool jacket' />
      </div>
      <div className='product-info'>
        <p className='product-name'> {title}</p>
        <div className='product-information'>
          <span className='product-rate'>⭐{rating.rate}</span>
          <span className='product-price'>$ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
