import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { authContext } from "../App";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user, isLogged } = useContext(authContext);

  const handleSubmit = () => {
    navigate("/login");
  };

  if (isLogged == true && user.includes("admin") && !user.includes("user")) {
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
        <h3>Authetication Failed</h3>
        kindly login again as an admin again
        <h4>Press the below button to navigate to login page</h4>
        <button onClick={handleSubmit}>Login Page</button>
      </div>
    );
}
