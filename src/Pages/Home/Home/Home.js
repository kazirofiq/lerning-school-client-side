import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
    
            <div className="card p-6 lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://image.shutterstock.com/image-vector/online-education-vector-illustration-elearning-600w-1304326324.jpg" alt="Album"/></figure>
            <div className="card-body">
            <h2 className="card-title text-4xl">Learn <span className='text-purple-600 '>Without</span> Limits</h2>
            <h2 className='text-lg font-bold '>Your Career in Programing Starts Here</h2>
            <p>Click the button to listen on Our Course Details.</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary w-40 whitespace-nowrap flex justify-center"><Link className='flex justify-between gap-3' to='/courses'>Course <FaArrowAltCircleRight></FaArrowAltCircleRight></Link></button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Home;