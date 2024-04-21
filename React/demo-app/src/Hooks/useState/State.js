import React from 'react'
import { useState } from 'react';
import './State.css';


export default function State() {
  const[count,setCount]=useState(0);
  const[input,setInput]=useState('');

  const inputHandler =(e)=>{
    setInput(e.target.value)
  }

  return (
    <div >
      <div>Here are two examples of state Hook</div>
      <div className='mainDiv'>
      <div className='myDiv'>First Example of useState Hook <br/>A simple counter
          <div>Count: {count}</div>
          <button className='myBtn' onClick={()=>setCount(count+1)}>+</button>
          <button className='myBtn' onClick={()=>setCount(count-1)}>-</button>
      </div>

      <div className='myDiv'>Second Example of useState Hook <br/>A simple input handler
          <div>Input : {input}</div>
          <input placeholder='Enter text here' onChange={(e)=> inputHandler(e)}></input>
      </div>

      </div>
    </div>
  )
}
