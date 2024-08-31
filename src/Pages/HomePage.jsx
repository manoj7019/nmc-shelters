import React from 'react'
import Navbar from '../Components/Navbar'
import PlotDetails from '../Components/PlotDetails'
import PlotCards from '../Components/PlotCards'
import Services from '../Components/Services'
import QuerySubmit from '../Components/QuerySubmit'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import ImageSlider from '../Components/ImageSlider'

const HomePage = () => {
   
  const imageSrc = '/hero005.png'

  return (
    <div>
      <Services />
      <Hero />
    </div>
  )
}

export default HomePage
