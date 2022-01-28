import React from 'react';

//styles
import './Header.css';
import shopHeader from '../../assets/shop.jpg';

const Header = () => {
  return (
    <>
      <nav>
        <div className='logo'>
          <h1>logo</h1>
        </div>
        <form className='search'>
          <input type='text' />
          <button type='submit'></button>
        </form>

        <div className='badge'>
          <button>
            <span>%</span>
            <span>Cart</span>
            <span> 0</span>
          </button>
        </div>
      </nav>
      <div className='main-image'>
        <img src={shopHeader} alt='' />
      </div>
    </>
  );
};

export default Header;
