import React from 'react'
import { useNavigate} from 'react-router'
import { Link , Outlet} from 'react-router-dom';

export default function UserDashboard() {
    const navigate=useNavigate();

    const handleSubmit=()=>{
      
      navigate('/login');
    }

    const local={...localStorage};
    if(Boolean(local.isLogin)==true && local.email.includes('user'))
    {
        return (<div>
          <div>UserDashboard</div>
          <h1>Press to navigate to view products list</h1>
          <Link to='products'><button>Products List</button></Link>
          <Outlet />
      </div>)}
  else
  return (
    <div>
      <h3>Authetication Failed</h3>
      kindly login again as a user
      <h4>Press the below button to navigate to login page</h4>
      <button onClick={handleSubmit}>Login Page</button>
    </div>
  )
}
