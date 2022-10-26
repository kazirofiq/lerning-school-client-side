import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-auto w-1/3'>

            <h2 className='text-center'>Login</h2>
            <form action="">
            
                <div className="form-control">
                <label className="label">
                <span className="label-text">Your Email</span>
                </label>
                <label className="input-group input-group-vertical">
                <span>Email</span>
                <input type="email" placeholder="info@site.com" name='email' className="input input-bordered" />
                </label>
                </div>
                <div className="form-control">
                <label className="label">
                <span className="label-text">Your Password</span>
                </label>
                <label className="input-group input-group-vertical">
                <span>Password</span>
                <input type="password" placeholder="info@site.com" name='password' className="input input-bordered" />
                </label>
                </div>
               
                    <button className="btn btn-outline btn-primary mt-3">Login</button>
                    <Link to='home'>
                        please register your account
                    </Link>
                    
                
                
            </form>
        </div>
    );
};

export default Login;