
import { useState } from "react"

export default function GroceryList(){

    const [item, setItem] = useState({
        name : "default",
        quantity : 0,
    });

    const [groceryList, setGroceryList] = useState([]);

    function getName(e){
        item.name = e.target.value
        console.log(item.name)
    }

    function getQuantity(e){
        item.quantity = e.target.value
        console.log(item.quantity)
    }

    function addItem(){
        setItem(item)
        console.log(item)
        
       
        setGroceryList((prev) =>[...prev,item])
        //setItem('')
        console.log(groceryList)
    }

  return (
    <>
    <h2 className="">Grocery List</h2>
    <input type="text" placeholder="Item Name" onChange={(e) => getName(e)} /> <br />
    <input type="text" placeholder="Item Quantity" onChange={(e) => getQuantity(e)} /> <br />
    <button type="button" className="btn-1" onClick={addItem}>Add Item</button>

    {/* <div>{groceryList.map((item)=><><li>Item : {item.name} | Quantity : {item.quantity}</li></>)}</div> */}
    </>
  )
}


// import { useState } from 'react';

// const ShoppingListApp = () => {
//   const [itemName, setItemName] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [shoppingItems, setShoppingItems] = useState([]);

//   const handleItemNameChange = (event) => {
//     setItemName(event.target.value);
//   };

//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//   };

//   const handleAddItem = () => {
//     if (itemName.trim() !== '' && quantity.trim() !== '') {
//       const newItem = {
//         itemName: itemName,
//         quantity: quantity,
//       };
//       setShoppingItems((prevItems) => [...prevItems, newItem]);
//       setItemName('');
//       setQuantity('');
//     }
//   };

//   return (
//     <div>
//       <div>
//         <label>
//           Item Name:
//           <input
//             type="text"
//             value={itemName}
//             onChange={handleItemNameChange}
//             placeholder="Enter item name..."
//           />
//         </label>
//         <label>
//           Quantity:
//           <input
//             type="text"
//             value={quantity}
//             onChange={handleQuantityChange}
//             placeholder="Enter quantity..."
//           />
//         </label>
//         <button onClick={handleAddItem}>Add Item</button>
//       </div>
//       <ul>
//         {shoppingItems.map((item, index) => (
//           <li key={index}>
//             {item.itemName} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShoppingListApp;
