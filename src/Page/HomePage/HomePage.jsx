import React from 'react'
import PreFooter from '../../components/HomeComponents/PreFooter/PreFooter'
import Carousel from '../../components/Carousel/Carousel'
import About from '../../components/HomeComponents/About/About'
import MedCards from '../../components/HomeComponents/MedCards/MedCards'

function HomePage() {
  return (
    <div>HomePage
    
    <Carousel/>
    <About/>
    <MedCards/>
    <PreFooter/>
    </div>
  )
}

export default HomePage
