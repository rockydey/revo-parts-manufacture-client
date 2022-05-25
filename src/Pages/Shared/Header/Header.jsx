import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const logout = () => {
        signOut(auth);
    }

    return (
        <header className='bg-slate-900' style={{ boxShadow: "0 2px 2px 2px rgba(15, 23, 42, 0.25)" }}>
            <nav className="h-[60px] w-full flex items-center relative py-2 px-0 text-slate-100">
                <Link to="/" className="text-3xl font-semibold lg:mx-28 md:mx-12 mx-6">
                    <span>Revo</span> <span className='text-primary'>Parts</span>
                </Link>
                <button onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }} className="border-0 w-12 h-10 p-2 text-center rounded-full btn absolute top-[6px] md:right-12 right-6 lg:hidden block bg-primary hover:bg-rose-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-8"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div className={isNavExpanded ? "ml-auto navigation-menu expanded z-20" : "ml-auto navigation-menu"}>
                    <ul className='lg:flex items-center p-0 hidden lg:mx-28'>
                        <li className='mx-5'>
                            <Link className='block w-full text-lg' to="/home">Home</Link>
                        </li>
                        <li className='mx-5'>
                            <Link className='block w-full text-lg' to="/blogs">Blogs</Link>
                        </li>
                        {
                            user && <li className='mx-5'>
                                <Link className='block w-full text-lg' to="/dashboard">Dashboard</Link>
                            </li>
                        }
                        <li className='mx-5'>
                            <Link className='block w-full text-lg' to="/myPortfolio">My Portfolio</Link>
                        </li>
                        <li className='ml-5'>
                            {user ? <button onClick={logout} className='btn btn-outline btn-primary lg:w-full text-base rounded-full text-white inline-block text-center mt-3 lg:mt-0 tracking-wider'>Sign Out {user?.displayName?.split(' ')[0]}</button> : <Link className='block w-full text-lg' to="/login">Login</Link>}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;