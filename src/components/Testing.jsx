
import { useEffect, useState } from "react";

const Testing = () => {
  const [count, setcount] = useState(0);
  const [color, setcolor] = useState('green')


  useEffect( () => {
    
    document.title = `Count ${count} ${color}`;
   
  },[count, color]);

  function addCount() {
    setcount((c) => c + 1);
  }

  function subtractCount() {
    setcount((c) => c - 1);
  }

  function changeColor(){
    setcolor( c => c === 'green' ? "red" : "green")
  }

  return (
    <>
      <p style={{color: color}}>Count : {count} </p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button> <br /> <br />
      <button onClick={changeColor}>Change color</button>

    </>
  );
};

export default Testing;
