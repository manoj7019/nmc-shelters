import React from 'react'
import Logo from '/finalLogo1.png'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if(window.innerWidth > 1100) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    

    const updateMedia = () => {
        if(window.innerWidth > 1100) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        } 
    }

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia)
    }, [])

    function handleSetShowDropdown() {
        setShowDropdown(!showDropdown);
    }

  return (
    <>
      <div className='top-0 inset-x-0 fixed z-50 flex justify-between items-center p-4 px-5 bg-gray-50/80 backdrop-blur'>
          <NavLink to='/'>
              <div className='transition transform flex items-end'>
                  <img className='laptop:h-8 mobile:h-7' src={Logo} alt="" />
              </div>
          </NavLink>

        {isDesktop ? 
          <div className='flex justify-between items-center gap-8'>
            <Link to='/'>
                <p className='transition transform hover:scale-125 hover:text-orange-500'>Services</p>
            </Link>
            <Link to='/choosePlot'>
                <p className='transition transform hover:scale-125 hover:text-orange-500'>Plots</p>
            </Link>
            <Link to='/plotInfo'>
                <p className='transition transform hover:scale-125 hover:text-orange-500'>Blog</p>
            </Link>
            <Link to='/about'>
                <p className='transition transform hover:scale-125 hover:text-orange-500'>About us</p>
            </Link>

            <Link to='/submit'> 
                <p className='transition transform hover:scale-125 bg-orange-500 py-2 px-5 rounded-3 text-white hover:text-orange-500 hover:bg-white hover:shadow-md'>Contact Us</p>
            </Link>
          </div> 
          :
          <h1 className='text-orange-500 p-1'
            onClick={handleSetShowDropdown}>
              {showDropdown? <CloseIcon fontSize='large'/> : <MenuIcon fontSize='large'/>}
          </h1>
        }

  {showDropdown && 
              <div className='laptop:hidden mobile:absolute min-h-[100vh] left-0 top-[100%] w-full px-1'>
                  {/* <div className='flex flex-col flex-8 justify-between items-center bg-gray-50 gap-10 px-5 py-8 rounded-b-lg mx-2 z-50'> */}
                  <div className='flex flex-col justify-between items-center gap-6 px-5 py-6 rounded-b-5 mx-2 z-50 bg-gray-50'>
                      <NavLink to='/' onClick={handleSetShowDropdown} className='flex items-center gap-1 px-4'>
                          <button className='text-6 flex items-center gap-2'>Services</button>
                      </NavLink>
                      <NavLink to='/choosePlot' onClick={handleSetShowDropdown} className='flex items-center gap-1 px-4'>
                          <button className='text-6 flex items-center gap-2'>Plots</button>
                      </NavLink>
                      <NavLink to='/plotInfo' onClick={handleSetShowDropdown} className='flex items-center gap-1 px-4'>
                          <button className='text-6 flex items-center gap-2'>Blog</button>
                      </NavLink>
                      <NavLink to='/about' onClick={handleSetShowDropdown} className='flex items-center gap-1 px-4'>
                          <button className='text-6 flex items-center gap-2'>About us</button>
                      </NavLink>
                      <NavLink to='/submit' onClick={handleSetShowDropdown} className='bg-orange-500 text-6 text-white py-4 px-9 rounded-5'>
                          <button>Contact us</button>
                      </NavLink>
                  </div>
              </div>
              }
      </div>
    </>
  )
}

export default Navbar
