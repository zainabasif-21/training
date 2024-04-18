import React from "react";
import { Link } from "react-router-dom"; 

export default function LandingPage() {
  return (<div>
    <h1>LandingPage</h1>

    <h4>Proceed to login</h4>
    <Link to='/login'><button>Login</button></Link>
  </div>);
}
