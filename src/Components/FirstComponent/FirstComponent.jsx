import React from 'react';
import './FirstComponent.css';

const FirstComponent = (props) => {
    // console.log(props);
    const { image, description, price, buttonText } = props;

    
    const handleOnclick = () => {
        alert("You are trying to add to cart !!!")
    };

    return(
        <div style={{ width: "200px", display: "flex", flexWrap: "wrap", flexDirection: "column", margin: "50px" }}>
            <img alt="Samsung Logo" width="85px" src={image}/>
            <span style={{ marginTop: "50px" }}>{description}</span>
            <span style={{ marginTop: "20px" }}>{price}</span>
            <button style={{ marginTop: "50px" }} onClick={handleOnclick}>{buttonText}</button>
        </div>
    );
};

export default FirstComponent;