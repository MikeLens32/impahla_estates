import React from 'react';
// import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Events from './components/Events';
import Listings from './components/Listings';
import Networking from './components/Networking';

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
          {/* <Route exact path="/Home">
          <Home />
          </Route>
          <Route exact path="/Networking">
          <Networking />
          </Route>
          <Route exact path="/Events">
          <Events />
          </Route>
          <Route exact path="/Listings">
          <Listings />
          </Route> */}
        </Routes>
      
    </div>
  );
}

export default App;
