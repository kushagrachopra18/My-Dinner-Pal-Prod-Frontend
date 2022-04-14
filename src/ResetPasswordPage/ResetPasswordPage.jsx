import React, { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { Loading } from '../Loading';
import axios from 'axios';
import { addScaleCorrection, motion } from 'framer-motion';

export const ResetPasswordPage = ({loginStatus, validateToken}) => { 
    const [searchParams, setSearchParams] = useSearchParams();
    let urlToken = searchParams.get("token");

    const [processing, setProcessing] = useState(false);

    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const [errorMessagePasswordInput, setErrorMessagePasswordInput] = useState('');

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

    let buttonText = "Reset Password";
    
    if(processing){
        buttonText = (<motion.span
                            style={circleStyle}
                            animate={{ rotate: 360 }}
                            transition={spinTransition}
                        />);
    }

    if(loginStatus){
        return <Navigate to="/account"/>;
    }

    if(!urlToken){
        return <>
            <h1>Sorry, token not detected :(</h1>
            <h2>Please email support@mydinnerpal.com and we'll help you reset your password promptly!</h2>
        </>
    }

    return(<>
            <div className="my_account_title">
                <h1>Reset Password</h1>
            </div>
            <div class="myaccount_inner_container">
                <div class='account_info_container' id="reset_password_form_container">
                    <form onSubmit={async (event) => {
                        event.preventDefault();
                        setProcessing(true);
                        setErrorMessagePasswordInput();
                        try {
                            const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/updatePassword', {'password': passwordInput,'confirmPassword': confirmPasswordInput}, {'headers': {
                                'x-access-token': urlToken
                            }});
                            if(res.data.updateSuccessful == true){
                                localStorage.setItem('token', res.data.token);
                                validateToken();
                                setPasswordInput('');
                                setConfirmPasswordInput('');
                                setErrorMessagePasswordInput('Successfully changed password');
                            } else {
                                console.log(res.data);
                                setErrorMessagePasswordInput(res.data.message);
                            }
                        } catch (error) {
                            setErrorMessagePasswordInput('Please email support@mydinnerpal.com, something is wrong on our end :)');
                            console.log(error);
                        }
                        setProcessing(false);
                    }}>
                        <label>
                            New Password
                            <input 
                                type="text"
                                value={passwordInput}
                                disabled={processing}
                                onChange={(e)=> {setPasswordInput(e.target.value)}}
                            />
                        </label>
                        <label>
                            Confirm New Password
                            <input 
                                type="text"
                                value={confirmPasswordInput}
                                disabled={processing}
                                onChange={(e)=> {setConfirmPasswordInput(e.target.value)}}
                            />
                        </label>
                        <button className="popup_form_button" disabled={processing}>
                            {buttonText}
                        </button>
                        <p className="error_message" style={{'color': '#EC7071'}}>{errorMessagePasswordInput}</p>
                    </form>
                </div>
            </div>
    </>);
}