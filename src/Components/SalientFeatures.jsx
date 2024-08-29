import React from 'react'
import PlotDetails from '../../plotDetails.json'

const SalientFeatures = () => {
  return (
    <div className='sticky top-0 py-3 rounded-6'>
        <h1 className='text-7 font-medium mobile:text-center laptop:text-left my-5'>Salient Features</h1>
        <div className='grid laptop:grid-cols-2 mobile:grid-cols-3 laptop:gap-6 mobile:gap-3'>
        {PlotDetails.salientFeatures.map(salientFeature => 
            <div className='flex flex-col items-center'>
                <img className='rounded-4 laptop:h-9 laptop:w-9 mobile:h-8 mobile:w-8' key={salientFeature.id} src={salientFeature.img} alt="" />
                <p className='laptop:text-4 tablet:text-4 mobile:text-3 mobile:leading-5 laptop:leading-7 p-2 text-center'>{salientFeature.title}</p>
            </div>
        )}
        </div>
    </div>
  )
}

export default SalientFeatures
