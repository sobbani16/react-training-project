import React, { useState } from 'react';


const CounterComponent = () => {

    const [ count, setCount ] = useState(0);
    const handleAdd = () => {
        setCount(count+1);
    }

    const handleSubstract = () => {
        setCount(count-1);
    }

    return(
        <div>
            <span style={{ fontSize: "70px", margin: "300px" }}>Count is <span style={{color: "red"}}>{count}</span></span>
            <button style={{ fontSize: "70px", margin: "300px" }} onClick={handleAdd}>Add 1</button>
            <button style={{ fontSize: "70px", margin: "300px" }} onClick={handleSubstract}>Substract 1</button>
        </div>
    );
};

export default CounterComponent;