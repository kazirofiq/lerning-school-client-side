import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContest } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContest);

    const {providerLogin, gitProviderLogin  } = useContext(AuthContest);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
    
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            // handleUpdateUserProfile(name, photoURL)
            // handleEmailVerification();
            // toast.success('Please verify your email address before login')
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        });
    
    }

    // const handleEmailVerification = () =>{
    //     verifyEmail()
    //     .then(() =>{})
    //     .catch(error => console.error(error))
    // }


    // const handleUpdateUserProfile = (name, photoURL) =>{
    //     const profile ={
    //         displayName: name,
    //         photoURL: photoURL
    //     }
    //     handleUpdateUserProfile(profile)
    //     .then(() =>{})
    //     .catch(error => console.error(error))
    // }

    // const handleAccepted = event =>{
    //     setAccepted(event.target.checked);
    // }
    const handleGoogleSign = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    const handleGithubSign = () =>{
        gitProviderLogin (githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='mx-auto w-1/3'>

        <h2 className='text-center'>Register</h2>
        <form onSubmit={handleSubmit}  action="">
        
            <div className="form-control">
            <label className="label">
            </label>
            <label className="input-group input-group-vertical">
            <span>Name</span>
            <input type="text" placeholder="Yor Name" name='name' className="input input-bordered" required/>
            </label>
            </div>
            <div className="form-control">
            <label className="label">
            </label>
            <label className="input-group input-group-vertical">
            <span>URL</span>
            <input type="text" placeholder="Yor photo Url" name='photoURL' className="input input-bordered" required/>
            </label>
            </div>
            <div className="form-control">
            <label className="label">
            </label>
            <label className="input-group input-group-vertical">
            <span>Email</span>
            <input type="email" placeholder="Your Email" name='email' className="input input-bordered" required />
            </label>
            </div>
            <div className="form-control">
            <label className="label">
            </label>
            <label className="input-group input-group-vertical">
            <span>Password</span>
            <input type="password" placeholder="Your Password" name='password' className="input input-bordered" required/>
            </label>
            </div>
           
                <button className=" w-full btn btn-outline btn-primary mt-3">Register</button>

                <div className='m-2'>
                    <p>..........Login with social media..............</p>

                    <div className='flex gap-10 justify-center m-4'>
                        <FaGoogle onClick={handleGoogleSign} className='text-xl'></FaGoogle>
                        <FaGithub onClick={handleGithubSign } className='text-xl'></FaGithub>
                    </div>
                </div>

                <Link to='login'>
                    <p>All ready have an account <Link to='/login'><span className='text-blue-700'>Login</span></Link></p>
                </Link>
                
            
            
        </form>
    </div>
    );
};

export default Register;