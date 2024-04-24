import React from 'react';
import { useState} from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
// import State from './Hooks/useState/State';
// import RefHook from './Hooks/useRef/RefHook';
// import Effect from './Hooks/useEffect/Effect';
// import ClassComponent from './ClassAndFunctionalComponent/ClassComponent';
// import FunctionalComponent from './ClassAndFunctionalComponent/FunctionalComponent';

import Navbar from './Routing/Navbar';
import LandingPage from './Routing/LandingPage';
import ErrorPage from './Routing/ErrorPage';
import Login from './Routing/Login';
import AdminDashboard from './Routing/AdminDashboard';
import UserDashboard from './Routing/UserDashboard';
import AdminUserData from './Routing/AdminUserData';
import UserProducts from './Routing/UserProducts';
import UserForm from './Form/UserForm';
import ProtectWrapper from './Routing/ProtectWrapper';


export function App() {

  
  const [isLogged, setLogIn] = useState(false);
  const [user, setUser] = useState('');

  console.log(user, isLogged)
  


  return (
    <div className="App">

      <Navbar setLogIn={setLogIn} setUser={setUser} />
        <Routes>
          <Route path="/" index={true} element={<LandingPage />} />
          <Route path="/login" element={<Login setLogIn={setLogIn} setUser={setUser} />} />
          <Route path='/admin' element={<ProtectWrapper><AdminDashboard /></ProtectWrapper>}>
            <Route path='users' element={<AdminUserData />} />
          </Route>
          <Route path='/user' element={<ProtectWrapper><UserDashboard /></ProtectWrapper>}>
            <Route path='products' element={<UserProducts />} />
          </Route>
          <Route path="/form" element={<UserForm />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>

    </div>
  );
}



