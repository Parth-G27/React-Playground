import { useState } from "react"

const ColorPicker = () => {

    const [color, setcolor] = useState('#FFFFFF')

    function handleColorChange(event){
        setcolor(event.target.value)
    }

  return (
    <>
    <div className="color-picker-container">
    <h2>Color Picker</h2>
    <div className="color-display " style={{backgroundColor: color}}>
        
    </div>

    <p className="color-name">Selected color : {color}</p>
    <input type="color" value={color} onChange={handleColorChange} />
    </div>
    </>
  )
}

export default ColorPicker