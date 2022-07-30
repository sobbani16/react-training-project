import React, { useState } from 'react';
import { Link } from 'react-router-dom';



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
            <button>
            <Link to="/">Home</Link>
          </button>
            <span style={{ fontSize: "70px", margin: "300px" }}>Count is <span style={{color: "red"}}>{count}</span></span>
            <hr/>
            <div style={{ textAlign: "center" }}>
                <button style={{ fontSize: "70px", marginRight: '200px' }} onClick={handleAdd}>Add 1</button>
                <button style={{ fontSize: "70px" }} onClick={handleSubstract}>Substract 1</button>
            </div>
        </div>
    );
};

export default CounterComponent;