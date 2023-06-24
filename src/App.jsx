import React from 'react'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage/HomePage'
import AboutPage from './Page/AboutPage/AboutPage'
import Navbar from './components/Navbar/Navbar'
import ContactPage from './Page/ContactPage/ContactPage'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/about' element={<AboutPage/>} />
    <Route path='/contact' element={<ContactPage/>} />
    </Routes>
    <Footer/> 
    </BrowserRouter>
    
   
    </div>
  )
}

export default App
