

import { useState } from "react"

const Car = () => {

    const [car, setcar] = useState({
        year : 2024,
        make : "Mahindra",
        model : "XUV700",
    })

    function handelYearChange(event){
        setcar((prevCar)=>({...prevCar, year : event.target.value}));
    }

    function handelMakeChange(event){
        setcar((prevCar => ({...prevCar, make: event.target.value})));
    }

    function handelModelChange(event){
        setcar((prevCar => ({...prevCar, model: event.target.value})));
    }

  return (
    <>
    <h2>Car Details</h2>
    <div> {car.year} {car.make} {car.model}</div>

    <input type="number" value={car.year} onChange={handelYearChange} />
    <input type="text" value={car.make} onChange={handelMakeChange} />
    <input type="text" value={car.model} onChange={handelModelChange} />
    
    </>
  )
}

export default Car