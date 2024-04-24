import React, { useState, useEffect } from 'react';
import './Components.css'

export default function FunctionalComponent() {
    const [input, setInput] = useState('');
    const [customText,setCustomText]=useState('This') 

    const handleInput=(e)=>{
        setInput(e.target.value);
    }

    useEffect(()=>{
        setTimeout(()=>{
            setCustomText('Modified Text after 3 sec')
        },3000)
    },[])

    return (<div className='mainComponentDiv'>
        <div>This is equivalent FunctionalComponent</div>
        <div>This is the state in Functional component that changes after 3 sec<br />{customText}</div>
        <div >Enter input<br />A simple input handler
            <div >Input : {input} </div>
            <input placeholder='Enter text here' onChange={e=>handleInput(e)}></input>
        </div>
    </div>

    )
}
