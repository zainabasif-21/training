import React, { useContext, } from 'react'
import { useSelector } from 'react-redux';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Login from './Login';


export default function ProtectWrapper(props) {

    const {isLogged,user,password,type}=useSelector((state)=>state.login)

    const selector={
        'admin':AdminDashboard,
        'user':UserDashboard
    }
   
    console.log(props.children.type==selector[type])
    if( isLogged && props.children.type==selector[type])
        return props.children;
    else
        return <Login/>

}
