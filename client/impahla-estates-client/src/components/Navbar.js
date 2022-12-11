import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user';
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaBars
} from 'react-icons/fa'

const NavBar = () => {

    const { user, signout } = useContext(UserContext)
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
            <ul className='hidden sm:flex px-4'>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/events">Events</a>
                </li>
                <li>
                    <a href="/listings">Listings</a>
                </li>
                <li>
                    <a href="/networking">Networking</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
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
                        <a href="/home">Home</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="/events">Events</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="/listings">Listings</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="/networking">Networking</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            {/* <Navbar className='navbar' variant="dark" expand="lg">
                <Container>
                <Navbar.Brand >{!user ? <div className='navbar-logo'>Impahla Estates</div> : <div className='navbar-user' onClick={signout}>{user.username}</div>}</Navbar.Brand>
                {!user ? '' : (<Nav className="navbar-links">
                    <Nav.Link className="navbar-links-home" as={Link} element={<Home />} to={"/home"}><p>Home</p></Nav.Link>
                    <Nav.Link className="navbar-links-events" as={Link} element={<Events />} to={"/events"}><p>Events</p></Nav.Link>
                    <Nav.Link className="navbar-links-listings" as={Link} element={<Listings />} to={"/listings"}><p>Listings</p></Nav.Link>
                    <Nav.Link className="navbar-links-networking" as={Link} element={<Networking />} to={"/networking"}><p>Networking</p></Nav.Link>
                    <Nav.Link className="navbar-links-contact" as={Link} element={<Contact />} to={"/contact"}><p>Contact</p></Nav.Link>
                </Nav>)}
                </Container>
            </Navbar> */}
        </div>
    )
}

export default NavBar
