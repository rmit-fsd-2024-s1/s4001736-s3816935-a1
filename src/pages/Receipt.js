import React, { useState, useRef, useContext } from "react";

import { initCart, getReceipt, getSummaryPrice } from "../repository/cart";

export default function Receipt(props){
  const summary = getReceipt(); 
  const totalPrice = getSummaryPrice(); 
  console.log(summary);

  initCart(); 

  return (
    <div className="main">
      <h1>Order Summary</h1>
      <h4>Subtotal: ${totalPrice}</h4>
      {summary.length !== 0 && 
        summary.map((item, index) => { 
          const currPrice = item.itemPrice * item.itemQuantity; return (   // Loop through products using map, display each product based on index
        // <CartItems updateTotalPrice={updateTotalPrice} totalPrice={totalPrice} id={item.itemID} quantity={item.itemQuantity} />
          <div className="cartItem" >   
            <img src={item.itemImage} className="cartItemImage" ></img>   
            <br/><span className="productName">{item.itemName}</span> 
            <br/><span>x{item.itemQuantity}</span>
            <br/><span className="productPrice">${currPrice}</span>
          </div>
      )})
      } 
      
      
    </div>
  );
}
