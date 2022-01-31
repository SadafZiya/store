/* eslint-disable array-callback-return */
import React from 'react';

//Components
import Card from './Card/Card';
import { FilterContext } from '../context/filter_context';

//Styles
import './Main.css';

const Main = ({ data, searchFilter }) => {
  const { filterCategory, filterStar, filterPrice, minPrice, maxPrice } =
    React.useContext(FilterContext);
  const { category, checked } = filterCategory;
  const { Star } = filterStar;
  const { price } = filterPrice;
  console.log(price);
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
          if (Star === '') {
            return product;
          } else if (Star === 'star-4') {
            return product.rating.rate >= 4;
          } else if (Star === 'star-3') {
            return product.rating.rate >= 3;
          } else if (Star === 'star-2') {
            return product.rating.rate >= 2;
          } else if (Star === 'star-1') {
            return product.rating.rate >= 1;
          } else if (Star === 'clear') {
            return product;
          }
        })

        .filter((product) => {
          if (price === '' || minPrice === '' || maxPrice === '') {
            return product;
          } else if (price === 'Any Price') {
            return product;
          } else if (price === 'Under $25') {
            return 0 <= product.price && product.price <= 25.0;
          } else if (price === '$25 to $50') {
            return 25.0 <= product.price && product.price <= 50.0;
          } else if (price === '$50 to $100') {
            return 50.0 <= product.price && product.price <= 100.0;
          } else if (price === '$100 to $200') {
            return 100.0 <= product.price && product.price <= 200.0;
          } else if (price === '$200 & Above') {
            return 200.0 <= product.price;
          } else if (price === 'custom-price') {
            return minPrice <= product.price && product.price <= maxPrice;
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
        .map(({ id, image, title, price, rating }) => (
          <Card
            key={id}
            image={image}
            title={title}
            price={price}
            rating={rating}
          />
        ))}
    </div>
  );
};

export default Main;
