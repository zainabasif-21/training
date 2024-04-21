import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../App";

export default function UserDashboard() {
  const navigate = useNavigate();
  const { user, isLogged } = useContext(authContext);

  const handleSubmit = () => {
    navigate("/login");
  };

  if (isLogged == true && user.includes("user") && !user.includes("admin")) {
    return (
      <div>
        <div>UserDashboard</div>
        <h1>Press to navigate to view products list</h1>
        <Link to="products">
          <button>Products List</button>
        </Link>
        <Outlet />
      </div>
    );
  } else
    return (
      <div>
        <h3>Authetication Failed</h3>
        kindly login again as a user
        <h4>Press the below button to navigate to login page</h4>
        <button onClick={handleSubmit}>Login Page</button>
      </div>
    );
}
