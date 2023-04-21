import React from 'react';
import { Route , Routes , BrowserRouter } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import ProductPage from './Pages/Product/ProductPage';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product/:prodid' element={<ProductPage/>}/>
        <Route path='*' element={<div><h1>404 NOT FOUND</h1></div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
