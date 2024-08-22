import React from 'react'
import { Link } from 'react-router-dom'
import Plot1 from '/hero3.avif'
import Plot1a from '/plot5.jpg'
import Plot2 from '/card2.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

import ApartmentIcon from '@mui/icons-material/Apartment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import Plots from '../../plotDetails.json';

import TempleBuddhistOutlinedIcon from '@mui/icons-material/TempleBuddhistOutlined';
import TempleHinduOutlinedIcon from '@mui/icons-material/TempleHinduOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import TrainIcon from '@mui/icons-material/Train';

import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import ParkIcon from '@mui/icons-material/Park';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const PlotDetails = () => {
  return (
    <div className='bg-[url("/seamless.png")] p-10'>
        {/* <div className='flex p-7 gap-7 items-center rounded-8 border-0.5 border-white backdrop-blur-3xl bg-gray-50 shadow-xl'> */}
        <div className='flex p-7 gap-7 items-center rounded-8 border-0.5 border-white backdrop-blur-3xl'>
            <div className='flex flex-col flex-1'>
                {/* <img className='-mb-36 ml-28 z-50 h-30 w-auto border-l-4 border-b-4 border-gray-50 rounded-tl-7 rounded-bl-7 rounded-tr-7 hover:scale-105 shadow-xl' src={Plot1a} alt="" /> */}
                <img className='-mb-8 ml-11 mr-7 z-50 h-30 w-auto border-gray-100 border-1 rounded-7 hover:scale-105 shadow-2xl' src={Plot1a} alt="" />
                <img className='rounded-7 shadow-xl border-1' src={Plot1} alt="" />
                <img className='-mt-12 mr-13 -ml-8 z-50 h-30 w-auto border-gray-100 border-1 rounded-7 hover:scale-105 shadow-2xl' src={Plot2} alt="" />
            </div>
            <div className='flex flex-col justify-center gap-7 flex-1'>
                <div className=''>
                    <h1 className='text-8'>Hanging Gardens</h1>
                    <p className='text-5 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor veritatis maiores quibusdam, explicabo molestiae dicta quam.</p>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-red-500'>
                            <LocationOnOutlinedIcon fontSize='large'></LocationOnOutlinedIcon>
                        </h1>
                        <div>
                            <h2 className='text-5'>Nagawara</h2>
                            <p className='text-4 text-gray-500'>Lorem ipsum dolor, sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-red-500'>
                            <ApartmentIcon fontSize='large'></ApartmentIcon>
                        </h1>
                        <div>
                            <h2 className='text-5'>50 - 60 Flats</h2>
                            <p className='text-4 text-gray-500'>Lorem ipsum dolor, sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-red-500'>
                            <CurrencyRupeeIcon fontSize='large'></CurrencyRupeeIcon>
                        </h1>
                        <div>
                            <h2 className='text-5'>3.25Cr Onwards</h2>
                            <p className='text-4 text-gray-500'>Lorem ipsum dolor, sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-red-500'>
                            <LocalAirportOutlinedIcon fontSize='large'></LocalAirportOutlinedIcon>
                        </h1>
                        <div>
                            <h2 className='text-5'>Kempegowda international</h2>
                            <p className='text-4 text-gray-500'>Lorem ipsum dolor, sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <Link to='/submit'>
                        <button className='bg-red-500 py-4 px-6 text-6 text-white rounded-5 hover:scale-105 shadow-lg border-0.5 border-red-300'>Shoot an Email</button>
                    </Link>
                    <Link to='/submit'>
                        <button className='flex items-center gap-2 bg-gray-100 py-4 px-6 text-6 text-black rounded-5 border-0.5 border-white hover:scale-105 shadow-lg'> <CallRoundedIcon> </CallRoundedIcon> Book a Call</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-8 mt-9'>
            <h1 className='text-9'>Club House Highlights</h1>
            <div className='grid grid-cols-5 gap-6'>
            {Plots.facility.map(facility =>
                <div className='flex flex-col items-center'>
                    <img className='shadow-lg border-0.5 border-white rounded-5' src={facility.img} alt="" />
                    <p className='-mt-7 text-white text-6 px-4 rounded-2 backdrop-blur bg-red-100/30'>{facility.title}</p>
                </div>
            )}
            </div>
        </div>
        <div className='flex justify-between px-11 mt-6'>
            <div className='flex flex-col gap-6 mt-9'>
                <h1 className='text-8'>Project Highlights</h1>
                <div className='flex items-center gap-4'>
                    <TempleBuddhistOutlinedIcon fontSize='large'></TempleBuddhistOutlinedIcon>
                    <div>
                        <p className='text-6'>Ghati Subramanya temple</p>
                        <p className='text-4 text-gray-500'>25min drive</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <TempleHinduOutlinedIcon fontSize='large'></TempleHinduOutlinedIcon>
                    <div>
                        <p className='text-6'>Chikka madhure temple</p>
                        <p className='text-4 text-gray-500'>5kms</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <SchoolOutlinedIcon fontSize='large'></SchoolOutlinedIcon>
                    <div>
                        <p className='text-6'>Rai Tech University</p>
                        <p className='text-4 text-gray-500'>400 m</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <LandscapeOutlinedIcon fontSize='large'></LandscapeOutlinedIcon>
                    <div>
                        <p className='text-6'>Nandi Hills</p>
                        <p className='text-4 text-gray-500'>25min drive</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <LocationCityOutlinedIcon fontSize='large'></LocationCityOutlinedIcon>
                    <div>
                        <p className='text-6'>Bangalore City</p>
                        <p className='text-4 text-gray-500'>35 kms</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <LocalHospitalOutlinedIcon fontSize='large'></LocalHospitalOutlinedIcon>
                    <div>
                        <p className='text-6'>Hospital</p>
                        <p className='text-4 text-gray-500'>2 kms</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <TrainIcon fontSize='large'></TrainIcon>
                    <div>
                        <p className='text-6'>Railway Station</p>
                        <p className='text-4 text-gray-500'>3 kms</p>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col gap-6 mt-9'>
                <h1 className='text-8'>Layout Amenities</h1>
                <div className='flex items-center gap-3'>
                    <SecurityOutlinedIcon fontSize='large'></SecurityOutlinedIcon>
                    <div>
                        <p className='text-6'>24/7 Security</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <WaterDropIcon fontSize='large'></WaterDropIcon>
                    <div>
                        <p className='text-6'>Water & Sewage line</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <DeleteIcon fontSize='large'></DeleteIcon>
                    <div>
                        <p className='text-6'>Stone Drainage</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <PropaneTankIcon fontSize='large'></PropaneTankIcon>
                    <div>
                        <p className='text-6'>Overhead Tank</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <LightModeOutlinedIcon fontSize='large'></LightModeOutlinedIcon>
                    <div>
                        <p className='text-6'>Street Lights</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <AddRoadOutlinedIcon fontSize='large'></AddRoadOutlinedIcon>
                    <div>
                        <p className='text-6'>60, 40 & 30ft Roads</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <ParkIcon fontSize='large'></ParkIcon>
                    <div>
                        <p className='text-6'>Park and Trees</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <SportsSoccerIcon fontSize='large'></SportsSoccerIcon>
                    <div>
                        <p className='text-6'>Children Play Area</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <MapsHomeWorkIcon fontSize='large'></MapsHomeWorkIcon>
                    <div>
                        <p className='text-6'>2 acre Club House</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <CleaningServicesIcon fontSize='large'></CleaningServicesIcon>
                    <div>
                        <p className='text-6'>Layout Maintenance</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-6 justify-center items-center pt-10'>
            <Link to='/submit'>
                <button className='bg-red-500 py-4 px-6 text-6 text-white rounded-5 hover:scale-105 shadow-lg border-0.5 border-red-300'>Shoot an Email</button>
            </Link>
            <Link to='/submit'>
                <button className='flex items-center gap-2 bg-gray-100 py-4 px-6 text-6 text-black rounded-5 border-0.5 border-white hover:scale-105 shadow-lg'> <CallRoundedIcon> </CallRoundedIcon> Book a Call</button>
            </Link>
        </div>
    </div>
  )
}

export default PlotDetails
