import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard, People, School, MenuBook, Contacts, Business, Payment, ExitToApp } from '@mui/icons-material';
import '../../assets/css/AdminSidebar.css';
import Navbar from '../user/Navbar';
import AdminNavbar from './AdminNavbar';

const AdminSidebar = () => {
    const handleLogout = () => {
        
    };
    const studentData = [
        { rollNo: '727821TUAD057', name: 'UMASHANKAR', department: 'BE - ADS', email: '727821tuad057@skct.edu.in', phone: '987654320', admissionDate: '04-12-2021' },
        { rollNo: '727821TUAD057', name: 'UMASHANKAR', department: 'BE - ADS', email: '727821tuad057@skct.edu.in', phone: '987654320', admissionDate: '04-12-2021' },
        { rollNo: '727821TUAD057', name: 'UMASHANKAR', department: 'BE - ADS', email: '727821tuad057@skct.edu.in', phone: '987654320', admissionDate: '04-12-2021' },
        { rollNo: '727821TUAD057', name: 'UMASHANKAR', department: 'BE - ADS', email: '727821tuad057@skct.edu.in', phone: '987654320', admissionDate: '04-12-2021' },
        { rollNo: '727821TUAD057', name: 'UMASHANKAR', department: 'BE - ADS', email: '727821tuad057@skct.edu.in', phone: '987654320', admissionDate: '04-12-2021' },
        { rollNo: '727821TUAD057', name: 'UMASHANKAR', department: 'BE - ADS', email: '727821tuad057@skct.edu.in', phone: '987654320', admissionDate: '04-12-2021' },
        
    ];

    return (
        <div className="admin-dashboard">
           
            <div className="sidebar">
                <ul>
                    <li><Link to="/adminDashboard"><Dashboard /> Dashboard</Link></li>
                    <li><Link to="/adminDashboard"><People /> Students</Link></li>
                    <li><Link to="/departments"><School /> Departments</Link></li>
                    <li><Link to="/courses"><MenuBook /> Courses</Link></li>
                    <li><Link to="/contact"><Contacts /> Contact</Link></li>
                    <li><Link to="/adminCollege"><Business /> College</Link></li>
                    <li><Link to="/payments"><Payment /> Payments</Link></li>
                    <li onClick={handleLogout} className="logout-button"><ExitToApp /> Logout</li>
                </ul>
            </div>
            <div className="content-side">
                <table className="student-table1">
                    <thead>
                        <tr>
                            <th>ROLL NO.</th>
                            <th>NAME</th>
                            <th>DEPARTMENT</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>ADMISSION DATE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.rollNo}</td>
                                <td>{student.name}</td>
                                <td>{student.department}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.admissionDate}</td>
                                <td>    
                                    <button className='view' onClick={() => handleView(student)}>View</button>
                                    <button className='delete' onClick={() => handleDelete(student)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSidebar;
