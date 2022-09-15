import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth'

const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate()

  const handleLogout = () =>{
    auth.logout()
    navigate("/")
    localStorage.removeItem("user")
  }

  return (
    <div className='navbar'>
        <h1>Popusmart Todo App</h1>
        <div className='nav-item'>
            <h3 className='username'>Username: {localStorage.getItem("user")}</h3>
            <div className='logout' id='logout' onClick={handleLogout}>Logout</div>
        </div>
    </div>
  )
}

export default Header;
