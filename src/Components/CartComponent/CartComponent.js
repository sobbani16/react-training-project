import React from "react";
import { useSelector } from "react-redux";

const CartComponent = () => {
    const { cartQuantity } = useSelector((state)=> state);

    let diplayText = `Cart Quantity is ${cartQuantity}`;

    return(
        <div>
            <h1>{diplayText}</h1>
        </div>)
};

export default CartComponent;