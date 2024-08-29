import React from 'react'
import AboutImg from '/hero6.avif'
import AboutImg2 from '/hero5.avif'

const About = () => {
  return (
    <div className='flex flex-col laptop:gap-10 mobile:gap-8 laptop:pt-10 mobile:pt-9 laptop:px-10 mobile:px-5'>
        <div className='bg-[url("/seamless.png")] flex flex-col laptop:items-center gap-4'>
            <h1 className='laptop:text-9 mobile:text-8 font-bold text-[#440859] '>About Us</h1>
            <p className='laptop:px-10 laptop:text-center mobile:text-left laptop:text-6 mobile:text-6 tablet:text-5 leading-9'>Hey! We are NMC Shelters, your trusted partner in real estate. Located in the vibrant city of Bengaluru, we specialize in offering a comprehensive range of property services tailored to meet the needs of our esteemed clients.</p>
        </div>
        <div className='flex laptop:flex-row tablet:flex-row mobile:flex-col-reverse flex-1 laptop:gap-8 mobile:gap-6'>
            <div className='flex flex-col laptop:gap-6 mobile:gap-3'>
                <h2 className='text-8 font-medium text-[#440859]'>At NMC Shelters,</h2>
                <p className='laptop:text-6 mobile:text-6 tablet:text-5 leading-9'> we pride ourselves on delivering excellence in every aspect of real estate. Whether you're looking to buy, sell, or market a property, our team of experts is dedicated to providing personalized solutions that align with your goals.</p>
                <p className='laptop:text-6 mobile:text-6 tablet:text-5 leading-9'>
                We also excel in property development and construction, crafting luxurious spaces that epitomize sophistication and comfort.</p>
            </div>
            <img className='laptop:h-14 tablet:h-13 rounded-6' src={AboutImg} alt="" />
        </div>
        <div className='flex laptop:flex-row tablet:flex-row mobile:flex-col flex-1 laptop:gap-8 mobile:gap-6'>
            <img className='laptop:h-14 tablet:h-13 rounded-6' src={AboutImg2} alt="" />
            <div className='flex flex-col laptop:gap-6 mobile:gap-3'>
                <h2 className='text-8 font-medium text-[#440859]'>Beyond sales and development,</h2>
                <p className='laptop:text-6 mobile:text-6 tablet:text-5 leading-9'> we offer property management services designed to maintain the value and appeal of your investment. From renting or leasing to comprehensive management, we ensure your property remains a prized asset.</p>
                <p className='laptop:text-6 mobile:text-6 tablet:text-5 leading-9'>Our commitment to quality, transparency, and client satisfaction sets us apart in the competitive real estate market.</p>
            </div>
        </div>
        <div className='bg-[url("/seamless.png")] flex flex-col items-center gap-4 laptop:pb-10 mobile:pb-8'>
        <p className='laptop:px-10 laptop:text-center mobile:text-left laptop:text-6 mobile:text-6 tablet:text-5 leading-9'>At NMC Shelters, we don't just build properties; we build lasting relationships based on trust and excellence. Join us at NMC Shelters, where luxury living meets impeccable service.</p>
        </div>
    </div>
  )
}

export default About
