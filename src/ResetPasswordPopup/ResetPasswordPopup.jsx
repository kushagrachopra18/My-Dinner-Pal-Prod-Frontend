import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export const ResetPasswordPopup = ({isOpen, closeFunction, toLoginFunction}) => {
    let [processing, setProcessing] = useState(false);
    
    const [email, setEmail] = useState('');

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

    let buttonText = "Send password reset email";
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
                    <h1>Reset Password</h1>
                    <h2>Enter your email below.</h2>
                </div>
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    setErrorMessage();
                    setProcessing(true);
                    try {
                        const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/send_password_reset_email', {'email': email});
                        if(res.data.success == true){
                            setEmail('');
                            setErrorMessage(`Password reset email successfully sent to ${email}. Please email support@mydinnerpal.com if you can't find it :)`);
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
                    <button className="popup_form_button" disabled={processing}>
                        {buttonText}
                    </button>
                    <a className="forgot_password_link" onClick={()=>{toLoginFunction();}}>Already have an account? Click here to log in</a>
                    <p className="error_message">{errorMessage}</p>
                </form>
            </div>
        </>);
    }
    document.body.style.overflow = 'unset';
    return(<></>);
};