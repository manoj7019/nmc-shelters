import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from 'react-router-dom';
import HeroImg1 from '/hero1.avif'
import HeroImg2 from '/hero2.avif'
import HeroImg3 from '/hero3.avif'
import HeroImg4 from '/hero4.avif'
import HeroImg5 from '/hero5.avif'
import HeroImg6 from '/hero6.avif'
import HeroImg7 from '/hero7.avif'
import HeroImg8 from '/hero8.avif'
import HeroImg9 from '/hero9.jpg'
import HeroImg10 from '/hero10.avif'
import HeroImg11 from '/hero11.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Services = () => {
  return (
    <div className='bg-[url("/seamless.png")] flex items-center p-10 gap-9 shadow-xl pt-10'>
        <div className='flex flex-col gap-7 flex-1'>
            <div className=''>
                <h1 className='text-9'>What you looking for?</h1>
            </div>
            <div className='flex flex-col gap-4'>
                <Link to='/choosePlot'>
                    <div className='transition transform backdrop-blur flex justify-between items-center py-4 px-6 text-6 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                        <button>Property Marketing / Sales</button>
                        <ArrowForwardOutlinedIcon />
                    </div>
                </Link>
                <Link to='/choosePlot'>
                    <div className='transition transform backdrop-blur flex justify-between items-center py-4 px-6 text-6 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                        <button>Property Buying</button>
                        <ArrowForwardOutlinedIcon />
                    </div>
                </Link>
                <Link to='/choosePlot'>
                    <div className='transition transform backdrop-blur flex justify-between items-center py-4 px-6 text-6 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                        <button> Property Rent / Lease</button>
                        <ArrowForwardOutlinedIcon />
                    </div>
                </Link>
                <Link to='/choosePlot'>
                    <div className='transition transform backdrop-blur flex justify-between items-center py-4 px-6 text-6 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                        <button>Property Development / Construction</button>
                        <ArrowForwardOutlinedIcon />
                    </div>
                </Link>
                <Link to='/choosePlot'>
                    <div className='transition transform backdrop-blur flex justify-between items-center py-4 px-6 text-6 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                        <button>Property Management</button>
                        <ArrowForwardOutlinedIcon />
                    </div>
                </Link>
                <Link to='/choosePlot'>
                    <div className='transition transform backdrop-blur flex justify-between items-center py-4 px-6 text-6 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                        <button>Commercial Properties</button>
                        <ArrowForwardOutlinedIcon />
                    </div>
                </Link>
            </div>
        </div>
        <div className='flex items-center flex-1 gap-4 p-5'>
            <div className='flex flex-col gap-4'>
                <LazyLoadImage className='w-11 h-11 rounded-5 shadow-xl border-1 border-white' src={HeroImg10} alt="" />
                <LazyLoadImage className='w-11 h-11 rounded-5 shadow-xl border-1 border-white' src={HeroImg9} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <LazyLoadImage className='w-11 h-11 rounded-5 shadow-xl border-1 border-white' src={HeroImg4} alt="" />
                <LazyLoadImage className='w-11 h-11 rounded-5 shadow-xl border-1 border-white' src={HeroImg5} alt="" />
                <LazyLoadImage className='w-11 h-11 rounded-5 shadow-xl border-1 border-white' src={HeroImg6} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                <LazyLoadImage className='w-11 h-11 rounded-5 shadow-xl border-1 border-white' src={HeroImg11} alt="" />
                <LazyLoadImage className='w-11 h-11 rounded-5 shadow-xl border-1 border-white' src={HeroImg8} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Services
