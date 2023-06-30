import React from 'react';
import n1 from '../../assets/n1.png';

const NotFound = () => {
    return (
        <div>
            
            <img className='mx-auto' src={n1} alt="" />
            <h3 className='text-2xl text-center '>The page is not found that you are searching</h3>
            
        </div>
    );
};

export default NotFound;