import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard, People, School, MenuBook, Contacts, Business, Payment, ExitToApp } from '@mui/icons-material';
import '../../assets/css/AdminSidebar.css';
import Navbar from '../user/Navbar';
import AdminNavbar from './AdminNavbar';
const AdminStudentList = () => {
    const handleLogout = () => {
        
    };
    const studentData = [
        { NAME: 'NARESH', FATHERNAME:'SIVA', MOTHERNAME: 'RUPA', GENDER: 'MALE', AGE: '21', NATIONALITY: 'IDIAN',DOB:'10-03-2003',ADDRESS:'QW45Y',PHONENO:'098765432',SSLC:'495',HSC:'597' },
        { NAME: 'NARESH', FATHERNAME:'SIVA', MOTHERNAME: 'RUPA', GENDER: 'MALE', AGE: '21', NATIONALITY: 'IDIAN',DOB:'10-03-2003',ADDRESS:'QW45Y',PHONENO:'098765432',SSLC:'495',HSC:'597' },
        { NAME: 'NARESH', FATHERNAME:'SIVA', MOTHERNAME: 'RUPA', GENDER: 'MALE', AGE: '21', NATIONALITY: 'IDIAN',DOB:'10-03-2003',ADDRESS:'QW45Y',PHONENO:'098765432',SSLC:'495',HSC:'597' },
        { NAME: 'NARESH', FATHERNAME:'SIVA', MOTHERNAME: 'RUPA', GENDER: 'MALE', AGE: '21', NATIONALITY: 'IDIAN',DOB:'10-03-2003',ADDRESS:'QW45Y',PHONENO:'098765432',SSLC:'495',HSC:'597' },
        { NAME: 'NARESH', FATHERNAME:'SIVA', MOTHERNAME: 'RUOA', GENDER: 'MALE', AGE: '21', NATIONALITY: 'IDIAN',DOB:'10-03-2003',ADDRESS:'QW45Y',PHONENO:'098765432',SSLC:'495',HSC:'597' },

        
      
        
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
                            <th>NAME</th>
                            <th>FATHER'S NAME</th>
                            <th>MOTHER'S NAME</th>
                            <th>GENDER</th>
                            <th>AGE</th>
                            <th>NATIONALITY</th>
                            <th>DOB</th>
                            <th>ADDRESS</th>
                            <th>PHONE NO</th>
                            <th>10TH MARK</th>
                            <th>12TH MARK</th>
                            <th>ACTION</th>


                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.NAME}</td>
                                <td>{student.FATHERNAME}</td>
                                <td>{student.MOTHERNAME}</td>
                                <td>{student.GENDER}</td>
                                <td>{student.AGE}</td>
                                <td>{student.NATIONALITY}</td> 
                                <td>{student.DOB}</td> 
                                <td>{student.ADDRESS}</td> 
                                <td>{student.PHONENO}</td> 
                                <td>{student.SSLC}</td> 
                                <td>{student.HSC}</td> 
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

export default AdminStudentList