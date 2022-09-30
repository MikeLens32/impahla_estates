import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import './Css/NavBar.css'
import Home from './Home'
import Events from './Events'
import Listings from './Listings'
import Networking from './Networking'

const NavBar = () => {

    const { user, signout } = useContext(UserContext)

    return (
        <div>
            <Navbar className='navbar' variant="dark" expand="lg">
                <Container>
                <Navbar.Brand >{!user ? <div className='navbar-logo'>Impahla Estates</div> : <div className='navbar-user' onClick={signout}>{user.username}</div>}</Navbar.Brand>
                {!user ? '' : (<Nav className="navbar-links">
                    <Nav.Link className="navbar-links-home" as={Link} element={<Home />} to={"/home"}><p>Home</p></Nav.Link>
                    <Nav.Link className="navbar-links-events" as={Link} element={<Events />} to={"/events"}><p>Events</p></Nav.Link>
                    <Nav.Link className="navbar-links-listings" as={Link} element={<Listings />} to={"/listings"}><p>Listings</p></Nav.Link>
                    <Nav.Link className="navbar-links-networking" as={Link} element={<Networking />} to={"/networking"}><p>Networking</p></Nav.Link>
                </Nav>)}
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
