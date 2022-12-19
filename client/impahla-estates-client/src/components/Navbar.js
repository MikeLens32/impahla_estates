import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/user';
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaBars
} from 'react-icons/fa';

const NavBar = () => {

    const { user } = useContext(UserContext)
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            { user ? (<div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
                <ul className='hidden sm:flex px-4'>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/listings">Listings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/networking">Networking</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className='flex justify-between'>
                <FaFacebookF className='mx-4'/>
                <FaTwitter className='mx-4'/>
                <FaGooglePlusG className='mx-4'/>
                <FaInstagram className='mx-4'/>
                </div>
                <div onClick={handleNav} className='sm:hidden z-10'>
                    <FaBars size={20} className='mr-4 cursor-pointer'/>
                </div>
                <div 
                onClick={handleNav}
                className={nav 
                    ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute z-10 text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 px-7 flex flex-col' 
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                    <ul className='h-full w-full text-center pt-12'>
                        <li className='text-2xl py-8'>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li className='text-2xl py-8'>
                            <NavLink to="/events">Events</NavLink>
                        </li>
                        <li className='text-2xl py-8'>
                            <NavLink to="/listings">Listings</NavLink>
                        </li>
                        <li className='text-2xl py-8'>
                            <NavLink to="/networking">Networking</NavLink>
                        </li>
                        <li className='text-2xl py-8'>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>) : null}
        </div>
        
    )
}

export default NavBar
