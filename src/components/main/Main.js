/* eslint-disable array-callback-return */
import React from 'react';

//Components
import Card from './Card/Card';
import { FilterContext } from '../context/filter_context';

//Styles
import './Main.css';

const Main = ({ data, searchFilter }) => {
  const { filterCategory } = React.useContext(FilterContext);
  const { category, checked } = filterCategory;

  return (
    <div className='product-container'>
      {data
        .filter((x) => {
          if (category === '' || category === 'All') {
            return x;
          } else if (x.category === category && checked) {
            return x;
          }
        })
        .filter((product) => {
          if (searchFilter === '') {
            return product;
          } else if (
            product.title.toLowerCase().includes(searchFilter.toLowerCase())
          ) {
            return product;
          }
        })
        .map(({ id, image, title, price }) => (
          <Card key={id} image={image} title={title} price={price} />
        ))}
    </div>
  );
};

export default Main;
