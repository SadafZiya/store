import React from 'react';

//Components
import Card from './Card/Card';

//Styles
import './Main.css';

const Main = ({ data, searchFilter }) => {
  // const filtering = useCallback(() => {
  //   data.forEach((element) => {
  //     if (element.title.toLowerCase().includes(searchFilter)) {
  //       setFilteredProducts((prevState) => [...prevState, element]);
  //     }
  //   });
  // }, [searchFilter, data]);

  return (
    <div className='product-container'>
      {data
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
