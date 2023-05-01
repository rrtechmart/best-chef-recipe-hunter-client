import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Navbar';

const Main = () => {
    return (
        <div>
            <h1>This is main layout </h1>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;