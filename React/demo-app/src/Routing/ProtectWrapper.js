import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../App';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Login from './Login';


export default function ProtectWrapper(props) {
    const { user, isLogged } = useContext(authContext);

    let navigate = useNavigate();

    const selector={
        'admin':AdminDashboard,
        'user':UserDashboard
    }
   
    console.log(props.children.type==selector[user])
    if( isLogged && props.children.type==selector[user])
        return props.children;
    else
        return <Login/>

}
