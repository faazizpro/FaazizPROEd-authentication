import React from 'react';
import './Navbar.css'
import logo from '../../../Assets/logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
         .then( () => {})
         .catch( error => console.log(error));
    }

    return (
        <div className='m-0'>
            <div className="navbar bg-gray-900">
                <div className="navbar-start">
                    <div className='flex items-center gap-2'>
                        <img className='w-1/4' src={logo} alt="" /> <span className='text-sm lg:text-3xl font-bold text-white'><Link to='/'>FaazizPROEd</Link></span>
                    </div>
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-white rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold'><Link to='/course'>Course</Link></li>
                            <li className='font-bold'><Link to='/faq'>FAQ</Link></li>
                            <li className='font-bold'> <Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 lg:text-3xl text-white">

                        <li className='font-bold'><Link to='/course'>Course</Link></li>
                        <li className='font-bold'><Link to='/faq'>FAQ</Link></li>
                        <li className='font-bold'> <Link to='/blog'>Blog</Link></li>

                    </ul>
                </div>
                <div className="navbar-end gap-2 lg:gap-5">
                    {   !user &&
                        <Link to='/signup' className="btn text-base lg:text-xl bg-inherit lg:border-2 border-orange-300">Sign Up</Link>}


                    {user ?
                        <Link to='' onClick={handleLogOut} className="btn text-base lg:text-xl bg-inherit lg:border-2 border-orange-300">Sign Out</Link> :
                        null
                    }


                    <Link className=" text-base lg:text-xl bg-inherit  border-orange-300">
                        {user ?
                            <img className='rounded-full md:w-20'  src={user.photoURL} title={user.displayName} alt="" /> :
                            <Link to='/login' className="btn text-base lg:text-xl bg-inherit lg:border-2 border-orange-300">Login</Link>
                        }
                    </Link>


                    <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">

                        <span className="relative">
                            <input id="Toggle1" type="checkbox" className="hidden peer" />
                            <div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBar;