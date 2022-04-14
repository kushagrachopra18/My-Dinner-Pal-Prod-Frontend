import React from 'react';
import { Navigate } from 'react-router-dom';

import { Loading } from '../Loading';

export const PrivateRoute = ({validatingToken, loginStatus, children}) => {
    if(loginStatus){
        return children;
    }else if(validatingToken) {
        return <Loading/>;
    }else {
        return <Navigate to="/"/>;
    }
};