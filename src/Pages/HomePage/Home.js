import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import BannerSlider from '../../Components/Navbar/Banner/BannerSlider';
import HomeCategories from '../../Components/Navbar/Category/HomeCategories';
import Product_Sidebar from '../../Components/Product/Product_Sidebar';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <BannerSlider/>
    <HomeCategories/>
    <Product_Sidebar/>
    <h1>Home</h1>
    </div>
  );
}

export default Home;
