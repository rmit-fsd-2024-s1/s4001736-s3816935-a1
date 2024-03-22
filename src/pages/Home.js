import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { getProducts} from "../repository/products";

export default function Home(props) {
  const products = getProducts();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Organic Products</h2>
      {products.map((item, index) => (   // Loop through products using map, display each product based on index
        <div className="products" key={index}>   
          <img src={item.productImage[index]} className="productImage" alt="image"></img>
          <br/><span className="productName">{item.productName}</span> 
          <br/><span className="productPrice">${item.productPrice}</span>
          {/* <br/>{props.username !== null && 
            <a href="#" onClick={() => toReviews(index)}>Reviews</a>
          } */}
        </div>
      ))}
      <br />
      <h2>Small-Scale Farming</h2>
      <p> </p>
    </div>
  );
}
