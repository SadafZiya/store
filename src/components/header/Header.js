import React from 'react';

//styles
import './Header.css';
import shopHeader from '../../assets/shop.jpg';
import shopIcon from '../../assets/shop-icon.png';
import cartIcon from '../../assets/online-cart.svg';
import searchIcon from '../../assets/search.svg';

const Header = () => {
  const SubmitHandler = () => {};

  return (
    <>
      <nav>
        <div className='logo'>
          <h1>
            ROSE <span>SHOP</span>
          </h1>
          <img src={shopIcon} alt='shop icon' />
        </div>
        <form className='search' onSubmit={SubmitHandler}>
          <input type='text' />
          <button type='submit'>
            <img src={searchIcon} alt='search' />
          </button>
        </form>

        <div className='badge'>
          <button>
            <div className='cart-icon'>
              <img src={cartIcon} alt='cart icon' />
              <div className='badge-count'>
                <span> 10</span>
              </div>
            </div>

            <span className='badge-cart'>Cart</span>
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
