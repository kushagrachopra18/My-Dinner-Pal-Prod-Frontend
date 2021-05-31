import React, { useState } from 'react';

export const SuccessPopup = ({isOpen, closeFunction}) => {
    if(isOpen){
        document.body.style.overflow = 'hidden';
        return(<>
            <div onClick={closeFunction} class="checkout_overlay"></div>
            <div class="checkout_popup success_popup">
                <button onClick={closeFunction} id="checkout_x">✕</button>
                <div className="checkout_title">
                    <h1>Success</h1>
                    <h2>Your payment was sucessfully processed.</h2>
                </div>
                <div id="success_body">
                    You will recieve a welcome email from us soon to confirm that you are good to go! If you do
                         not recieve an email from us in the next 10 minutes or if you have any questions please
                         send us an email!
                </div>
                <a href="mailto:kushagrachopra16@gmail.com" target="_blank" class="try_free_button">Email Us</a>
            </div>
        </>);
    }
    document.body.style.overflow = 'unset';
    return(<></>);
};