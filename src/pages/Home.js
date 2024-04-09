import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { getProducts} from "../repository/products";
import product0 from "../images/beefmince.png";
import product1 from "../images/beefsteak.png";
import product2 from "../images/beefsausages.png";
import product3 from "../images/lambmince.png";
import product4 from "../images/chickenthigh.png";
import product5 from "../images/chickendrumstick.png";
import product6 from "../images/apples.png";
import product7 from "../images/bananas.png";
import product8 from "../images/watermulon.png";
import product9 from "../images/pears.png";
import product10 from "../images/babyspinach.png";
import product11 from "../images/carrots.png";
import product12 from "../images/zucchini.png";
import product13 from "../images/broccoli.png";

export default function Home(props) {
  const products = getProducts();
  const navigate = useNavigate();

  const productImages = [
    product0, product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, 
    product11, product12, product13
  ];

  return (
    <div>
      {props.username !== null && <h4><strong>Hello {props.username}!</strong></h4>}
      <h2>Organic Products</h2>
      {products.map((item, index) => (   // Loop through products using map, display each product based on index
        <div className="products" key={index}>   
          {/* <img src={item.productImage[index]} className="productImage" alt="image"></img> */}
          <img src={productImages[index]} className="productImage" alt="image"></img>
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
