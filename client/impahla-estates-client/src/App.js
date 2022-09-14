import React, { useEffect, useContext } from 'react';
// import './App.css';
import { useNavigate } from 'react-router';
import { UserContext } from './context/user';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Events from './components/Events';
import Listings from './components/Listings';
import Networking from './components/Networking';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  

  const { getCurrentUser, user } = useContext(UserContext)
  const history = useNavigate()

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  useEffect(() => {
    if(!user){
      return history('/')
    }
  }, [user, history])

  return (
    <div>
        <NavBar />
        <Routes>
          < Route  path="/" element={<Login/>}/>
          < Route  path="/home" element={<Home/>}/>
          < Route  path="/networking" element={<Networking/>}/>
          < Route  path="/events" element={<Events/>}/>
          < Route  path="/listings" element={<Listings/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
