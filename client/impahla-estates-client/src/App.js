import React from 'react';
// import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Events from './components/Events';
import Listings from './components/Listings';
import Networking from './components/Networking';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  

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
