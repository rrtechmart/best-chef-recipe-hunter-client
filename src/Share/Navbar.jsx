import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import ActiveLink from '../components/ActiveLink/ActiveLink';

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
                    <ActiveLink  className='ml-6' to="/">Home</ActiveLink>
                    <ActiveLink  className='ml-6 mr-6' to="/blog">Blog</ActiveLink>
                    
                    {user ? 
                    <div className='flex'>
                        <button onClick={handleLogOut}>Log out</button> 
                        <FaUser className='ml-6 ' style={{fontSize:'35px'}}></FaUser>
                    </div> 
                    :<ActiveLink className='ml-6' to="/login">Login</ActiveLink>
                            
                        
                    }
                </div>


            </div>
            
        </div>
    );
};

export default NavBar;