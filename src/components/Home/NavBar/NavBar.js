import React from 'react';
import './Navbar.css'
import logo from '../../../Assets/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className='flex items-center gap-2'>
                        <img className='w-1/4' src={logo} alt="" /> <span className='text-sm lg:text-3xl font-bold text-white'>FaazizPROEd</span>
                    </div>
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold'><Link>Course</Link></li>
                            <li className='font-bold'><Link>FAQ</Link></li>
                            <li className='font-bold'> <Link>Blog</Link></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /> FaazizPROEd</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 lg:text-3xl text-white">
                            <li className='font-bold'><Link>Course</Link></li>
                            <li className='font-bold'><Link>FAQ</Link></li>
                            <li className='font-bold'> <Link>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2 lg:gap-5 ">
                    <a className="btn lg:text-2xl bg-inherit lg:border-2 border-orange-300">Sign Up</a>
                    <a className="btn lg:text-2xl bg-inherit lg:border-2 border-orange-300">Login</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;