import './css/NavBar.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import logo from '../src/assets2/logo.png';

function NavBar() {

  const navigate = useNavigate();

  const login = () => {
    // Programmatically navigate to a specific route
    navigate('/LoginForm');
  };

  const profile = () => {
    // Programmatically navigate to a specific route
    navigate('/profile');
  };

  const MainPage = () => {
    navigate('/MainPage');
  };
  return (
    <nav>
      

      <div>

      </div>
      <div className="logotext">
        <div className="VAP">
          <p onClick={MainPage}>VAP</p>
        </div>

      </div>

<div className="buttons">
      <div className="kab1">
        <div className="buttonkab1">
        <p onClick={profile}>Profile</p>
        </div>


      </div>

      <div className="buttonkab5">
        <div className="text3215">
        <p onClick={login}>Log in</p>
        </div>
        </div>
      </div>


    </nav>
  );
}

export default NavBar;