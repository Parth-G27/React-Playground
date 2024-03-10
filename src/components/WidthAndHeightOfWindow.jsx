import {useState, useEffect} from 'react'

const WidthAndHeightOfWindow = () => {

    const [width, setwidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handlSize)
      
      
      
    }, [width,height])


    function handlSize(){
        setwidth(window.innerWidth);
        setheight(window.innerHeight)
    }
    


  return (
    <>
    <h2>Width And Height Of Window</h2>
    <p>Window width : {width}</p>
    <p>Window height : {height}</p>
    </>
  )
}

export default WidthAndHeightOfWindow