import React from 'react'
import { useState, useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import ReactSwitch from 'react-switch';

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate()

  const { theme } = useContext(ThemeContext);
  const {toggleTheme} = useContext(ThemeContext);

  const handleLogin = () => {  
    auth.login(user)
    navigate("/Home")   
    
  }
  return (    
        <div className='login'>
          <label className='login-label'>Username {" "}</label>
          <input className='login-input' type="text" onChange={(e)=>setUser(localStorage.setItem("user", e.target.value))} required/>
          <button className='login-button' onClick={handleLogin}>Login</button>
          <div className='span-dark-mode'>
            <span className='span-text'>Dark Mode</span>
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
          </div>
        </div>
  )
}

export default Login;