import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export const LogInPopup = ({isOpen, closeFunction, setLoginStatus, toResetPasswordFunction}) => {
    let [processing, setProcessing] = useState(false);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const spinTransition = {
        loop: Infinity,
        ease: "linear",
        duration: 1,
    }

    const circleStyle = {
        display: "block",
        width: "18px",
        height: "18px",
        border: "3px solid #e9e9e9",
        borderTop: "3px solid #3498db",
        borderRadius: "50%",
        boxSizing: "border-box",
    };

    let buttonText = "Log In";
    if(processing){
        buttonText = (<motion.span
                            style={circleStyle}
                            animate={{ rotate: 360 }}
                            transition={spinTransition}
                        />);
    }

    if(isOpen){
        document.body.style.overflow = 'hidden';
        return(<>
            <div onClick={closeFunction} class="checkout_overlay"></div>
            <div class="checkout_popup success_popup">
                <button onClick={closeFunction} id="checkout_x">✕</button>
                <div className="checkout_title">
                    <h1>Log In</h1>
                    <h2>Enter your credentials below. Beta feature only</h2>
                </div>
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    setProcessing(true);
                    try {
                        const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/login', {'email': email,'password': password});
                        if(res.data.auth == true){
                            localStorage.setItem('token', res.data.token);
                            setEmail('');
                            setPassword('');
                            setErrorMessage('');
                            closeFunction();
                            setLoginStatus(true);
                            window.location.reload(false);
                        } else {
                            console.log(res.data);
                            setErrorMessage(res.data.message);
                            setLoginStatus(false);
                        }
                    } catch (error) {
                        setErrorMessage('Please email support@mydinnerpal.com, something is wrong on our end :)');
                        setLoginStatus(false);
                        console.log(error);
                    }
                    setProcessing(false);
                }}>
                    <label>
                        Email
                        <input 
                            type="text"
                            value={email}
                            disabled={processing}
                            onChange={(e)=> {setEmail(e.target.value)}}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            value={password}
                            disabled={processing}
                            onChange={(e)=> {setPassword(e.target.value)}}
                        />
                    </label>
                    <button className="popup_form_button" disabled={processing}>
                        {buttonText}
                    </button>
                    <a className="forgot_password_link" onClick={()=>{toResetPasswordFunction();}}>Forgot your password? Click here to reset</a>
                    <p className="error_message">{errorMessage}</p>
                </form>
            </div>
        </>);
    }
    document.body.style.overflow = 'unset';
    return(<></>);
};