
import {useEffect, useState} from 'react'

const DigitalClock = () => {

    const [time, settime] = useState(new Date())

    useEffect(() => {
      const interval = setInterval(() => {
        settime(new Date())
      }, 1000);

      return () => {
        clearInterval(interval)
      }
    },[])

    function handelTime(){
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds()
      var median = hours<=12 ?  "AM" : "PM"; 
      return `${hours} : ${minutes} : ${seconds} ${median}` ;
    }

  return (
    <>
    <h2>DigitalClock</h2>
    <p>Time : {handelTime()}</p>
    
   
    </>
  )
}

export default DigitalClock