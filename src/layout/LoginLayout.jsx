import React from 'react';
import Navbar from '../Share/Navbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;