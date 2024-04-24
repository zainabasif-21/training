import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import IntermediatePage from "./IntermediatePage";

export default function UserDashboard() {
 
  const {isLogged,type } = useSelector((state)=>state.login);

  if (isLogged === true && type==='user') {
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
        <IntermediatePage/>
      </div>
    );
}
