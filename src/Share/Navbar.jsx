import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='flex bg-blue-600 justify-around p-1 rounded-md text-white'>

            <div className="navbar text-primary-content w-4/5 justify-between">
                <div>
                    <a className="btn btn-ghost normal-case text-xl">The Best Chef Recipe Hunter</a>
                </div>
                <div>
                    <NavLink className='ml-6' to="/">Home</NavLink>
                    <NavLink className='ml-6 mr-6' to="/blog">Blog</NavLink>
                    {user ? <button onClick={handleLogOut}>Log out</button> :
                        <div>
                            <NavLink className='ml-6' to="/login">Login</NavLink>
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                        </div>
                    }
                </div>


            </div>
            
        </div>
    );
};

export default NavBar;