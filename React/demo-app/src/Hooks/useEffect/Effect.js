import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Effect() {
  const [myData, setData] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1').then((data)=>{
      //console.log(data.data)
      setData(data.data);
    })
  }, []); // Empty dependency array means the effect runs only once

  return (<div>
        <div>
          First Example of useEffect
          <p>Here is the data fetched 
          <br/>{JSON.stringify(myData)}</p>
        </div>
    
  </div>);
}