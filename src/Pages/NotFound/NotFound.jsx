import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assists/404.jpg';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-slate-900 h-[100vh]'>
            <div className='mb-8 text-center'>
                <h1 className='md:text-3xl text-xl text-white font-semibold'>Opps! Sorry, Your Page isn't Found.</h1>
            </div>
            <img className='w-1/2 rounded-xl' src={notFound} alt="404 - Not Found" />
            <div className='mt-8 text-center'>
                <Link to='/' className='btn btn-primary text-white'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default NotFound;