import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Hero from './pages/Hero'
import Login from './pages/Login'
import Register from './pages/Register'
import Analysis from './pages/Analysis'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
      </Routes>
    </div>
  )
}

export default App
