import React from 'react';

//Styles
import './Card.css';

const Card = ({ id, image, title, price }) => {
  return (
    <div className='card'>
      <div className='product-image'>
        <img src={image} alt='a Cool jacket' />
      </div>
      <div className='product-info'>
        <p className='product-name'> {title}</p>
        <span className='product-rate'>4.5 ⭐</span>
        <span className='product-price'>${price}</span>
      </div>
    </div>
  );
};

export default Card;
