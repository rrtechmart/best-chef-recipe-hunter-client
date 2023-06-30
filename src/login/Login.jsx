import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [user, setUser] =useState(null);
    const [error, setError]=useState('');

    const {signIn, googleSignIn, githubSignIn}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handelSignIn= event =>{
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(!/(?=.*?[a-z])/.test(password)){
            setError('Please add at least one lower case english latter ')
            return;
        }

         else if(!/(?=.*?[0-9])/.test(password)){
            setError('Please add at least one number')
            return;
        }

        else if(password.length < 6){
            setError('Please add at least 6 character in your password')
            return;
        }

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
            setError('');
            form.reset();

            navigate(from, {replace:true})
        })

        .catch(error =>{
            const loginError = ('Either email or password is not correct');
            setError(loginError);
        })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error);
            
        })
    }

    const handleGithubSignIn = () =>{
        githubSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.log(error)
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

                        <Link onClick={handleGoogleSignIn} className="btn btn-outline btn-warning">Google Sign-in</Link>
                        <Link onClick={handleGithubSignIn} className="btn btn-outline btn-warning">Github Sign-in</Link>
                    </form>

                    <p className='text-center mb-2'>Are you new?? <span> <Link to="/register"> Register</Link> </span> </p>

                    <small className='text-red-500 mx-auto my-4'> {error} </small>
                </div>
            </div>
        </div>
    );
};

export default Login;