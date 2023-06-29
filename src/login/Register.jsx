import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser, updateUserProfile}=useContext(AuthContext);

    // const [name, setName]= useState("");
    // const [email, setEmail]= useState("");
    // const [password, setPassword]= useState("");
    // const [error, setError]= useState("");

    const handleRegister =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value; 
        console.log(name, photoUrl, email, password)
        if(password.length < 6){
            Swal.fire({
                icon: 'error',
                title: 'Error!!!',
                text: 'Password should be 6 digit or more!!!'
              })
        }

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);

            updateUserProfile(name, photoUrl)
            .then(()=>{
                
            })
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Please</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Enter your name please" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoUrl' required placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="Enter your email please" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" required className="input input-bordered" />
                            
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <small className='text-center mb-2'> <p>Have an account?? <Link to='/login'> Login</Link> </p> </small>
                </div>
            </div>
        </div>
    );
};

export default Register;