import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup.jsx';
import ForgotPassword from './components/Auth/ForgotPassword.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Trading from './pages/Trading';
import SolarPlants from './pages/SolarPlants';

const Routing = () => {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/solar-plants" element={<SolarPlants />} />
      </Routes>

  );
};

export default Routing;
