import React, { useState } from "react";

const ITEMS_KEY = "items";
const ITEM_KEY = "item";
const TOTALPRICE_KEY = "totalPrice"; 
const RECEIPT_KEY = "receipt"; 
const SUMMARYPRICE_KEY = "summaryPrice"; 

function initCart() {

  const items = [];
  const totalPrice = 0; 

  localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
  localStorage.setItem(TOTALPRICE_KEY, JSON.stringify(totalPrice));
}

function addItem(id, quantity, name, price, image) {
  //console.log(id);
  const items = getCart();  // Old carts. 
    const length = items.length;
    //console.log(length);
    items[length] = {itemID: id, itemQuantity: quantity, itemName: name, itemPrice: price, itemImage: image};  // Add one cart.

  setCart(items);  // New carts.
  console.log(items);
}

function verifyItem(id) {   // See if the item is already in the cart
  const items = getCart();
  for(const item of items) {
    if(id === item.itemID)
    {
      // setUser(username);
      return true;
    }
  }
  return false;
}

function updateItem(id, quantity) {   // If the item is already in the cart, update the quantity
  const items = getCart(); 
  for(const item of items) {
    if(id === item.itemID) {
      item.itemQuantity += quantity; 
    }
  }
  setCart(items); 
  console.log(items);
}

function removeItem(id) {
  const items = getCart();  // Old carts. 
  console.log(items);
  const newCart = items.filter((item) => item.itemID !== id);
  // delete carts[onecartName];
  console.log(newCart);
  setCart(newCart);  // New carts.
}

function getCart() {
  // Extract cart data from local storage.
  const data = localStorage.getItem(ITEMS_KEY);
  console.log(data);
  // Convert data to objects.
  return JSON.parse(data);
}

function updateTotalPrice(price) {
  const totalPrice = getTotalPrice(); 
  totalPrice += price; 
  localStorage.setItem(TOTALPRICE_KEY, JSON.stringify(totalPrice));
}

function getTotalPrice() {
  const items = getCart(); 
  let totalPrice = 0; 
  for(const item of items) {
    const currPrice = item.itemPrice * item.itemQuantity; 
    totalPrice += currPrice; 
  }
  return totalPrice;
}

function setCart(items) {
  localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
}

function getItem() {
  return localStorage.getItem(ITEM_KEY);
}

function setReceipt(items) {
  localStorage.setItem(RECEIPT_KEY, JSON.stringify(items));
}

function getReceipt() {
  const data = localStorage.getItem(RECEIPT_KEY);
  
  return JSON.parse(data);
}

function setSummaryPrice(price) {
  localStorage.setItem(SUMMARYPRICE_KEY, JSON.stringify(price));
}

function getSummaryPrice() {
  const data = localStorage.getItem(SUMMARYPRICE_KEY);
  
  return JSON.parse(data);
}

// function removeItem() {
//   localStorage.removeItem(ITEM_KEY);
// }

export {
  initCart,
  addItem,
  verifyItem, 
  updateItem, 
  removeItem, 
  getCart,  
  updateTotalPrice, 
  getTotalPrice, 
  setCart,
  getItem, 
  setReceipt, 
  getReceipt,
  setSummaryPrice, 
  getSummaryPrice
}
