
export default function Button() {

    var a = "";


    const handleClick = () => {
        console.log("clicked !"+a)
        
        
    }

    const getText = (event) => {
        console.log("In progress")
        a = event.target.value;
    }


  return (
    <>
    <input placeholder="name" type="text" name="Text" onChange={(e) =>getText(e)}/> <br /> <br />
    <button onClick={() => handleClick()}>Click !{a}</button> <br />
    <br />

  
    </>
  )
}
