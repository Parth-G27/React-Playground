import { useState } from "react"

const Counter = () => {

    const [count, setcount] = useState(0)


  return (
    <>
    <h2>Count : {count}</h2> <br /> 
    <button className="btn-1" onClick={()=> setcount(count + 1)}> Increment</button> <br />
    <button className="btn-1" onClick={()=> setcount(count-1 )}> Decrement</button> <br />
    <button className="btn-1" onClick={()=> setcount(0)}> Reset</button>
    </>
  )
}

export default Counter