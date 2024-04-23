import React from 'react'
import { useNavigate } from 'react-router'

export default function IntermediatePage() {
    const navigate=useNavigate();

    const handleSubmit = () => {
        navigate("/login");
      };

  return (
    <div>
        <h3>Authetication Failed</h3>
              kindly login again
        <h4>Press the below button to navigate to login page</h4>
        <button onClick={handleSubmit}>Login Page</button>
    </div>
  )
}
