import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import IntermediatePage from "./IntermediatePage";

export default function AdminDashboard() {
  const { isLogged,type } = useSelector((state)=>state.login);

 

  if (isLogged === true && type==='admin') {
    return (
      <div>
        <div>Admin Dashboard</div>
        <h1>Press to navigate to view users list</h1>
        <Link to="users">
          <button>Users List</button>
        </Link>
        <Outlet />
      </div>
    );
  } else
    return (
      <div>
        <IntermediatePage/>
      </div>
    );
}
