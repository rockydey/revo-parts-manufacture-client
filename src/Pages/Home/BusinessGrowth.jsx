import React from 'react';
import businessBg from '../../assists/businessBG.png'
import { AiOutlineFlag, AiOutlineDollarCircle, AiOutlineDeliveredProcedure } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import CountUp from 'react-countup';

const BusinessGrowth = () => {
    return (
        <div style={{ background: `url(${businessBg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className='my-20 lg:mx-28 md:mx-12 mx-6'>
                <div className="divider">
                    <h1 className='text-center text-3xl uppercase tracking-wide'>Our Business Growth</h1>
                </div>
                <div className='mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
                    <div className='flex flex-col items-center'>
                        <p className='text-8xl text-secondary mb-3'><AiOutlineFlag /></p>
                        <CountUp start={0} end={78} delay={3}>
                            {({ countUpRef }) => (
                                <div className='text-5xl text-slate-900 font-semibold'>
                                    <span ref={countUpRef} />
                                    <span>+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-secondary text-2xl font-semibold mt-3'>Countries</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-8xl text-secondary mb-3'><BsPeopleFill /></p>
                        <CountUp start={0} end={38} delay={3}>
                            {({ countUpRef }) => (
                                <div className='text-5xl text-slate-900 font-semibold'>
                                    <span ref={countUpRef} />
                                    <span>K+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-secondary text-2xl font-semibold mt-3'>Cutomers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-8xl text-secondary mb-3'><AiOutlineDollarCircle /></p>
                        <CountUp start={0} end={115} delay={3}>
                            {({ countUpRef }) => (
                                <div className='text-5xl text-slate-900 font-semibold'>
                                    <span ref={countUpRef} />
                                    <span>M+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-secondary text-2xl font-semibold mt-3'>Annual Revenue</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-8xl text-secondary mb-3'><AiOutlineDeliveredProcedure /></p>
                        <CountUp start={100} end={570} delay={3}>
                            {({ countUpRef }) => (
                                <div className='text-5xl text-slate-900 font-semibold'>
                                    <span ref={countUpRef} />
                                    <span>K+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-secondary text-2xl font-semibold mt-3'>Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessGrowth;