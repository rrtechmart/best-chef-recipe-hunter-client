import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import ActiveLink from '../components/ActiveLink/ActiveLink';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className='flex bg-blue-600 justify-around p-1 rounded-md text-white'>

            <div className="navbar grid md:grid-cols-2 text-primary-content w-4/5 justify-between">
                <div>
                    <a className="btn btn-ghost normal-case text-xl">The Best Chef Recipe Hunter</a>
                </div>
                <div className='justify-around'>
                    <ActiveLink  className='text-xl mr-6' to="/">Home</ActiveLink>
                    <ActiveLink  className='text-xl ml-6' to="/blog">Blog</ActiveLink>
                    
                    {user ? 
                    <div className='flex'>
                        <button className='text-xl ml-6' onClick={handleLogOut}>Log out</button> 
                                                
                        <img title={user?.displayName}  className='w-[35px] h-[35px] rounded ml-6 ' src={user?.photoURL} alt="" />
                        
                    </div> 
                    :<ActiveLink className='text-xl ml-6' to="/login">Login</ActiveLink>
                          
                    }    
                </div>


            </div>
            
        </div>
    );
};

export default NavBar;