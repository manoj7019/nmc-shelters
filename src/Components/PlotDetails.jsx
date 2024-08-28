import React from 'react'
import { Link } from 'react-router-dom'
import Plot1 from '/hero3.avif'
import Plot1a from '/plot5.jpg'
import Plot2 from '/card2.jpeg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import EmailIcon from '@mui/icons-material/Email';

import WorkIcon from '@mui/icons-material/Work';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LandscapeIcon from '@mui/icons-material/Landscape';

import ApartmentIcon from '@mui/icons-material/Apartment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import Plots from '../../plotDetails.json';

import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import TempleBuddhistOutlinedIcon from '@mui/icons-material/TempleBuddhistOutlined';
import TempleHinduOutlinedIcon from '@mui/icons-material/TempleHinduOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import TrainIcon from '@mui/icons-material/Train';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import GrassIcon from '@mui/icons-material/Grass';
import DeckIcon from '@mui/icons-material/Deck';
import DeleteIcon from '@mui/icons-material/Delete';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AddRoadOutlinedIcon from '@mui/icons-material/AddRoadOutlined';
import ParkIcon from '@mui/icons-material/Park';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

import { useState, useEffect } from 'react'
// import Plots from '../../plotDetails.json'

const PlotDetails = () => {

    const linkClass = ({isActive}) => isActive ? 'flex bg-red-500' : 'flex'

    const [showMoreWork, setShowMoreWork] = useState(false)
    function handleSetShowMoreWork() {
        setShowMoreWork(!showMoreWork);
    }

    const [showMoreConnectivity, setShowMoreConnectivity] = useState(false)
    function handleSetShowMoreConnectivity() {
        setShowMoreConnectivity(!showMoreConnectivity);
    }

    const [showMoreEducation, setShowMoreEducation] = useState(false)
    function handleSetShowMoreEducation() {
        setShowMoreEducation(!showMoreEducation);
    }

    const [showMoreHealth, setShowMoreHealth] = useState(false)
    function handleSetShowMoreHealth() {
        setShowMoreHealth(!showMoreHealth);
    }

    const [showMoreEnt, setShowMoreEnt] = useState(false)
    function handleSetShowMoreEnt() {
        setShowMoreEnt(!showMoreEnt);
    }

  return (
    <div className='bg-[url("/seamless.png")] laptop:p-10 mobile:p-4 mobile:py-9'>
        {/* <div className='flex p-7 gap-7 items-center rounded-8 border-0.5 border-white backdrop-blur-3xl bg-gray-50 shadow-xl'> */}
        <div className='flex laptop:flex-row mobile:flex-col laptop:p-7 mobile:p-4 laptop:gap-7 mobile:gap-6 items-center rounded-8 border-0.5 border-white backdrop-blur-3xl'>
            <div className='flex flex-col flex-1'>
                {/* <img className='-mb-36 ml-28 z-50 h-30 w-auto border-l-4 border-b-4 border-gray-50 rounded-tl-7 rounded-bl-7 rounded-tr-7 hover:scale-105 shadow-xl' src={Plot1a} alt="" /> */}
                {/* <LazyLoadImage className='mobile:hidden laptop:h-10 laptop:w-12 transition transform -mb-8 ml-11 mr-7 z-50 border-gray-100 border-1 rounded-7 hover:scale-105 shadow-2xl' src={Plot1a} alt="" /> */}
                <LazyLoadImage className='laptop:h-15 mobile:h-13 w-14 rounded-7 shadow-xl border-1' src={Plot1} alt="" />
                {/* <LazyLoadImage className='mobile:hidden laptop:h-11 laptop:w-11 transition transform -mt-12 mr-13 -ml-9 z-50 border-gray-100 border-1 rounded-7 hover:scale-105 shadow-2xl' src={Plot2} alt="" /> */}
            </div>
            <div className='flex flex-col justify-center laptop:gap-7 mobile:gap-6 flex-1'>
                <div className=''>
                    <h1 className='text-8'>NM Enclave</h1>
                    <p className='text-5 text-gray-500'>Premium villa plots in the midst nature where luxury meets convenience and connectivity meets solitude.</p>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-orange-500'>
                            <LocationOnOutlinedIcon fontSize='large'></LocationOnOutlinedIcon>
                        </h1>
                        <div>
                            <h2 className='text-5'>Devanahalli, Bengaluru</h2>
                            <p className='text-4 text-gray-500'>Very rapidly developing place.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-orange-500'>
                            <ApartmentIcon fontSize='large'></ApartmentIcon>
                        </h1>
                        <div>
                            <h2 className='text-5'>50 - 60 <br />Flats</h2>
                            <p className='text-4 text-gray-500'>Limited and selling fast.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-orange-500'>
                            <CurrencyRupeeIcon fontSize='large'></CurrencyRupeeIcon>
                        </h1>
                        <div>
                            <h2 className='text-5'>3.25Cr <br />Onwards</h2>
                            <p className='text-4 text-gray-500'>Value for the price.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-orange-500'>
                            <LocalAirportOutlinedIcon fontSize='large'></LocalAirportOutlinedIcon>
                        </h1>
                        <div>
                            <h2 className='text-5'>Kempegowda international</h2>
                            <p className='text-4 text-gray-500'>Just 10km away.</p>
                        </div>
                    </div>
                </div>
                <div className='flex laptop:flex-row mobile:flex-col laptop:gap-6 mobile:gap-4'>
                    <Link to='/submit'>
                        <button className='transition transform flex items-center gap-2 bg-orange-500 py-4 px-6 text-6 text-white rounded-5 hover:scale-105 shadow-lg border-0.5 border-red-300'><EmailIcon></EmailIcon>Shoot an Email</button>
                    </Link>
                    <Link to='/submit'>
                        <button className='transition transform flex items-center gap-2 bg-gray-100 py-4 px-6 text-6 text-black rounded-5 border-0.5 border-white hover:scale-105 shadow-lg'> <CallRoundedIcon> </CallRoundedIcon> Book a Call</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center laptop:gap-7 mobile:gap-5 laptop:mt-9 mobile:mt-6 mobile:p-4'>
            <h1 className='laptop:text-9 mobile:text-7 mobile:font-medium mobile:text-left'>Club House Highlights</h1>
            <div className='grid laptop:grid-cols-5 mobile:grid-cols-2 laptop:gap-6 mobile:gap-5'>
            {Plots.facility.map(facility =>
                <div className='flex flex-col items-center transition transform hover:scale-110 mobile:py-2'>
                    <img className='shadow-lg border-0.5 border-white rounded-5' src={facility.img} alt="" />
                    <p className='-mt-7 text-white laptop:text-6 mobile:text-4 px-4 rounded-2 backdrop-blur bg-red-100/30'>{facility.title}</p>
                </div>
            )}
            </div>
        </div>
        <div className='flex laptop:flex-row mobile:flex-col justify-between laptop:px-10 mobile:px-4 mt-6'>
            <div className='flex flex-col gap-6 laptop:mt-9 mobile:mt-6'>
                <h1 className='text-8'>Project Highlights</h1>
                <div>
                    <div className='flex flex-col gap-4 laptop:w-14 mobile:w-full'>
                        <div onClick={handleSetShowMoreWork}
                            className='bg-gray-100 transition transform backdrop-blur flex justify-between items-center py-4 laptop:px-6 mobile:px-4 laptop:text-6 mobile:text-5 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                            <button className='flex items-center gap-3'>
                            <WorkIcon fontSize='large' /> Work Locations </button>
                            <KeyboardArrowDownIcon />
                        </div>
                        {showMoreWork && 
                        <>
                            {Plots.nmenclaveWork.map(work =>
                                <div className='px-5 flex items-baseline justify-between gap-6'>
                                    <p className='laptop:text-6 mobile:text-5'>{work.title}</p>
                                    <p className='laptop:text-4 mobile:text-3 text-gray-500'>{work.time}</p>
                                </div>
                            )}
                        </>
                        }
                    </div>
                </div>

                <div>
                    <div className='flex flex-col gap-4 laptop:w-14 mobile:w-full'>
                    <div onClick={handleSetShowMoreConnectivity}
                         className='bg-gray-100 transition transform backdrop-blur flex justify-between items-center py-4 laptop:px-6 mobile:px-4 laptop:text-6 mobile:text-5 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                            <button className='flex items-center gap-3'>
                            <AirlineStopsIcon fontSize='large' /> Easy Connectivity </button>
                            <KeyboardArrowDownIcon />
                        </div>
                        {showMoreConnectivity && 
                        <>
                            {Plots.nmenclaveConnectivity.map(work =>
                                <div className='px-5 flex items-baseline justify-between gap-6'>
                                    <p className='laptop:text-6 mobile:text-5'>{work.title}</p>
                                    <p className='laptop:text-4 mobile:text-3 text-gray-500'>{work.time}</p>
                                </div>
                            )}
                        </>
                        }
                    </div>
                </div>

                <div>
                    <div className='flex flex-col gap-4 laptop:w-14 mobile:w-full'>
                        <div onClick={handleSetShowMoreEducation}
                         className='bg-gray-100 transition transform backdrop-blur flex justify-between items-center py-4 laptop:px-6 mobile:px-4 laptop:text-6 mobile:text-5 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                            <button className='flex items-center gap-3'>
                            <SchoolIcon fontSize='large' /> Educational Institutions </button>
                            <KeyboardArrowDownIcon />
                        </div>
                        {showMoreEducation && 
                        <>
                            {Plots.nmenclaveEducation.map(work =>
                                <div className='px-5 flex items-baseline justify-between gap-6'>
                                    <p className='laptop:text-6 mobile:text-5'>{work.title}</p>
                                    <p className='laptop:text-4 mobile:text-3 text-gray-500'>{work.time}</p>
                                </div>
                            )}
                        </>
                        }
                    </div>
                </div>

                <div>
                    <div className='flex flex-col gap-4 laptop:w-14 mobile:w-full'>
                        <div onClick={handleSetShowMoreHealth}
                         className='bg-gray-100 transition transform backdrop-blur flex justify-between items-center py-4 laptop:px-6 mobile:px-4 laptop:text-6 mobile:text-5 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                            <button className='flex items-center gap-3'>
                            <HealthAndSafetyIcon fontSize='large' /> Health Care </button>
                            <KeyboardArrowDownIcon />
                        </div>
                        {showMoreHealth && 
                        <>
                            {Plots.nmenclaveHealth.map(work =>
                                <div className='px-5 flex items-baseline justify-between gap-6'>
                                    <p className='laptop:text-6 mobile:text-5'>{work.title}</p>
                                    <p className='laptop:text-4 mobile:text-3 text-gray-500'>{work.time}</p>
                                </div>
                            )}
                        </>
                        }
                    </div>
                </div>

                <div>
                    <div className='flex flex-col gap-4 laptop:w-14 mobile:w-full'>
                        <div onClick={handleSetShowMoreEnt}
                         className='bg-gray-100 transition transform backdrop-blur flex justify-between items-center py-4 laptop:px-6 mobile:px-4 laptop:text-6 mobile:text-5 rounded-5 border-0.5 border-gray-200 hover:scale-110 hover:bg-orange-500 hover:text-white'>
                            <button className='flex items-center gap-3'>
                            <LandscapeIcon fontSize='large' /> Entertainment</button>
                            <KeyboardArrowDownIcon />
                        </div>
                        {showMoreEnt && 
                        <>
                            {Plots.nmenclaveEnt.map(work =>
                                <div className='px-5 flex items-baseline justify-between gap-6'>
                                    <p className='laptop:text-6 mobile:text-5'>{work.title}</p>
                                    <p className='laptop:text-4 mobile:text-3 text-gray-500'>{work.time}</p>
                                </div>
                            )}
                        </>
                        }
                    </div>
                </div>

                {/* <div className='flex items-center gap-4'>
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
                </div> */}
            </div>
            
            <div className='flex flex-col gap-6 laptop:mt-9 mobile:mt-7'>
                <h1 className='text-8'>Project Amenities</h1>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-3'>
                        <CenterFocusStrongIcon fontSize='medium'></CenterFocusStrongIcon>
                        <div>
                            <p className='text-6'>24/7 CCTV</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FitnessCenterIcon fontSize='medium'></FitnessCenterIcon>
                        <div>
                            <p className='text-6'>Outdoor Gym</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <AddRoadOutlinedIcon fontSize='medium'></AddRoadOutlinedIcon>
                        <div>
                            <p className='text-6'>Jogging and Cycling Track</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <SelfImprovementIcon fontSize='medium'></SelfImprovementIcon>
                        <div>
                            <p className='text-6'>Yoga Deck</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <GrassIcon fontSize='medium'></GrassIcon>
                        <div>
                            <p className='text-6'>Open Lawn Area</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <DeckIcon fontSize='medium'></DeckIcon>
                        <div>
                            <p className='text-6'>Mini Garden with Sit out</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <ParkIcon fontSize='medium'></ParkIcon>
                        <div>
                            <p className='text-6'>Swing Park</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <WaterDropIcon fontSize='medium'></WaterDropIcon>
                        <div>
                            <p className='text-6'>Underground Reacharging</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <SportsHandballIcon fontSize='medium'></SportsHandballIcon>
                        <div>
                            <p className='text-6'>Children Play Area</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <ElderlyWomanIcon fontSize='medium'></ElderlyWomanIcon>
                        <div>
                            <p className='text-6'>Senior Citizen Heaven</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex laptop:flex-row mobile:flex-col laptop:gap-6 mobile:gap-4 justify-center mobile:pl-4 laptop:pt-9 mobile:pt-7'>
            <Link to='/submit'>
                <button className='transition transform flex items-center gap-2 bg-orange-500 py-4 px-6 text-6 text-white rounded-5 hover:scale-105 shadow-lg border-0.5 border-red-300'><EmailIcon></EmailIcon>Shoot an Email</button>
            </Link>
            <Link to='/submit'>
                <button className='transition transform flex items-center gap-2 bg-gray-100 py-4 px-6 text-6 text-black rounded-5 border-0.5 border-white hover:scale-105 shadow-lg'> <CallRoundedIcon> </CallRoundedIcon> Book a Call</button>
            </Link>
        </div>
    </div>
  )
}

export default PlotDetails
