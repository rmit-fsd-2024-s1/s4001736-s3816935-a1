import React from 'react';
import headerImage from "../images/organic_food.jpg";   // Find an image for header

export default function Header() {
  return (
    // Make text go on top of image
    <div className="headerContainer"> 
      <img src={headerImage} className="headerImage" alt="soil"></img>
      <div className='headerText'>
        SOIL
      </div>
      
    </div>
  )
}
