import React, { useState } from 'react';
import './App.css'
import './pages/SignUp.jsx'
import './pages/Login.jsx'
import './assets/css/Signup.css'
import './assets/css/Login.css'
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Navbar from './pages/user/Navbar.jsx';
import Background from './pages/user/Background.jsx';
import Institutioncard from './pages/user/Institutioncard.jsx'
import CollegeDetails from './pages/user/CollegeDetails.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminSidebar from './pages/admin/AdminSidebar.jsx';
import AdminNavbar from './pages/admin/AdminNavbar.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminStudent from './pages/admin/AdminStudent.jsx';
import AdminCollege from './pages/admin/AdminCollege.jsx';
import AdminCollegeList from './pages/admin/AdminCollegeList.jsx';
import AdminStudentList from './pages/admin/AdminStudentList.jsx';

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/collegeDetails' element={<CollegeDetails />} />
          <Route path='/institutioncard' element={<Institutioncard />} />
          <Route path='/navbar' element={<Navbar/>} />
          <Route path='/adminSidebar' element={<AdminSidebar/>} />
          <Route path='/adminNavbar' element={<AdminNavbar/>} />
          <Route path='/adminDashboard' element={<AdminDashboard/>} />
          <Route path='/adminStudent' element={<AdminStudent/>} />
          <Route path='/adminStudentList' element={<AdminStudentList/>} />
          <Route path='/adminCollege' element={<AdminCollege/>} />
          <Route path='/adminCollegeList' element={<AdminCollegeList/>} />

          
          
          
          
        </Routes>
      </BrowserRouter>
  );
}

export default App
