import React from 'react';

const Profile = () => {
    return (
        <div className='mx-auto w-1/3'>

        <h2 className='text-center'>Profile Update</h2>
        <form action="">
        
            <div className="form-control">
            <label className="label">
            <span className="label-text">Your Name</span>
            </label>
            <label className="input-group input-group-vertical">
            <span>Name</span>
            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required/>
            </label>
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group input-group-vertical">
            <span>PhotoURL</span>
            <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" required/>
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
            <input type="password" placeholder="Your password" name='password' className="input input-bordered" required/>
            </label>
            </div>
           
                <button className="btn btn-outline btn-primary mt-3">Submit</button>
                
                
            
            
        </form>
    </div>
    );
};

export default Profile;