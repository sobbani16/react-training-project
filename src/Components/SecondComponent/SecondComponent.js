import React, { useEffect } from 'react';

const SecondComponent = (props) => {

    const { handleCallback, counter, triggerThisCallback } = props;

    useEffect(() => {
        console.log("This is mounting phase");
        return () => {
            console.log("This is unmounting phase");
        };
    }, [counter]);


    return(
        <div>
            <img src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-562246_large-8b0e81ce-4d6c-4278-b7a4-5fb72131903b.jpg"/>
            <button onClick={handleCallback}>Click Callback</button>
            <button onClick={triggerThisCallback}>Trigger Callback</button>
            <div>{counter}</div>
            
        </div>
    )
};

export default SecondComponent;