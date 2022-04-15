import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const BetaTesterSuccessPopup = ({isOpen, closeFunction}) => {
    if(isOpen){
        document.body.style.overflow = 'hidden';
        return(<>
            <div onClick={closeFunction} class="checkout_overlay"></div>
            <div class="checkout_popup success_popup">
                <button onClick={closeFunction} id="checkout_x">✕</button>
                <div className="checkout_title">
                    <h1>Success</h1>
                    <h2>You have sucessfully signed up as a beta tester.</h2>
                </div>
                <div id="success_body">
                    You will recieve a welcome email from us soon to confirm that you are good to go! If you do
                         not recieve an email from us in the next 10 minutes or if you have any questions please
                         send us an email! 
                         <br></br>
                         <br></br>
                         Meal plans are send to your email every Saturday! Click the button below to view and 
                         manage your account details.
                </div>
                <Link to="/account" class="header_buttion" onClick={()=>{closeFunction();}}>Go to my account</Link>
            </div>
        </>);
    }
    document.body.style.overflow = 'unset';
    return(<></>);
};