
export default function List() {
    const items = [
        {id : 1, name: "Rice", price: 20},
        {id : 2, name: "Chicken", price: 40},
        {id : 3, name: "Jeera", price: 25},
        {id : 4, name: "Masala", price: 40},
        {id : 5, name: "Water", price: 5},
    ] 

  return (
    <>

    <div>{items.map((item) => (<><li>{item.name} <b>{item.price}</b> </li></>))}</div>
    
    
    </>
  )
}
