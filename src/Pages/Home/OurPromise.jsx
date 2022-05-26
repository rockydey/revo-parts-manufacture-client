import React from 'react';
import { Link } from 'react-router-dom';

const OurPromise = () => {
    return (
        <section className='my-20 lg:mx-28 md:mx-12'>
            <div className="divider">
                <h1 className='text-center text-3xl uppercase tracking-wide'>OUR PROMISE</h1>
            </div>
            <div className='mt-10 text-center'>
                <h1 className='text-center text-xl mb-5'>As a specialist car parts supplier we bring you the parts you need</h1>
                <p className='text-center text-base mb-5'>We have been a car parts supplier since 1996. From the start we are a specialist. First in parts for Asian cars and now also in shock absorbers for all brands and in parts for all electric vehicles. We always look for opportunities to fulfil your needs. By being a specialist we can promis you full ranges, high availablity, premium quality and competitive prices. </p>
                <p className='text-center text-base mb-5'>Only the best is good enough for us. We have built strong relations with them so we can offer excellent prices, without compromising on quality. Our parts are made of superior-quality material and tested to perfection. We promise best-quality car parts for the best price and offer a standard warranty of three years.</p>
                <p className='text-center text-base mb-5'>We take service to a higher level. We want to grow our joint business – by being flexible, loyal and transparent. We strive for long-term partnerships as we believe that is the base for a solid, secure and future-proof cooperation, which is valuable and profitable for both parties.</p>
                <h2 className='text-center text-lg font-semibold uppercase mb-5'>GET TO KNOW US BETTER</h2>
                <Link to='/' className='text-secondary uppercase text-lg border-b-2 border-secondary'>Contact Us!</Link>
            </div>
        </section>
    );
};

export default OurPromise;