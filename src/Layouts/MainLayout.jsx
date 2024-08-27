import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'
import ChatBot from 'react-simple-chatbot';
import SimpleForm from '../Components/Simpleform'
// import SimpleForm from '../Components/Simpleform'

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />

      <SimpleForm />
      <Footer />
    </div>
  )
}

export default MainLayout
