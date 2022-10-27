import React from 'react';
import { Link } from 'react-router-dom';
import { FaSchool, FaUser } from 'react-icons/fa';
import RightSideNav from '../RightSideNav/RightSideNav';
import { useContext } from 'react';
import { AuthContest } from '../../../contexts/AuthProvider/AuthProvider';
import { Button } from 'react-daisyui';

const Header = () => {
    const { user, logOut } = useContext(AuthContest);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                        <div className='lg:hidden'>
                                <RightSideNav></RightSideNav>
                        </div>
                        
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
                                   
                                  
                                    <i className="fab fa-pinterest text-lg leading-lg  opacity-75 text-white lg:text-black">
                                        
                                    {
                                        user?.uid ?
                                        <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                        </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
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
                                
                            </ul>

                          

                    </div>
                </div>
            </div>
    );
};

export default Header;