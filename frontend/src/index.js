import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authcontext';
import './index.css';
import AboutPage from './lannding_page/about/AboutPage';
import Footer from './lannding_page/Footer';
import HomePage from './lannding_page/home/HomePage';
import Navbar from './lannding_page/Navbar';
import NotFound from './lannding_page/NotFound';
import PricingPage from './lannding_page/pricing/PricingPage';
import ProductPage from './lannding_page/products/ProductPage';
import Signup from './lannding_page/signup/Signup';
import SupportPage from './lannding_page/support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthProvider>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/pricing" element={<PricingPage/>} />
      <Route path="/support" element={<SupportPage/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  <Footer/>
  </AuthProvider>
  </BrowserRouter>
);


