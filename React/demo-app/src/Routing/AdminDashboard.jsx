import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleSubmit=()=>{
      
    navigate('/login');
  }

  const local={...localStorage};
  if(Boolean(local.isLogin)==true && local.email.includes('admin'))
  {
      return (<div>
        <div>Admin Dashboard</div>
        <h1>Press to navigate to view users list</h1>
        <Link to='users'><button>Users List</button></Link>
        <Outlet />
    </div>)}
else
return (
  <div>
    <h3>Authetication Failed</h3>
    kindly login again as an admin again
    <h4>Press the below button to navigate to login page</h4>
    <button onClick={handleSubmit}>Login Page</button>
  </div>
)
}
