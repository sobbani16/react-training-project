import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FirstComponent from '../FirstComponent/FirstComponent';
import SecondComponent from '../SecondComponent/SecondComponent';
import { Link } from 'react-router-dom';
import CartComponent from '../CartComponent/CartComponent';


const ShoppingComponent = () => {

  const renderData = [
    {
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_Logo_Blue_RGB_ai_renditionpicker_319x319-91970.png;maxHeight=70;maxWidth=120",
      description: "Samsung - 65” Class Q80B QLED 4K Smart Tizen TV",
      price: "$1,299.99",
      buttonText: "Add to cart",
      buttonText2: "Delete from cart"
    },
    {
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_Logo_Blue_RGB_ai_renditionpicker_319x319-91970.png;maxHeight=70;maxWidth=120",
      description: "Samsung - 65” Class Q80B QLED 4K Smart Tizen TV",
      price: "$1,299.99",
      buttonText: "Add to cart",
      buttonText2: "Delete from cart"

    },
    {
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_Logo_Blue_RGB_ai_renditionpicker_319x319-91970.png;maxHeight=70;maxWidth=120",
      description: "Samsung - 65” Class Q80B QLED 4K Smart Tizen TV",
      price: "$1,299.99",
      buttonText: "Add to cart",
      buttonText2: "Delete from cart"


    },
    {
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_Logo_Blue_RGB_ai_renditionpicker_319x319-91970.png;maxHeight=70;maxWidth=120",
      description: "Samsung - 65” Class Q80B QLED 4K Smart Tizen TV",
      price: "$1,299.99",
      buttonText: "Add to cart",
      buttonText2: "Delete from cart"


    }
  ];

  const [counter, setCounter] = useState(0);
  const changeCounter = () => {
    setCounter(counter+1);
  }

  localStorage.setItem("Name", "Prashanth");
  console.log("Prashanth");
  const triggerThisCallback = () => {
    alert("callback triggered");
  };

  
  return (
    <div>
      <button>
            <Link to="/">Home</Link>
          </button>
          <CartComponent></CartComponent>
      <SecondComponent handleCallback= {changeCounter} counter={counter} triggerThisCallback={triggerThisCallback}/>

      <div style={{ display: "flex" }}>
        {renderData.map(element =>
          <FirstComponent
            image={element.image}
            description={element.description}
            price={element.price}
            buttonText={element.buttonText}
            buttonText2={element.buttonText2}
          />)}
      </div>
    </div>)
};

export default ShoppingComponent;