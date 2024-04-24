import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector } from "react-redux";
import {login} from "../ReduxToolkit/loginSlice";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {isLogged,type}=useSelector((state)=>state.login)

  const dispatch=useDispatch();
  const navigate = useNavigate();

  const setter = {
    email: setEmail,
    password: setPassword,
  };

  const inputHandler = (e) => {
    setter[e.target.name](e.target.value);
  };

  const handleSubmit = () => {
    
    if (email === "" || password === "")
      alert("Both email and password are required");
    else if (password!=='' && !(email.includes('user') && email.includes('admin'))){
        dispatch(login({email,password}));
      
        if (email.includes("admin")) {
          navigate("/admin");
        }
        else if (email.includes("user")) {
          navigate("/user");
      }
    }
    else {
      alert("Kindly enter valid credentials !");
    }
  
  };

  const handleDashboardClick = () => {
    if (type==='admin') 
          navigate("/admin");
    else navigate("/user");
  };

  if (isLogged === true) {
    return (
      <div>
        <h1>
          User already logged in as{" "}
          {type==='admin' ? <>admin</> : <>user</>}
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
