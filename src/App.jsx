import React from 'react'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage/HomePage'
import AboutPage from './Page/AboutPage/AboutPage'
import Navbar from './components/Navbar/Navbar'
import ContactPage from './Page/ContactPage/ContactPage'
import ShopPage from './Page/ShopPage/ShopPage'
import ProductDetails from './Page/ProductDetails/ProductDetails'
import ScrollToTop from './lib/ScrollToTop/ScrollToTop'
import CheckOutPage from './Page/CheckOutPage/CheckOutPage'

function App() {
  return (
    <div>
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/contact' element={<ContactPage/>} />
    <Route path='/shop' element={<ShopPage/>} />
    <Route path='/item/:id' element={<ProductDetails/>} />
    <Route path='/check_out' element={<CheckOutPage/>} />
    </Routes>
    <Footer/> 
    </BrowserRouter>
    
   
    </div>
  )
}

export default App
