import React from 'react'
import PlotImg from '/plot4.jpg'
import Plots from '../../plotDetails.json'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PlotCard = () => {
  return (
      <div className='grid laptop:grid-cols-2 mobile:grid-cols-1 gap-7'>
      {Plots.plots.map(plot =>
      <Link to='/plotInfo'>
      <div className='transition transform flex flex-col p-4 rounded-6 border-0.5 border-white bg-white shadow-xl gap-4 hover:scale-105'>
        <>
            <LazyLoadImage className='rounded-5 w-13 h-12' key={plot.id} src={plot.img} alt="" />
            <div className='flex flex-col gap-3'>
                <h3 className='text-6 font-bold'>{plot.title}</h3>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
                        <LocationOnOutlinedIcon className='opacity-60' fontSize='small'></LocationOnOutlinedIcon>
                        <p>{plot.location}</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center gap-1'>
                            <LocalHospitalOutlinedIcon className='opacity-60' fontSize='small'></LocalHospitalOutlinedIcon>
                            <p>{plot.hospital}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <LocalAirportOutlinedIcon className='opacity-60' fontSize='small'></LocalAirportOutlinedIcon>
                            <p>{plot.airport}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <SchoolOutlinedIcon className='opacity-60' fontSize='small'></SchoolOutlinedIcon>
                        <p>{plot.school}</p>
                    </div>
                    <button className='flex justify-between items-center mt-3 bg-orange-500 py-3 px-6 text-6 text-white rounded-bl-5 rounded-br-5 hover:scale-105 shadow-lg border-0.5 border-red-300'>Full Details <ArrowForwardOutlinedIcon></ArrowForwardOutlinedIcon></button>
                </div>
            </div>
        </>
        </div>
        </Link>
    )}
        </div>
  )
}

export default PlotCard
