import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../components/Home/Banner/Banner';

const Header = () => {
    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <div>
                <Link className="btn btn-ghost normal-case text-xl grow" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Register</Link>
                </div>

                <div>
                    <img src="" alt="image" />
                </div>
            </div>

            <div>
                <Banner></Banner>
            </div>
        </div>

    );
};

export default Header;