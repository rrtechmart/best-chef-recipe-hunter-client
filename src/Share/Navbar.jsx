import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex bg-blue-600 justify-around p-4 rounded-md text-white'>

            <div className="navbar bg-primary text-primary-content w-4/5">
                <a className="btn btn-ghost normal-case text-xl">The Best Chef Recipe Hunter</a>
                <NavLink className='ml-6' to="/">Home</NavLink>
                <NavLink className='ml-6' to="/blog">Blog</NavLink>
                <NavLink className='ml-6' to="/login">Login</NavLink>

            </div>
            <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
    );
};

export default NavBar;