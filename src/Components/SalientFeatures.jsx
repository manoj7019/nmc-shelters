import React from 'react'
import PlotDetails from '../../plotDetails.json'

const SalientFeatures = () => {
  return (
    <div className='sticky top-0 py-3 rounded-6'>
        <h1 className='text-7 font-medium mobile:text-center laptop:text-left my-5'>Salient Features</h1>
        <div className='grid laptop:grid-cols-2 mobile:grid-cols-3 laptop:gap-6 mobile:gap-5'>
        {PlotDetails.salientFeatures.map(salientFeature => 
            <div className='flex flex-col items-center'>
                <img className='rounded-4 h-9 w-9' key={salientFeature.id} src={salientFeature.img} alt="" />
                <p className='text-4 p-2 text-center'>{salientFeature.title}</p>
            </div>
        )}
        </div>
    </div>
  )
}

export default SalientFeatures
