import React, { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import State from './Hooks/useState/State';
import RefHook from './Hooks/useRef/RefHook';
import Effect from './Hooks/useEffect/Effect';
import ClassComponent from './ClassAndFunctionalComponent/ClassComponent';
import FunctionalComponent from './ClassAndFunctionalComponent/FunctionalComponent';
import LandingPage from './Routing/LandingPage';
import ErrorPage from './Routing/ErrorPage';
import Login from './Routing/Login';
import AdminDashboard from './Routing/AdminDashboard';
import UserDashboard from './Routing/UserDashboard';
import AdminUserData from './Routing/AdminUserData';
import UserProducts from './Routing/UserProducts';


function App() {

  useEffect(()=>{
    localStorage.setItem('isLogin','false');
    localStorage.setItem('email','')
  },[])


  return (
    <div className="App">
      <div className='navDiv'><nav>
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/login" class="list">
            Login
          </Link>
        </ul>
      </nav></div>


      <Routes>
        <Route path="/" index={true} element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/admin' element={<AdminDashboard/>}>
            <Route path='users' element={<AdminUserData/>}/>
        </Route>
        <Route path='/user' element={<UserDashboard/>}> 
        <Route path='products' element={<UserProducts/>} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
