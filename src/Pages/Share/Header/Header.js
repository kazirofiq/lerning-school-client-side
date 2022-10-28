import React from 'react';
import { Link } from 'react-router-dom';
import { FaSchool, FaUser } from 'react-icons/fa';
import RightSideNav from '../RightSideNav/RightSideNav';
import { useContext } from 'react';
import { AuthContest } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Theme } from 'react-daisyui';
import { useState } from 'react';


const Header = () => {
    const { user, logOut } = useContext(AuthContest);
    const [open, setOpen] = useState(false);
    

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

    

    
    return (
        <div className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3'>
           
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                    <label tabindex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li> <Link to="/home">Home</Link></li>
                        <li> <Link to="/faq">Faq</Link></li>
                        
                        <li><Link to="/course">Courses</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <div className='lg:hidden'>
                                <RightSideNav></RightSideNav>
                        </div>
                        
                    </ul>
                    </div>
                </div>
                <div className="navbar lg:-ml-28 ">
                    <Link to='/home' className="btn btn-ghost normal-case text-3xl">
                    <FaSchool className='mr-2'></FaSchool><span> Learning<span className='text-red-500'>School</span></span> </Link>
                </div>
                <div className="navbar-end ">
                    
                <ul className="flex gap-0 flex-col lg:flex-row list-none lg:ml-auto items-center">

                <li className="nav-item hidden lg:block">
                                    <Link to="/home"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                    
                                    >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item hidden lg:block">
                                    <Link to="courses"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                    
                                    >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Courses</span>
                                    </Link>
                                </li>
                                <li className="nav-item hidden lg:block">
                                    <Link to="/blog"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                                    
                                    
                                    >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blog</span>
                                    </Link>
                                </li>
                                <li className="nav-item hidden lg:block">
                                    <Link to="/faq"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                                    
                                    
                                    >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">FAQ</span>
                                    </Link>
                                </li>
                                
                                <li className="  nav-item flex px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 items-center">
                                   
                                  
                                    <i className="fab fa-pinterest  leading-lg  opacity-75 text-white lg:text-black flex gap-3 items-center">
                                        
                                    {
                                        user?.uid ?
                                        <>
                                        <span className='whitespace-nowrap'>{user?.displayName}</span>
                                        <p className='whitespace-nowrap'  onClick={handleLogOut}>Log out</p>
                                        </>
                                    :
                                    <>
                                        <Link className='fab fa-pinterest  leading-lg  opacity-75 text-white lg:text-black ' to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }

                            
                                <Link to="/profile"  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                    
                                    
                                    >
                                    {user?.photoURL?
 
                                     <img className='h-8 rounded-lg' src={user?.photoURL} alt="" />
                                    : 
                                        <span><FaUser></FaUser></span>
                                    }
                                    </Link>
                                    </i>
                                    
                                </li>

                                <li>
                                    <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-600">
                                    <span>Left</span>
                                    <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                                    </span>
                                    <span>Right</span>
                                    </label>
                                </li>
                                
                            </ul>

                          

                    </div>
                </div>
            </div>
    );
};

export default Header;