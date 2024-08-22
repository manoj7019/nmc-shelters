import React from 'react'
import Logo from '/logo3.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='top-0 inset-x-0 fixed z-50 flex justify-between items-center p-3 px-5 bg-gray-50/80 backdrop-blur'>
        <Link to='/'>
            <div className='flex items-end'>
                <img className='h-8' src={Logo} alt="" />
            </div>
        </Link>
            
      <div className='flex justify-between items-center gap-8'>
        <Link to='/'>
            <p className='hover:text-red-500 hover:underline'>Services</p>
        </Link>
        <Link to='/choosePlot'>
            <p className='hover:text-red-500 hover:underline'>Plots</p>
        </Link>
        <Link to='/plotInfo'>
            <p className='hover:text-red-500 hover:underline'>Blog</p>
        </Link>
        <Link to='/about'>
            <p className='hover:text-red-500 hover:underline'>About us</p>
        </Link>

        <Link to='/submit'> 
            <p className='bg-red-500 py-2 px-5 rounded-3 text-white hover:text-red-500 hover:bg-white hover:shadow-md'>Contact Us</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
