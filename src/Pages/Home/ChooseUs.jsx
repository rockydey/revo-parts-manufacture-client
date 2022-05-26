import React from 'react';
import { FaTools } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { BiMessageRoundedCheck } from "react-icons/bi";

const ChooseUs = () => {
    return (
        <section className='my-20 lg:mx-28 md:mx-12'>
            <div className="divider">
                <h1 className='text-center text-3xl uppercase tracking-wide'>WHY CHOOSE US?</h1>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10'>
                <div className='flex flex-col items-center'>
                    <p className='text-8xl text-secondary'><FaTools></FaTools></p>
                    <h1 className='text-xl font-bold my-5'>BEST MATERIALS</h1>
                    <p className='text-center text-lg'>We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-8xl text-secondary'><FiTruck></FiTruck></p>
                    <h1 className='text-xl font-bold  my-5'>PROFESSIONAL STANDARDS</h1>
                    <p className='text-center text-lg'>Our revo part's shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-8xl text-secondary'><BiMessageRoundedCheck></BiMessageRoundedCheck></p>
                    <h1 className='text-xl font-bold my-5'>EVERY JOB IS PERSONAL</h1>
                    <p className='text-center text-lg'>If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.</p>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;