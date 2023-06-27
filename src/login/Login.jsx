import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {user, signIn}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handelSignIn= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);

            navigate(from, {replace:true})
        })

        .catch(error =>{
            console.log(error);
        })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Please</h1>
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignIn} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter your email please" required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" required className="input input-bordered" />                           
                        </div>

                        <div className="form-control bg-blue-400 mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>

                        <Link className="btn btn-outline btn-warning">Google Sign-in</Link>
                        <Link className="btn btn-outline btn-warning">Github Sign-in</Link>
                    </form>

                    <p className='text-center mb-2'>Are you new?? <span> <Link to="/register"> Register</Link> </span> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;