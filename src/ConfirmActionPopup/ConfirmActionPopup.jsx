import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export const ConfirmActionPopup = ({processing, isOpen, closeFunction, title, subtitle, confirmButtonInitialText, errorMessage, confirmFunction}) => {

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

    let confirmButtonText = confirmButtonInitialText;
    let cancelButtonText = "Cancel";
    if(processing){
        confirmButtonText = cancelButtonText = (<motion.span
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
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                <button className="popup_form_button" disabled={processing} onClick={confirmFunction}>
                    {confirmButtonText}
                </button>
                <button className="popup_form_button_white_background" disabled={processing} style={{'margin-top': '15px'}} onClick={closeFunction}>
                    {cancelButtonText}
                </button>
                <p className="error_message">{errorMessage}</p>
            </div>
        </>);
    }
    document.body.style.overflow = 'unset';
    return(<></>);
};