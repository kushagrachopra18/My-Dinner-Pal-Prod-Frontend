import React, { useEffect, useState, useRef } from 'react';
import { LogInPopup } from '../LogInPopup';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { PrivateRoute } from '../PrivateRoute';
import { ResetPasswordPopup } from '../ResetPasswordPopup';
import { ResetPasswordPage } from '../ResetPasswordPage';
import { CreateAccountPopup } from '../CreateAccountPopup';
import { BetaTesterSuccessPopup } from '../BetaTesterSuccessPopup';
import axios from 'axios';

import { Route, HashRouter as Router, Routes, Link, Navigate} from "react-router-dom";

export const App = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const [validatingToken, setValidatingToken] = useState(true);

    const [createAccountOpen, setCreateAccountOpen] = useState(false);
    const [betaTesterSuccessOpen, setBetaTesterSuccessOpen] = useState(false);

    const [resetPasswordOpen, setResetPasswordOpen] = useState(false);

    let pricingPanelRef = useRef();

    let validateToken = async () => {
        console.log('ran');
        if(localStorage.getItem('token')){
            setValidatingToken(true);
            try {
                const res = await axios.get('https://my-dinner-pal-prod-backend.herokuapp.com/getUserInfo', {
                    'headers': {
                        'x-access-token': localStorage.getItem('token')
                    }
                }); 
                // const res = {'data': {
                //     'auth': false
                // }};
                if(res.data.auth == true){
                    setLoginStatus(true);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    // localStorage.setItem('test','test');
                } else {
                    setLoginStatus(false);
                }
            } catch (error) {
                console.log(error);
                setLoginStatus(false);
            }
        }
        setValidatingToken(false);
    }
    useEffect(() => {
        validateToken();
    }, []);

    let setNavButtons = (loginStatus) => {
        if(loginStatus){
            return (<>
                <a onClick={() => {
                            localStorage.clear();
                            validateToken();
                            window.location.reload(false);
                        }} class="header_buttion log_in_button">Sign out</a>
                <Link to="/account" class="header_buttion">My Account</Link>
            </>);
        }
        return (<>
            <a onClick={() => {setLoginOpen(true)}} class="header_buttion log_in_button">Log in</a>
            <a class="header_buttion" onClick={()=>{
                pricingPanelRef.current.scrollIntoView({ behavior: 'smooth' })
            }}>Sign up / Try FREE</a>
        </>);
    }

    return (<>
    <Router>
    <div class="main_page_wrapper">
    <header class="site-header" style={{left:0}}>
        <Link to="/" class="site-identity">
                <img src="/images/My Dinner Pal Mustache Logo.png" alt="My Dinner Pal Logo"></img>
                <h1>
                    <href id="nav_header">My Dinner Pal</href>
                </h1>
        </Link>
        <div class="header_button_wrapper">
           {setNavButtons(loginStatus)}
        </div>
    </header>

    <Routes>
        <Route path="*" to="/" element={<Navigate to="/" replace />} />
        <Route path="/" 
            element={<Home
                pricingPanelRef={pricingPanelRef}
                openCreateAccountPopup={() => {
                    setCreateAccountOpen(true)
                }}
            />} 
        
        />
        <Route 
            path='/account' 
            element={
                <PrivateRoute
                validatingToken={validatingToken}    
                loginStatus={loginStatus}
                >
                    <MyAccount
                        validateToken={validateToken}
                    />
                </PrivateRoute>
            } 
        />
        <Route path="/reset_password" 
            element={<ResetPasswordPage
            validateToken={validateToken}
                loginStatus={loginStatus}
            />} 
        />
    </Routes>
    </div>
    <div class="footer">
        <div class="footer_info">
            <p>© 2022 by My Dinner Pal LLC</p>
            <p>Please contact us with any questions or conscerns!</p>
            <p>To upgrade or cancel your subscription just send us an email and we will take care of it promptly!</p>
            <p>support@mydinnerpal.com</p>
            <p>(336) 406-8998</p>
        </div>
    </div>

    <LogInPopup
        isOpen={loginOpen}
        closeFunction={() => {
            setLoginOpen(false);
        }}
        setLoginStatus = {setLoginStatus}
        toResetPasswordFunction={() => {
            setLoginOpen(false);
            setResetPasswordOpen(true);
        }}
        validateToken={validateToken}
    />
    <ResetPasswordPopup
         isOpen={resetPasswordOpen}
         closeFunction={() => {
             setResetPasswordOpen(false);
         }}
         toLoginFunction={() => {
            setResetPasswordOpen(false);
            setLoginOpen(true);
        }}
    />
    <CreateAccountPopup
        isOpen={createAccountOpen}
        toLogIn={()=>{
            setCreateAccountOpen(false);
            setLoginOpen(true);
        }}
        closeFunction={() => {
            setCreateAccountOpen(false);
        }}
        toSuccessPopup={()=>{
            setCreateAccountOpen(false);
            setBetaTesterSuccessOpen(true);
        }}
        validateToken={validateToken}
    />
    <BetaTesterSuccessPopup
        isOpen={betaTesterSuccessOpen}
        closeFunction={() => {
            setBetaTesterSuccessOpen(false);
        }}
    />
    </Router>
    </>)
};