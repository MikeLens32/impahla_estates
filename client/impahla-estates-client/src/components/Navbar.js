import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Home from './Home'
import Events from './Events'
import Listings from './Listings'
import Networking from './Networking'

const NavBar = () => {

    const { user } = useContext(UserContext)

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand >{!user ? <div>IE</div> : <div>{user.username}</div>}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} element={<Home />} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} element={<Events />} to={"/events"}>Events</Nav.Link>
                    <Nav.Link as={Link} element={<Listings />} to={"/listings"}>Listings</Nav.Link>
                    <Nav.Link as={Link} element={<Networking />} to={"/networking"}>Networking</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
