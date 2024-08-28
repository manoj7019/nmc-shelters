import React from 'react'
import HeroImg from '/hero1.svg'
import PinImg from '/pin.png'
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Herogif1 from '/herogif1.gif'
import Herogif2 from '/herogif2.gif'
import Herogif3 from '/herogif3.gif'

const Hero = () => {
  return (
    <div className='bg-[url("/seamless.png")] flex flex-col justify-between items-center laptop:px-10 mobile:px-5 laptop:mb-11 mobile:mb-8'>
        <div className='flex flex-col laptop:mt-6 gap-7'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-[#440859] laptop:text-11 mobile:text-8 font-bold leading-tight text-left'>Own a plot at a <span className='text-orange-500'>premium location </span>now!</h1>
                {/* <p className='text-7 leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa eligendi doloribus corporis vero dignissimos iusto laboriosam assumenda et sunt?</p> */}
            </div>
        </div>

        {/* <div className='mobile:hidden laptop:flex gap-11'>
        <LazyLoadImage src={Herogif1} className='w-9 h-9'/>
        <LazyLoadImage src={Herogif2} className='w-9 h-9'/>
        <LazyLoadImage src={Herogif3} className='w-9 h-9'/>
        </div> */}

        <div className='laptop:-mt-11 mobile:-mt-9 pt-8'>
            <LazyLoadImage src={HeroImg} alt="" className='mobile:w-14 mobile:h-12 laptop:w-20 laptop:h-16' />
        </div>

        {/* <LazyLoadImage src={PinImg} alt="" className='laptop:h-13 mobile:h-10 laptop:-mt-14 mobile:-mt-11' /> */}

        <Link to='/choosePlot'>
            <div className='transition transform bg-orange-500 text-6 text-white hover:scale-125 hover:bg-white hover:text-orange-500 laptop:shadow-xl mobile:shadow-md hover:shadow-2xl laptop:-mt-4 py-3 px-8 rounded-4'>
                <button className='flex items-center gap-3'>Browse Plots <AdsClickOutlinedIcon></AdsClickOutlinedIcon></button>
            </div>
        </Link>
    </div>
    // <div className='mt-10'>
    //     <h1>Introducing...</h1>
    //     {/* <img src={HeroImg} alt="" /> */}
    // </div>
  )
}

export default Hero
