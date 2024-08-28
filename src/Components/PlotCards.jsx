import React from 'react'
import PlotCard from './PlotCard'
import plots from '../../plotDetails.json'
import SalientFeatures from './SalientFeatures'

const PlotCards = () => {

  return (
    <div className='bg-[url("/seamless.png")] flex flex-col items-center gap-8 laptop:p-10 mobile:p-4 mobile:pt-9 mobile:pb-8 bg-gray-50 shadow-md'>
        {/* <div className='flex flex-col text-center gap-4'>
            <h1 className='text-9'>Please Choose your Plot Below</h1>
            <p className='text-6 px-11 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At labore ipsam obcaecati ad consequuntur quis porro ex facere, nemo deserunt!</p>
        </div> */}
        {/* <div className='flex gap-6'>
          <a href=""><button className='bg-gray-100 py-4 px-6 text-6 rounded-5 hover:scale-105 shadow-lg hover:bg-red-500 hover:text-white'>Devanahalli</button></a>
          <a href=""><button className='bg-gray-100 py-4 px-6 text-6 rounded-5 hover:scale-105 shadow-lg hover:bg-red-500 hover:text-white'>Doddaballapur</button></a>
        </div> */}
        <div className='flex laptop:flex-row mobile:flex-col laptop:gap-10 mobile:gap-5'>
          <div className='flex flex-col laptop:gap-6 mobile:gap-4'>
            <div className='flex flex-col mobile:p-2'>
              <h1 className='text-[#440859] font-bold laptop:text-9 mobile:text-8 mobile:pr-8 mobile:leading-tight'>Please choose your plot below</h1>
              <p className='text-6 mobile:text-5 py-4 text-gray-500'>Here are our ongoing projects to invest for your better future. </p>
            </div>
              <PlotCard />
          </div>
          <div className=''>
              <SalientFeatures />
          </div>
        </div>
    </div>
  )
}

export default PlotCards
