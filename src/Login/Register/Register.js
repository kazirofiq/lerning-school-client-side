import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mx-auto w-1/3'>

        <h2 className='text-center'>Register</h2>
        <form action="">
        
            <div className="form-control">
            <label className="label">
            <span className="label-text">Your Name</span>
            </label>
            <label className="input-group input-group-vertical">
            <span>Name</span>
            <input type="text" placeholder="info@site.com" name='name' className="input input-bordered" required/>
            </label>
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Your Email</span>
            </label>
            <label className="input-group input-group-vertical">
            <span>Email</span>
            <input type="Email" placeholder="info@site.com" name='Email' className="input input-bordered" required />
            </label>
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Your Password</span>
            </label>
            <label className="input-group input-group-vertical">
            <span>Password</span>
            <input type="password" placeholder="info@site.com" name='password' className="input input-bordered" required/>
            </label>
            </div>
           
                <button className="btn btn-outline btn-primary mt-3">Login</button>
                <Link to='login'>
                    <p>All ready have an account <Link to='/login'><span>Login</span></Link></p>
                </Link>
                
            
            
        </form>
    </div>
    );
};

export default Register;