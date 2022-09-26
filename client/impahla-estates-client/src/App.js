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
import EditEvent from './components/EditEvent';

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
          < Route  exact path="/" element={<Login/>}/>
          < Route  exact path="/home" element={<Home/>}/>
          < Route  exact path="/networking" element={<Networking/>}/>
          < Route  exact path="/events" element={<Events/>}/>
          < Route  exact path="/events/:id/edit" element={<EditEvent/>}/>
          < Route  exact path="/listings" element={<Listings/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
