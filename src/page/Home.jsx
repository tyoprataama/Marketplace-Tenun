import React from 'react';
import Categories from './Categories';
import Info from './Info';
import Navbar from './Navbar';
import Slider from './Slider';

const Home = () => {
  return (
      <div>
          <Info/>
          <Navbar/>
          <Slider/>
          <Categories/>
      </div>
  )
}

export default Home