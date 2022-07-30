import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const PasswordField = () => {
    const [showPassword, setShowPassword] = useState('password');
    const handleShowPassword = () => {
        if(showPassword === 'password') {
            setShowPassword('text');
        } else {
            setShowPassword('password');
        }
    };

    // Think of Event Handler

    return(
        <div>
            <button>
            <Link to="/">Home</Link>
          </button>
            <div  style={{ fontSize: "50px", margin: "100px" }}>Enter Password</div>
            <input type={showPassword}  style={{ fontSize: "50px", margin: "100px" }}></input>
            <button onClick={handleShowPassword}>Show password</button>
        </div>
    );
};

export default PasswordField;

// https://react-tutorial.app/