import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import BannerSlider from '../../Components/Navbar/Banner/BannerSlider';
import HomeCategories from '../../Components/Navbar/Category/HomeCategories';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <BannerSlider/>
    <HomeCategories/>
    <h1>Home</h1>
    </div>
  );
}

export default Home;
