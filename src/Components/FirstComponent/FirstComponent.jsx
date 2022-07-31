import React from 'react';
import './FirstComponent.css';
import { useDispatch } from 'react-redux';

const FirstComponent = (props) => {
    // console.log(props);
    const { image, description, price, buttonText, buttonText2 } = props;
    const dispatch = useDispatch();

    
    const handleOnclick = () => {
        dispatch({ type: 'ADD_CART_QUANTITY', payload: 1})
    };

    const handleOnDelete = () => {
        dispatch({
            type: 'DELETE_FROM_CART',
            payload: 1
        })
    }

    return(
        <div style={{ width: "200px", display: "flex", flexWrap: "wrap", flexDirection: "column", margin: "50px" }}>
            <img alt="Samsung Logo" width="85px" src={image}/>
            <span style={{ marginTop: "50px" }}>{description}</span>
            <span style={{ marginTop: "20px" }}>{price}</span>
            <button style={{ marginTop: "50px" }} onClick={handleOnclick}>{buttonText}</button>
            <button style={{ marginTop: "50px" }} onClick={handleOnDelete}>{buttonText2}</button>
        </div>
    );
};

export default FirstComponent;