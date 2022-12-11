import React from 'react';
// import './Css/Banner.css'
import homeBanner from '../assets/pexels-deva-darshan-1637080.jpg'

const Banner = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img className='w-full h-full object-cover' src={homeBanner} alt='Home Banner'/>
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                    <h2 className='text-4xl py-4 italic'>With Impahla Estates</h2>
                    <p>A bunch of stuff that im going to type here for a place holder, that ultimately means absolutely nothing at all. Have a wonderful day!</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
