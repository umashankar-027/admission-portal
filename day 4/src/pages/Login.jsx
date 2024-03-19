import React, { useState } from "react";
import '../assets/css/Login.css'; 
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.password) {
            console.log(formData);
            navigate("/navbar");
        } else {
            alert("Please fill in both email and password.");
        }
        
    };
    return (
        <div className="login-container">
            <div className="box1">
                <h1>Welcome!!</h1>
                <div className="sign-box">
                    <button type="submit">SignUp</button>
                </div>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="login-group">
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}  required />
                </div>
                <div className="login-group">
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
