import React from 'react';
import banner from '../../assists/banner.png';

const Banner = () => {
    return (
        <section className='h-[60vh] flex flex-col items-center justify-center' style={{ background: `url(${banner})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <h1 className='text-slate-100 md:text-5xl text-2xl tracking-wider'>YOUR CAR PARTS SUPPLIER</h1>
            <h3 className='text-slate-100 md:text-3xl text-lg md:mt-5 mt-4 lg:w-3/5 w-full text-center tracking-wider'>FOR ASIAN CARS, ELECTRIC CARS AND SHOCK ABSORBERS</h3>
            <a href='#parts' className='btn md:mt-5 mt-4 text-base outline-0 text-white font-semibold bg-gradient-to-r from-secondary to-primary'>Explore</a>
        </section>
    );
};

export default Banner;