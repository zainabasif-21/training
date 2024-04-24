import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../ReduxToolkit/loginSlice';
import './Navbar.css'

export default function Navbar() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className='navDiv'><nav>
            <ul>
                <Link to="/" class="list">
                    Home
                </Link>
                <Link to="/login" class="list">
                    Login
                </Link>
                <Link to="/admin" class="list">
                    Admin Dashboard
                </Link>
                <Link to="/user" class="list">
                    User Dashboard
                </Link>
                <Link to="/" class="list" onClick={handleLogout}>
                    Logout
                </Link>
                <Link to="/form" class="list">
                    Formik Form
                </Link>
            </ul>
        </nav></div>
    )
}
