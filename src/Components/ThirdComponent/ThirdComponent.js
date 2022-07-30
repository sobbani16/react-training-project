import React, { useEffect, useState } from 'react';

const ThirdComponent = () => {

    const [ count, setCount] = useState(0);
    const [ name, setName] = useState("Prashanth");

      useEffect(() => {
        console.log("This is mounting phase");
        return () => {
            console.log("This is unmounting phase");
        };
      }, []);

      const handleAdd = () => {
        setCount(count+1);
    }

    const handleSubstract = () => {
        setCount(count-1);
    }


    return(
        <div>
            <h1>Third Component is rendered</h1>
            <span style={{ fontSize: "70px", margin: "300px" }}>Count is <span style={{color: "red"}}>{count}</span></span>
            <hr/>
            <div style={{ textAlign: "center" }}>
                <button style={{ fontSize: "70px", marginRight: '200px' }} onClick={handleAdd}>Add 1</button>
                <button style={{ fontSize: "70px" }} onClick={handleSubstract}>Substract 1</button>
            </div>
        </div>)
};

export default ThirdComponent;