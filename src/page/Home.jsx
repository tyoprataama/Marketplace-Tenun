import React from 'react';
import Categories from './Categories';
import CategoriesBig from './CategoriesBig';
import Info from './Info';
import Navbar from './Navbar';
import Products from './Products';
import Slider from './Slider';

const Home = () => {
  return (
      <div>
          <Info/>
          <Navbar/>
          <Slider/>
          <Categories/>
          <CategoriesBig/>
          <Products/>
      </div>
  )
}

export default Home