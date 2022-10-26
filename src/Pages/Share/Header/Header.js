import React from 'react';
import { Link } from 'react-router-dom';
import { FaSchool, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3'>
           
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown lg:hidden">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li> <Link to="/home">Home</Link></li>
                        <li> <Link to="/topic">Topic</Link></li>
                        
                        <li><Link to="/statics">Static</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                    </div>
                </div>
                <div class="navbar-start ">
                    <Link to='/home' className="btn btn-ghost normal-case text-3xl">
                    <FaSchool className='mr-2'></FaSchool><span> Learning<span className='text-red-500'>School</span></span> </Link>
                </div>
                <div class="navbar-end ">
                    
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                <li className="nav-item">
                                    <Link to="/home"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                    
                                    >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="courses"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                    
                                    >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Courses</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blog"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                                    
                                    
                                    >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blog</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/toggle"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                    
                                    >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Toggle Theem</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                    
                                    >
                                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/profile"
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                    
                                    >
                                    <i className="fab fa-pinterest text-lg leading-lg  opacity-75">
                                        <FaUser></FaUser>
                                    </i>
                                    </Link>
                                </li>
                                
                            </ul>

                    </div>
                </div>
            </div>
    );
};

export default Header;