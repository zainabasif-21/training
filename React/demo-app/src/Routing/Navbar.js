import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

export default function Navbar(props) {
    const { setLogIn, setUser } = { ...props }

    const handleLogout = () => {
        setLogIn(false);
        setUser('');
        localStorage.clear();
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
