import React, { useState } from "react";
import { addItem, verifyItem, updateItem } from "../repository/cart"; 

export default function StoreItem(props) {
  const [quantity, setQuantity] = useState(1); 
  // const [currQuantity, setCurrQuantity] = useState(0); 
  // const quantity = 1;
  // console.log(props.id); 
  // console.log(props.name);
  // console.log(props.username);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleAddToCart = (event) => {
    addToCart(event, props.id, quantity, props.name, props.price, props.image); 
  }

  const addToCart = (event, id, quantity, name, price, image) => {
    event.preventDefault(); 
    
    const verified = verifyItem(id); 
    console.log(verified);

    if(verified === false) {
      addItem(id, quantity, name, price, image);
      return
    }

    updateItem(id, quantity);

    // console.log(id); 
    // console.log(quantity);
  }

  return (
    <div className="products" >   
      {/* id is loop index as image urls are hardcoded  */}
      <img src={props.image} className="productImage" ></img>   
      <br/><span className="productName">{props.name}</span> 
      <br/><span className="productPrice">${props.price}</span>
      <br/>{props.username !== null && 
        <>
          <button className="btn btn-secondary mr-2" onClick={decreaseQuantity}>-</button>
          <span className="mr-2">{quantity}</span>
          <button className="btn btn-secondary mr-2" onClick={addQuantity}>+</button>
          <button className="btn btn-success mr-2" onClick={handleAddToCart}>Add to Cart</button>
        </>
      }
    </div>
  )
}