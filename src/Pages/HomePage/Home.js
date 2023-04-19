import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import BannerSlider from '../../Components/Navbar/Banner/BannerSlider';
import HomeCategories from '../../Components/Navbar/Category/HomeCategories';
import Product_Sidebar from '../../Components/Product/Product_Sidebar';
import Footer1 from '../../Components/Footer/Footer1';
import Footer2 from '../../Components/Footer/Footer2';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <BannerSlider/>
    <HomeCategories/>
    <Product_Sidebar/>
    <Footer1/>
    <Footer2/>


    </div>
  );
}

export default Home;
