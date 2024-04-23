import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authContext } from "../App";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import {login,logout} from "../ReduxToolkit/loginSlice";
import { store } from "../ReduxToolkit/Store";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, isLogged } = useContext(authContext);

  const dispatch=useDispatch();
  const navigate = useNavigate();

  const { setLogIn, setUser} = { ...props };

  const setter = {
    email: setEmail,
    password: setPassword,
  };

  const inputHandler = (e) => {
    setter[e.target.name](e.target.value);
  };

  const handleSubmit = () => {
    if (email == "" || password == "")
      alert("Both email and password are required");
    else {
      setUser(email);
      setLogIn(true);
      dispatch(login({email,password}));
      console.log(store.getState())

      if (email.includes("admin") && password != "") {
        navigate("/admin");
      }
      else if (email.includes("user") && password != "") {
        navigate("/user");
      } else {
        alert("Kindly enter valid credentials !");
      }
    }
  };

  const handleDashboardClick = () => {
    if (user.includes("admin")) navigate("/admin");
    else navigate("/user");
  };

  if (isLogged == true) {
    return (
      <div>
        <h1>
          User already logged in as{" "}
          {user.includes("admin") ? <>admin</> : <>user</>}
        </h1>
        <h4>Press the button below to navigate to relevant page</h4>
        <button onClick={handleDashboardClick}>Dashboard</button>
      </div>
    );
  } else
    return (
      <div>
        <h1>Login Page</h1>
        <div>
          <div>
            <h4>Email</h4>
            <input name="email" value={email} onChange={inputHandler}></input>
          </div>
          <div>
            <h4>Password</h4>
            <input
              name="password"
              value={password}
              onChange={inputHandler}
            ></input>
          </div>
          <br></br>
          <br></br>
          <button onClick={handleSubmit}>Submit</button>
          <br></br>
        </div>
      </div>
    );
}
