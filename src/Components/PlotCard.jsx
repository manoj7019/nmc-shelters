import React from 'react'
import PlotImg from '/plot4.jpg'
import Plots from '../../plotDetails.json'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Link } from 'react-router-dom';

const PlotCard = () => {
  return (
      <div className='grid grid-cols-4 gap-5'>
      {Plots.plots.map(plot =>
      <Link to='/plotInfo'>
      <div className='flex flex-col p-4 rounded-6 border-0.5 border-white bg-white shadow-xl gap-4 hover:scale-105'>
        <>
            <img className='rounded-5' key={plot.id} src={plot.img} alt="" />
            <div className='flex flex-col gap-2'>
                <h3 className='text-6 font-bold'>{plot.title}</h3>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1'>
                        <LocationOnOutlinedIcon fontSize='small'></LocationOnOutlinedIcon>
                        <p>{plot.location}</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center gap-1'>
                            <LocalHospitalOutlinedIcon fontSize='small'></LocalHospitalOutlinedIcon>
                            <p>{plot.hospital}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <LocalAirportOutlinedIcon fontSize='small'></LocalAirportOutlinedIcon>
                            <p>{plot.airport}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <SchoolOutlinedIcon fontSize='small'></SchoolOutlinedIcon>
                        <p>{plot.school}</p>
                    </div>
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
