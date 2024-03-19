import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard, People, School, MenuBook, Contacts, Business, Payment, ExitToApp } from '@mui/icons-material';
import '../../assets/css/AdminSidebar.css';
import Navbar from '../user/Navbar';
import AdminNavbar from './AdminNavbar';
const AdminCollegeList = () => {
    const handleLogout = () => {
        
    };
    const studentData = [
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        
 
        
        
    ];

    return (
        <div className="admin-dashboard">
           
            <div className="sidebar">
                <ul>
                    <li><Link to="/adminDashboard"><Dashboard /> Dashboard</Link></li>
                    <li><Link to="/adminStudent"><People /> Students</Link></li>
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
                            <th>College Name</th>
                            <th>College Code</th>
                            <th>BranchName</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>Location</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.CollegeName}</td>
                                <td>{student.CollegeCode}</td>
                                <td>{student.BranchName}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.Location}</td>
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
}

export default AdminCollegeList