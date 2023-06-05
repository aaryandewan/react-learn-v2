import * as React from 'react';
import {useState} from 'react';
import './style.css';
import { useImmer } from 'use-immer'

export default function App() {
  const [name, setName] = useState('');
  const [arrs, setArrs] = useState([]);
  function handleClick(){
    setArrs([...arrs, name]);
    setName('');
  }


  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={handleClick}>save</button>
      <ul>
        {arrs.map(item => {return <li>{item}</li>})}
      </ul>
      <h1>Aaryan D</h1>
    </div>
  );
}
