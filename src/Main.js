import React, { useEffect } from "react";
import App from "./App";
import Login from "./Components/Login";
import Error from "./Components/Error";
import { useState } from "react";
import { AuthProvider } from "./Components/auth";
import { Routes, Route } from "react-router-dom"
import { ThemeContext } from './Context/ThemeContext';

function Main() {
  // dark mode and localstorage
  const [theme, setTheme] = useState(localStorage.getItem("theme" || "light"))
  
  useEffect(()=>{
    localStorage.setItem("theme", theme)
  },[theme])

  const toggleTheme = () => {
    setTheme((curr)=> curr === "dark" ? "light" : "dark")      
  }

  return (   
      <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<App />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </ThemeContext.Provider>    
  );
}

export default Main;
