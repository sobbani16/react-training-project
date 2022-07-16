import logo from './logo.svg';
import './App.css';
import FirstComponent from "./Components/FirstComponent/FirstComponent";

function App() {

    const renderData = [
      {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_Logo_Blue_RGB_ai_renditionpicker_319x319-91970.png;maxHeight=70;maxWidth=120",
        description: "Samsung - 65” Class Q80B QLED 4K Smart Tizen TV",
        price: "$1,299.99",
        buttonText: "Add to cart"
      },
      {
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_Logo_Blue_RGB_ai_renditionpicker_319x319-91970.png;maxHeight=70;maxWidth=120",
        description: "Samsung - 65” Class Q80B QLED 4K Smart Tizen TV",
        price: "$1,299.99",
        buttonText: "Add to cart"
      }
    ]
  return (
    <div>
      {renderData.map(element =>
        <FirstComponent 
          image={element.image}
          description={element.description}
          price={element.price}
          buttonText={element.buttonText}
        />)}
    </div>
  );
}

export default App;
