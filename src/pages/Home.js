import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../repository/products";
import StoreItems from "./StoreItem";

export default function Home(props) {
  const products = getProducts();
  const navigate = useNavigate();

  return (
    <div>
      {/* {props.username !== null && <h4><strong>Hello {props.username}!</strong></h4>} */}
      <div class="homepage-headings">
      <h2>Weekly Specials</h2>
      </div>

      <div class="homepage-sections">
      {products.map((item, index) => {
        // console.log(index)
        if (index < 4) {
          return <StoreItems id={item.productID} name={item.productName} price={item.productPrice} image={item.productImage} username={props.username}/>
        }
      })}
      </div>

      <div class="homepage-headings">
      <h2>Organic Products</h2>
      </div>

      <div class="homepage-sections">
      {products.map((item, index) => {
        // console.log(index)
        if (index > 3) {
          return <StoreItems id={item.productID} name={item.productName} price={item.productPrice} image={item.productImage} username={props.username}/>
        }
      })}
      </div>
      
      <div class="homepage-headings">
      <h2 >Small-Scale Farming</h2>
      </div>

      <div class="smallScaleFarming">
        <h4>Want to grow your own veggies?</h4>

        <br></br>

        <p>No fear! SOIL is ready to guide you in simple points on how you can get started with your own mini garden!</p>

        <br></br>

        <p>Just consider these 5 points:</p>
        <ul>
          <li>Size of your garden</li>
          <li>Size of you plant pots</li>
          <li>Choosing your plants and vegetables</li>
          <li>When to plant</li>
          <li>Planning ahead</li>
        </ul>
        
      </div>

    </div>
    
  );
}
