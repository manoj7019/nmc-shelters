import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LogoW from '/nmclogoWhite.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear()
    console.log(year)

  return (
    <div className=''>
        <div className='flex laptop:flex-row mobile:flex-col bg-[#440859] laptop:p-8 mobile:p-5 mobile:py-7 justify-between items-center laptop:gap-4 mobile:gap-6'>
            {/* <h1 className='text-white text-8'>Social for all latest updates.</h1> */}
            <div className='flex flex-1 flex-col laptop:items-start mobile:items-center gap-3'>
                <img className='h-7' src={LogoW} alt="" />
                <div className='flex gap-1'>
                    <a href="https://www.google.com/maps/dir//Raja+Store,+Land+mark,+8TH+CROSS+MCECHS+LAYOUTS,DR+SHIVRAMKARANTH+NAGAR,+Srirampura,+Bengaluru,+Karnataka+560077/@13.0689809,77.5438561,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2f5376e65c17a25d:0xd5b91bf4a1fd5022!2m2!1d77.626258!2d13.068994?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D" className='transition transform text-gray-300 hover:text-white'>
                        {/* <LocationOnIcon className='hidden' fontSize='small'></LocationOnIcon> */}
                    <p className='transition transform hover:underline text-gray-300 hover:text-white laptop:text-left mobile:text-center mobile:p-0'>
                        1st floor, #516 Roshan Palace Apartments, 8th cross MCECHS layout, Dr. Shivramkaranth nagar, Sreerampura, Bengaluru, Karnataka - 560077
                    </p>
                    </a>
                </div>
            </div>

            <div className='flex flex-1 laptop:flex-col mobile:flex-row items-center gap-3'>
                <Link to='/'>
                    <p className='transition transform hover:scale-125 hover:text-white text-gray-300'>Services</p>
                </Link>
                <Link to="/choosePlot">
                    <p className='transition transform hover:scale-125 hover:text-white text-gray-300'>Plots</p>
                </Link>
                <Link to="/plotInfo">
                    <p className='transition transform hover:scale-125 hover:text-white text-gray-300'>Blog</p>
                </Link>
                <Link to="/about">
                    <p className='transition transform hover:scale-125 hover:text-white text-gray-300'>About us</p>
                </Link>
            </div>

            <div className='flex flex-1 justify-center items-evenly laptop:gap-8 mobile:gap-6'>
                <a href="https://www.facebook.com/profile.php?id=61559752832616" className='transition transform text-gray-300 hover:text-white hover:scale-125'>
                    <FacebookIcon fontSize='large'></FacebookIcon>
                </a>
                <a href="https://www.linkedin.com/company/103758834/admin/dashboard/" className='transition transform text-gray-300 hover:text-white hover:scale-125'>
                    <LinkedInIcon fontSize='large'></LinkedInIcon>
                </a>
                <a href="https://www.instagram.com/namochetanaindia/" className='transition transform text-gray-300 hover:text-white hover:scale-125'>
                    <InstagramIcon fontSize='large'></InstagramIcon>
                </a>
                <a href="mailto: support@namochetana.com" className='transition transform text-gray-300 hover:text-white hover:scale-125'>
                    <EmailIcon fontSize='large'></EmailIcon>
                </a>
                <a href="https://wa.me/919035419350" className='transition transform text-gray-300 hover:text-white hover:scale-125'>
                    <WhatsAppIcon fontSize='large'></WhatsAppIcon>
                </a>
            </div>
        </div>
        <Link to='/privacy'>
            <p className='mobile:text-3 laptop:text-4 text-center bg-[#440859] text-gray-300 p-2 border-t-0.5 border-gray-700'>
                &copy; {year} Namochetana India Pvt. Ltd. All rights reserved.
            </p>
        </Link>
    </div>
  )
}

export default Footer
