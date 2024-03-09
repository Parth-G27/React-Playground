import { useState } from "react"
const BioData = () => {

    const [name, setname] = useState('')
    const [age, setage] = useState(0)
    const [isEmployed, setisEmployed] = useState(true)



  return (
    <>
    <h2>BioData</h2>

    <div>name : {name}</div>
    <button onClick={()=>setname("Charan")}>Update name</button>
    <div>age : {age}</div>
    <button onClick={() => setage(age+1)}>Increase age</button>
    <div>isEmployed : {isEmployed ? "Yes" : "No"}</div>
    <button onClick={() => setisEmployed(!isEmployed)}>Increase age</button>


    </>
  )
}

export default BioData