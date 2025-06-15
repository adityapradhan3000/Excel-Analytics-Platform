import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminPortal from './AdminPortal'
import AdminFooter from '../components/AdminFooter'

const AdminHome = () => {
  return (
    <div>
      <AdminNavbar/>
      <AdminPortal/>
      <AdminFooter/>
    </div>
  )
}

export default AdminHome
