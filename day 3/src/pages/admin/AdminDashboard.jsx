import React from 'react'
import AdminNavbar from './AdminNavbar'
import '../../assets/css/AdminDashboard.css'
import AdminSidebar from './AdminSidebar'
const AdminDashboard = () => {
    
  return (
    <div className='admin-dash'>
        <AdminNavbar/>
        <div className='admindashboard'>
        </div>
        <AdminSidebar/>

    </div>
    
  )
}

export default AdminDashboard