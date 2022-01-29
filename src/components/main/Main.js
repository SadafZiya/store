import React from 'react';

//Components
import Card from './Card/Card';

//Styles
import './Main.css';

const Main = ({ data }) => {
  return (
    <div className='product-container'>
      {data?.map(({ id, image, title, price }) => (
        <Card key={id} image={image} title={title} price={price} />
      ))}
    </div>
  );
};

export default Main;
