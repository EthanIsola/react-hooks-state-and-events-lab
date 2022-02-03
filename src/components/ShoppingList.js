import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let newList = items.map(item=> <Item key={item.id} name={item.name} category={item.category} />);
  const [selectedCategory, setSelect] = useState(newList)
  
  
  
  const handleChange = (value)=>{
    let newItemArray = [];
    for(let item of items){
      if(value === "All"){
        newItemArray = newList;
      }
      else if(item.category === value){
        newItemArray.push(<Item key={item.id} name={item.name} category={item.category} />)
      }
    }
    setSelect(newItemArray);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>handleChange(e.target.value)}>
          <option value="All" >All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy" >Dairy</option>
          <option value="Dessert" >Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory}
      </ul>
    </div>
  );
  }

export default ShoppingList;
