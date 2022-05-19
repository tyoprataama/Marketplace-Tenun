import React from 'react';
import Categories from './Categories';
import CategoriesBig from './CategoriesBig';
import Hero from './Hero';
import Info from './Info';
import Navbar from './Navbar';
import News from './News';
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
          <Hero/>
          <Products/>
          <News/>
      </div>
  )
}

export default Home