import React, { useState } from 'react';

import { FilterContext } from '../../../context/filter_context';
//styles
import './CustomPriceFilter.css';

const CustomPriceFilter = () => {
  const { setFilterPrice, setMaxPrice, setMinPrice, minPrice, maxPrice } =
    React.useContext(FilterContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setFilterPrice({
      price: e.target.id,
    });
  };

  return (
    <div className='custom-price-filter'>
      <form onSubmit={submitHandler} id='custom-price'>
        <input
          type='number'
          name='min'
          id='min'
          min={0}
          value={minPrice}
          max={99999}
          placeholder='$ Min'
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type='number'
          name='max'
          id='max'
          min={0}
          value={maxPrice}
          max={99999}
          placeholder='$ Max'
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button>Go</button>
      </form>
    </div>
  );
};

export default CustomPriceFilter;
