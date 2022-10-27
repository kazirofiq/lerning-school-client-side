import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContest } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContest);
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            // if(user.emailVerified){
            //     // navigate(from, { replace: true });
            // }
            // else{
            //     toast.error('Your email is not verified. Please Verify')
            // }
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
        // .finally(() =>{
        //     setLoading(false);
        // })
    }
    return (
        <div className='mx-auto w-1/3'>

            <h2 className='text-center'>Login</h2>
            <form onSubmit={handleSubmit} action="">
            
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
                        <div>
                            <p>{error}</p>
                        </div>
                    <Link to='register'>
                        please register your account
                    </Link>
                    
                
                
            </form>
        </div>
    );
};

export default Login;