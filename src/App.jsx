import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {


  return (
    <>
       <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/> */}
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
