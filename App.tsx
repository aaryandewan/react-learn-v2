import * as React from 'react';
import './style.css';
import { useImmer } from 'use-immer'

export default function App() {
  const [age, setAge] = React.useState(0);
  const [obj, setObj] = useImmer({name: "Aaryan", age: 23});
  function changeAge(){
    setAge(age + 1);
  }

  function changeObj(){
    setObj(draft => {draft.name = "mehak"});
  }
  return (
    <div>
      <button onClick={changeAge}>Click</button>
      {age}
      {obj.name}
      <button onClick={changeObj}>z</button>
      <h1>Aaryan D</h1>
    </div>
  );
}
