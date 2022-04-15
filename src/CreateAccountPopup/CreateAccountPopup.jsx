import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export const CreateAccountPopup = ({isOpen, closeFunction, toLogIn, toSuccessPopup, validateToken}) => {
    let [processing, setProcessing] = useState(false);
    
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accessCode, setAccessCode] = useState('');

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

    let buttonText = "Create Account";
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
                    <h1>Create account</h1>
                    <h2>Create your account below. Beta feature only</h2>
                </div>
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    setProcessing(true);
                    try {
                        const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/signup', 
                            {'email': email,'firstName': firstName,'lastName': lastName,
                            'password': password,'confirmPassword': confirmPassword,
                            'accessCode': accessCode});
                        if(res.data.auth == true){
                            localStorage.setItem('token', res.data.token);
                            setEmail('');
                            setFirstName('');
                            setLastName('');
                            setPassword('');
                            setConfirmPassword('');
                            setAccessCode('');
                            setErrorMessage('');
                            await validateToken();
                            toSuccessPopup();
                        } else {
                            console.log(res.data);
                            setErrorMessage(res.data.message);
                        }
                    } catch (error) {
                        setErrorMessage('Please email support@mydinnerpal.com, something is wrong on our end :)');
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
                        First name
                        <input 
                            type="text"
                            value={firstName}
                            disabled={processing}
                            onChange={(e)=> {setFirstName(e.target.value)}}
                        />
                    </label>
                    <label>
                        Last Name
                        <input 
                            type="text"
                            value={lastName}
                            disabled={processing}
                            onChange={(e)=> {setLastName(e.target.value)}}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            type="text"
                            value={password}
                            disabled={processing}
                            onChange={(e)=> {setPassword(e.target.value)}}
                        />
                    </label>
                    <label>
                        Confirm Password
                        <input 
                            type="text"
                            value={confirmPassword}
                            disabled={processing}
                            onChange={(e)=> {setConfirmPassword(e.target.value)}}
                        />
                    </label>
                    <label id="access_code_label">
                        Special Access Code
                        <input 
                            type="text"
                            value={accessCode}
                            disabled={processing}
                            onChange={(e)=> {setAccessCode(e.target.value)}}
                        />
                    </label>
                    <button className="popup_form_button" disabled={processing}>
                        {buttonText}
                    </button>
                    <a className="forgot_password_link" onClick={()=>{toLogIn();}}>Already have an account? Click here to log in</a>
                    <p className="error_message">{errorMessage}</p>
                </form>
            </div>
        </>);
    }
    document.body.style.overflow = 'unset';
    return(<></>);
};