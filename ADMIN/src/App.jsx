import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import ChartHistory from './pages/ChartHistory'
import UsersList from './pages/UsersList'
import ChartReport from './pages/ChartReport'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminLogin/>}/>
        <Route path='/home' element={<AdminHome/>}/>
        <Route path='history' element={<ChartHistory/>}/>
        <Route path='/userList' element={<UsersList/>}/>
        <Route path='/report' element={<ChartReport/>}/>
      </Routes>
    </div>
  )
}

export default App
