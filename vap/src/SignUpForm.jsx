import React, { useState, useEffect } from 'react';
import './css/register.css';
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import {useNavigate, navigate } from "react-router-dom";


function SignUpForm(props) {
  const location = useLocation(); // Get the location object from React Router
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [RegistrationSatus, setRegistrationStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (password !== ConfirmPassword) {
      console.log('Passwords do not match.');
      return;
    }
  };

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      name: name,
      email: email,
      password: password,
    }).then((response) => {
      // setRegisterStatus(response);
      if(response.data.message){
        setRegistrationStatus(response.data.message);
      }else{
        setRegistrationStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }

  const LoginForm = () => {
    // Programmatically navigate to a specific route
    navigate('/LoginForm');
  };

  return (
    
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="underline-input"
          onChange={(e) => {setName(e.target.value)}}
          required
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="underline-input"
          onChange={(e) => {setEmail(e.target.value)}}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="underline-input"
          onChange={(e) => {setPassword(e.target.value)}}
          required
        />
      </div>
      <div>
        <label>Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          className="underline-input2"
          onChange={(e) => {setConfirmPassword(e.target.value)}}
          required
        />
      </div>
      <div>
      <div className="buttonkab" onClick={register}>
        <div className="text321">
        <p>Sign up</p>
        </div>
        </div>



              <div className="log-link">
              <h5>Already have an account?</h5>
              <a onClick={LoginForm}>Login</a>
              </div>
        
      </div>
    </form>
    </div>
  );
}

export default SignUpForm;
