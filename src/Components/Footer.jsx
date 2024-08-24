import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LogoW from '/logowhite.png'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex bg-indigo-950 p-8 justify-between items-center gap-4'>
            {/* <h1 className='text-white text-8'>Social for all latest updates.</h1> */}
            <div className='flex flex-1 flex-col items-start gap-3'>
                <img className='h-7' src={LogoW} alt="" />
                <div className='flex gap-1'>
                    <a href="" className='transition transform hover:scale-125 text-gray-400 hover:text-white'>
                        <LocationOnIcon fontSize='small'></LocationOnIcon>
                    </a>
                    <p className='transition transform hover:underline text-gray-400 hover:text-white'>
                        1st floor, #516 Roshan Palace Apartments, 8th cross MCECHS layout, Dr. Shivramkaranth nagar, Sreerampura, Bengaluru, Karnataka - 560077
                    </p>
                </div>
            </div>

            <div className='flex flex-1 flex-col items-center gap-3'>
                <a href="">
                    <p className='transition transform hover:scale-125 hover:text-white text-gray-400'>Services</p>
                </a>
                <a href="">
                    <p className='transition transform hover:scale-125 hover:text-white text-gray-400'>Plots</p>
                </a>
                <a href="">
                    <p className='transition transform hover:scale-125 hover:text-white text-gray-400'>Blog</p>
                </a>
                <a href="">
                    <p className='transition transform hover:scale-125 hover:text-white text-gray-400'>About us</p>
                </a>
            </div>

            <div className='flex flex-1 justify-center items-evenly gap-8'>
                <a href="" className='transition transform text-gray-400 hover:text-white hover:scale-125'>
                    <FacebookIcon fontSize='large'></FacebookIcon>
                </a>
                <a href="" className='transition transform text-gray-400 hover:text-white hover:scale-125'>
                    <LinkedInIcon fontSize='large'></LinkedInIcon>
                </a>
                <a href="" className='transition transform text-gray-400 hover:text-white hover:scale-125'>
                    <InstagramIcon fontSize='large'></InstagramIcon>
                </a>
                <a href="" className='transition transform text-gray-400 hover:text-white hover:scale-125'>
                    <EmailIcon fontSize='large'></EmailIcon>
                </a>
                <a href="" className='transition transform text-gray-400 hover:text-white hover:scale-125'>
                    <WhatsAppIcon fontSize='large'></WhatsAppIcon>
                </a>
            </div>
        </div>
        <p className='text-center bg-indigo-950 text-gray-400 p-2 border-t-0.5 border-gray-700'>
            &copy; 2024 Namochetana India Pvt. Ltd. All rights reserved.
        </p>
    </div>
  )
}

export default Footer
