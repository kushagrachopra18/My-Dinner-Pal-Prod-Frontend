import React, { useEffect, useState } from 'react';
import { Loading } from '../Loading';
import axios from 'axios';
import { addScaleCorrection, motion } from 'framer-motion';
import { ConfirmActionPopup } from '../ConfirmActionPopup';

export const MyAccount = ({validateToken}) => { 
    const [confirmPauseEmailsPopupOpen, setConfirmPauseEmailsPopupOpen] = useState(false);

    const [confirmDeleteAccountPopupOpen, setConfirmDeleteAccountPopupOpen] = useState(false);
    
    const [processing, setProcessing] = useState(false);

    let user = JSON.parse(localStorage.getItem('user'));
    const [email, setEmail] = useState(user.email);
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name); 
    
    const [errorMessageAccountDetails, setErrorMessageAccountDetails] = useState('');


    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const [errorMessagePasswordInput, setErrorMessagePasswordInput] = useState('');

    const [errorMessagePauseEmailsPopup, setErrorMessagePauseEmailsPopup] = useState('');
    const [errorMessageDeleteAccountPopup, setErrorMessageDeleteAccountPopup] = useState('');

    const [errorMessageResumeEmails, setErrorMessageResumeEmails] = useState('');

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

    let accountDetailsButtonText = "Submit Changes";
    let changePasswordButtonText = "Submit Changes";
    let pauseEmailsButtonText = "Pause weekly meal plans";
    let resumeEmailsButtonText = "Resume weekly meal plans";
    let deleteAccountButtonText = "Delete my account";
    
    if(processing){
        accountDetailsButtonText=changePasswordButtonText=pauseEmailsButtonText=resumeEmailsButtonText=deleteAccountButtonText  = (<motion.span
                            style={circleStyle}
                            animate={{ rotate: 360 }}
                            transition={spinTransition}
                        />);
    }

    let resumeEmails = async () => {
        setProcessing(true);
        setErrorMessageResumeEmails();
        try {
            const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/updateEmailsPaused', {"emailsPaused":0}, {'headers': {
                'x-access-token': localStorage.getItem('token')
            }});
            if(res.data.updateSuccessful == true){
                localStorage.setItem('token', res.data.token);
                validateToken();
                setErrorMessageResumeEmails();
            } else {
                console.log(res.data);
                setErrorMessageResumeEmails(res.data.message);
            }
        } catch (error) {
            setErrorMessageResumeEmails('Please email support@mydinnerpal.com, something is wrong on our end :)');
            console.log(error);
        }
        setProcessing(false);
    };

    let setPauseEmailButton = () => {
        if(user.emails_paused){
            return(<>
                <button className="popup_form_button_white_background" disabled={processing} onClick={()=>{resumeEmails();}}>
                    {resumeEmailsButtonText}
                </button>
            </>);
        }
        return(<>
            <button className="popup_form_button_white_background" disabled={processing} onClick={()=>{setConfirmPauseEmailsPopupOpen(true);}}>
                {pauseEmailsButtonText}
            </button>
        </>);
    }

    let setUserInfo = () => {
        if(localStorage.getItem('user')){
            return(<>
            <div class="myaccount_inner_container">
                <div class='account_info_container'>
                    <h2 class="myaccount_subheader">Account Details</h2>
                    <form onSubmit={async (event) => {
                        event.preventDefault();
                        setProcessing(true);
                        setErrorMessageAccountDetails();
                        try {
                            const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/updateUserInfo', {'first_name': firstName,'last_name': lastName, 'email': JSON.parse(localStorage.getItem('user')).email, 'new_email': email}, {'headers': {
                                'x-access-token': localStorage.getItem('token')
                            }});
                            if(res.data.updateSuccessful == true){
                                localStorage.setItem('token', res.data.token);
                                validateToken();
                            } else {
                                console.log(res.data);
                                setErrorMessageAccountDetails(res.data.message);
                            }
                        } catch (error) {
                            setErrorMessageAccountDetails('Please email support@mydinnerpal.com, something is wrong on our end :)');
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
                        <button className="popup_form_button" disabled={processing}>
                            {accountDetailsButtonText}
                        </button>
                        <p className="error_message" style={{'color': '#EC7071'}}>{errorMessageAccountDetails}</p>
                    </form>
                </div>
                <div class='account_info_container'>
                    <h2 class="myaccount_subheader">Change Password</h2>
                    <form onSubmit={async (event) => {
                        event.preventDefault();
                        setProcessing(true);
                        setErrorMessagePasswordInput();
                        try {
                            const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/updatePassword', {'password': passwordInput,'confirmPassword': confirmPasswordInput}, {'headers': {
                                'x-access-token': localStorage.getItem('token')
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
                            {changePasswordButtonText}
                        </button>
                        <p className="error_message" style={{'color': '#EC7071'}}>{errorMessagePasswordInput}</p>
                    </form>
                </div>
                <div class='account_info_container'>
                    <h2 class="myaccount_subheader">Other Actions</h2>
                    {setPauseEmailButton()}
                    <p className="error_message" style={{'color': '#EC7071', 'margin-bottom': '0'}}>{errorMessageResumeEmails}</p>
                    <button className="popup_form_button_white_background" disabled={processing} onClick={()=>{setConfirmDeleteAccountPopupOpen(true);}}>
                        {deleteAccountButtonText}
                    </button>
                </div>
             </div>
             <ConfirmActionPopup
                processing={processing}
                isOpen={confirmPauseEmailsPopupOpen}
                closeFunction={async () => {
                    setConfirmPauseEmailsPopupOpen(false);
                }}
                title={"Pause Weekly Meal Plans"}
                subtitle={"Click “Pause weekly meal plans to confirm that you would like to pause recieveing your weekly meal plan."}
                confirmButtonInitialText={"Pause weekly meal plans"}
                errorMessage={errorMessagePauseEmailsPopup}
                confirmFunction={async () => {
                    setProcessing(true);
                    setErrorMessagePauseEmailsPopup();
                    try {
                        const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/updateEmailsPaused', {"emailsPaused":1}, {'headers': {
                            'x-access-token': localStorage.getItem('token')
                        }});
                        if(res.data.updateSuccessful == true){
                            localStorage.setItem('token', res.data.token);
                            validateToken();
                            setConfirmPauseEmailsPopupOpen(false);
                        } else {
                            console.log(res.data);
                            setErrorMessagePauseEmailsPopup(res.data.message);
                        }
                    } catch (error) {
                        setErrorMessagePauseEmailsPopup('Please email support@mydinnerpal.com, something is wrong on our end :)');
                        console.log(error);
                    }
                    setProcessing(false);
                }}
            />
            <ConfirmActionPopup
                processing={processing}
                isOpen={confirmDeleteAccountPopupOpen}
                closeFunction={() => {
                    setConfirmDeleteAccountPopupOpen(false);
                }}
                title={"Delete My Account"}
                subtitle={"Click “Permanently Delete my account” to confirm that you would like to perminently delete your account and stop recieving meal plans from My Dinner Pal."}
                confirmButtonInitialText={"Permanently Delete My Account"}
                errorMessage={errorMessageDeleteAccountPopup}
                confirmFunction={async () => {
                    setProcessing(true);
                    setErrorMessageDeleteAccountPopup();
                    try {
                        const res = await axios.post('https://my-dinner-pal-prod-backend.herokuapp.com/deleteAccount', {"email":JSON.parse(localStorage.getItem('user')).email}, {'headers': {
                            'x-access-token': localStorage.getItem('token')
                        }});
                        if(res.data.updateSuccessful == true){
                            localStorage.setItem('token', res.data.token);
                            validateToken();
                            setConfirmDeleteAccountPopupOpen(false);
                        } else {
                            console.log(res.data);
                            setErrorMessageDeleteAccountPopup(res.data.message);
                        }
                    } catch (error) {
                        setErrorMessageDeleteAccountPopup('Please email support@mydinnerpal.com, something is wrong on our end :)');
                        console.log(error);
                    }
                    setProcessing(false);
                }}
            />
            </>);
        }else {
            return <Loading/>;
        }
    }
    return(<>
        <div className="my_account_title">
            <h1>My Account</h1>
        </div>
        {setUserInfo()}
    </>);
}