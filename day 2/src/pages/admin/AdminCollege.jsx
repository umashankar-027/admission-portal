import AdminDashboard from './AdminDashboard'
import AdminCollegeList from './AdminCollegeList'
import AdminNavbar from './AdminNavbar'
import '../../assets/css/AdminDashboard.css'

const AdminCollege = () => {
  return (
    <div className='admin-dash'>
    <AdminNavbar/>
    <div className='admindashboard'>
    </div>
    <AdminCollegeList/>

    </div>
  )
}

export default AdminCollege