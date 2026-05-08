import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

function App() {


  return (
    <>
       <BrowserRouter>
       <ScrollToTop/>
       <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />}/> */}
        <Route path="/contact" element={<Contact />}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
