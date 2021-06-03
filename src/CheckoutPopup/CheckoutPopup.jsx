import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

import { CardSection } from '../CardSection';


export const CheckoutPopup = ({isOpen, closeFunction, plan, billCycle, price, toSuccessFunction}) => {
    const stripe = useStripe();
    const elements = useElements();

    let [processing, setProcessing] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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
    
    let checkoutText = "Confirm Payment";
    if(processing){
        checkoutText = (<motion.span
                            style={circleStyle}
                            animate={{ rotate: 360 }}
                            transition={spinTransition}
                        />);
    }

// This function was used for one off payments. It's in here just in case
    // const handleSubmit = async (event) => {
    //     if (!stripe || !elements) {
    //         // Stripe.js has not yet loaded.
    //         // Make sure to disable form submission until Stripe.js has loaded.
    //         return "Please try again. Stripe has not loaded. :)";
    //     }

    //     if(firstName == ""){
    //         return "First Name Empty"
    //     }
    //     if(lastName == ""){
    //         return "Last Name Empty"
    //     }
    //     if(email == ""){
    //         return "Email Empty"
    //     }

        
    //     const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/pay', {email: email, first_name: firstName, last_name: lastName});
    //     const clientSecret = await res.data['client_secret'];
    //     console.log(await clientSecret);
    //     const result = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //         card: elements.getElement(CardElement),
    //         billing_details: {
    //             name: firstName+" "+lastName,
    //             email: email,
    //         },
    //     }
    //     });
    //     if (result.error) {
    //         // Show error to your customer (e.g., insufficient funds)
    //         console.log(result.error.message);
    //         return result.error.message;
    //     } else {
    //         // The payment has been processed!
    //         if (result.paymentIntent.status === 'succeeded') {
    //             // Show a success message to your customer
    //             // There's a risk of the customer closing the window before callback
    //             // execution. Set up a webhook or plugin to listen for the
    //             // payment_intent.succeeded event that handles any business critical
    //             // post-payment actions.
    //             console.log("Payment Processed");
    //             return "success";
    //         }
    //     }
    // };

// This function is used for handling subsriptions
// !!!!!!!!!When you're not doing the free trial this whole function and the backend function need to change!!!!!!!!!
// Look at this for an example https://github.com/Vuka951/tutorial-code/blob/master/react-express-stripe/subscription/react-app/src/components/HomePage.js
    const handleSubmitSub = async (event) => {
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return "Please try again. Stripe has not loaded. :)";
        }

        if(firstName == ""){
            return "First Name Empty";
        }
        if(lastName == ""){
            return "Last Name Empty";
        }
        if(email == ""){
            return "Email Empty";
        }

        console.log("Something ran");
        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                        name: firstName+" "+lastName,
                        email: email,
            },
        });

        if (result.error) {
            console.log(result.error.message);
            return result.error.message;
        }else{
            const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/sub', {'payment_method': result.paymentMethod.id, 'email': email, 'firstName': firstName, 'lastName': lastName, 'plan': plan, 'billCycle': billCycle});
            // eslint-disable-next-line camelcase
            console.log(res);

            if(res.data.code){
                console.log('Payment Failed');
                console.log(res.data.raw.message);
                return res.data.raw.message;
            }

            const {client_secret, status} = res.data;
            console.log(status);

            if (status === 'requires_action') {
                const cardSetup = await stripe.confirmCardSetup(client_secret).then(function(result) {
                    console.log(result);
                    if (result.error) {
                        // Display error message in your UI.
                        // The card was declined (i.e. insufficient funds, card has expired, etc)
                        console.log('There was an issue');
                        console.log(result.error);
                        // console.log('Error Message Returned');
                        return result.error.message;
                    } else {
                        // Show a success message to your customer
                        console.log('Payment sucessful after confirmation');
                        return "success";
                    }
                });
                return cardSetup;
            } else if(status === "succeeded") {
                // No additional information was needed
                // Show a success message to your customer
                console.log('Payment sucessful');
                return "success";
            } else {
                //Unexpected status
                return "Error processing payment. Please try again or use a different card!";
            }
        }
  };

    if(isOpen){
        document.body.style.overflow = 'hidden';
        return(<>
            <div disabled={processing} onClick={closeFunction} class="checkout_overlay"></div>
            <div class="checkout_popup">
                <button disabled={processing} onClick={closeFunction} id="checkout_x">✕</button>
                <div className="checkout_title">
                    <h1>Checkout</h1>
                    <h2>Your subscription will start now.</h2>
                </div>
                <div className="checkout_features">
                    <p>➔ Total due now $0</p>
                    <p>➔ Subscribing to <span class="bold">{plan}</span></p>
                    <p>➔ After 30 days you will be billed {price}/{billCycle}</p>
                </div>
                <form onSubmit={async () => {
                    setProcessing(true);
                    const result = await handleSubmitSub();
                    setProcessing(false);
                    if(result === "success"){
                        // console.log("if ran");
                        toSuccessFunction();
                        setFirstName('');
                        setLastName('');
                        setEmail('');
                        setErrorMessage('');
                    }else{
                        // console.log(result);
                        // console.log('else ran. result value- '+result);
                        // alert(result);
                        setErrorMessage(result);
                    }
                }}>
                    <label>
                        First Name
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
                        Email
                        <input 
                            type="text"
                            value={email}
                            disabled={processing}
                            onChange={(e)=> {setEmail(e.target.value)}}
                        />
                    </label>
                    <CardSection />
                    <button id="checkout_button" disabled={!stripe || processing}>
                        {checkoutText}
                    </button>
                    <p className="error_message">{errorMessage}</p>
                </form>
            </div>
        </>);
    }
    document.body.style.overflow = 'unset';
    return(<></>);
};