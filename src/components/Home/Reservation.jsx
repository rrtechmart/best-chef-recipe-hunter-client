import React from 'react';
import { Link } from 'react-router-dom';
import reservation from '../../assets/res-1.png';
import booking from '../../assets/book.png';

const Reservation = () => {
    return (
        <div>
            <h1 className='text-6xl font-bold'>Make a Reservation </h1>
            <div className='grid md:grid-cols-2 my-10'>
                <div className='mb-2'>
                    <img className='rounded-lg' src={reservation} alt="" />
                </div>
                <div className='w-2/3 mx-auto'>
                    <img className='rounded-lg h-[350px] mb-10' src={booking} alt="" />
                    <Link className="btn btn-primary ml-1 md:ml-6 md:w-[350px] text-2xl font-bold"> <button >Make Reserve</button> </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Reservation;