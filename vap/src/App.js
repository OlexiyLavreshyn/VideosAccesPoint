import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import React from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import EmailVerification from './EmailVerification';
import NavBar from './NavBar';
import Profile from './Profile';
import PassChange from './PassChange';
import MainPage from './MainPage';
import NewVideo from './NewVideo';

function App() {

  return (
    <div className="App">
      <NavBar ></NavBar>
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/SignUpForm" element={<SignUpForm />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/EmailVerification" element={<EmailVerification />} />
      <Route path="/NavBar" element={<NavBar />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/PassChange" element={<PassChange />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/NewVideo" element={<NewVideo />} />


      </Routes>




    </div>
  );
}

export default App;
