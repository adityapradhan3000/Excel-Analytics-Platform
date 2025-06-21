import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Hero from './pages/Hero'
import Login from './pages/Login'
import Register from './pages/Register'
import Analysis from './pages/Analysis'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChartsPage from './pages/ChartsPage'
import DimenionPage from './pages/DimenionPage'
import ThreeDChartsPage from './pages/ThreeDChartsPage'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/history' element={<ChartsPage/>}/>
        <Route path='/3dPage' element={<DimenionPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/3DHistoryPage' element={<ThreeDChartsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
