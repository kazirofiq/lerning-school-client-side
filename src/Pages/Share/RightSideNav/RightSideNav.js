import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContest } from '../../../contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    const {providerLogin} = useContext(AuthContest);
    const googleProvider = new GoogleAuthProvider();

    

    useEffect(() =>{
       fetch('http://localhost:5000/educate-categories') 
       .then(res => res.json())
       .then(data => setCategories(data))
    } , [])

    const handleGoogleSign = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className=''>
            <h2>ALL COURSES {categories.length}</h2>
            {
                categories.map(course => <p key={course.id}>
                    <Link to={`/category/${course.id}`}>{course.name}</Link>
                </p>)
            }
            <div className="btn-group btn-group-vertical mt-4">
            <button onClick={handleGoogleSign} className="btn border-dashed border-2 border-indigo-600 mb-2 px-3 rounded-md btn-outline btn-primary"> <FaGoogle className='mr-2'></FaGoogle> Login with Google </button>
            <button className="btn border-dashed border-2 border-indigo-600 px-3 rounded-md btn-outline btn-secondary"><FaGithub className='mr-2'></FaGithub> Login with Github</button>
            
            </div>
        </div>
    );
};

export default RightSideNav;