import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminStudentList from './AdminStudentList'
import '../../assets/css/AdminDashboard.css'
const AdminStudent = () => {
  return (
    <div className='admin-dash'>
    <AdminNavbar/>
    <div className='admindashboard'>
    </div>
    <AdminStudentList/>

    </div>
  )
}

export default AdminStudent