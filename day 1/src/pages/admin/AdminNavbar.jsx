
import { Search, AccountCircle, Notifications, Message } from '@mui/icons-material';

const AdminNavbar = () => {
    const adminName = "727821TUAD057"; 

    return (
        <div className="admin-navbar">
            <div className="search-box">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="admin-name">
                <AccountCircle />
                <span>{adminName}</span>
            </div>
            <div className="notification-box">
                <Notifications />
                <Message/>
            </div>
        </div>
    );
};

export default AdminNavbar;
