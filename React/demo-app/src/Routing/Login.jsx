import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState({});
  const navigate=useNavigate();

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


  const setter = {
    email: setEmail,
    password: setPassword,
  };

  const inputHandler = (e) => {
    setter[e.target.name](e.target.value);
  };

  const handleSubmit=()=>{
    if (email=='' || password=='')
        alert("Both email and password are required")
    else{
        localStorage.clear();
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        localStorage.setItem('isLogin',true);
        setEmail('');
        setPassword('');
        console.log({...localStorage})

        if(email.includes('admin') && password!='')
        {
            console.log('before link');
            navigate("/admin", { replace: true });
            
        }
        if(email.includes('user') && password!='')
        {
            navigate("/user", { replace: true });
        }
    }
  }

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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
