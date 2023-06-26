import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Share/NavigationBar';
import Login from '../login/Login';

const LoginLayout = () => {
    return (
        <div>
            <Login></Login>
            
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;