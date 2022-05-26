import React from 'react';
import myPic from '../../assists/myPic.jpg';
import website1 from '../../assists/website1.png';
import website2 from '../../assists/website2.png';
import website3 from '../../assists/website3.png';

const MyPortfolio = () => {
    return (
        <section className='my-20 lg:mx-28 md:mx-12 mx-5'>
            <div>
                <div className="divider">
                    <h1 className='text-center text-3xl uppercase tracking-wide'>My Profile</h1>
                </div>
                <div className='flex lg:flex-row flex-col justify-around items-center mt-10'>
                    <div className='w-96 border-2 border-secondary rounded-xl lg:mb-0 mb-5'>
                        <img className='rounded-xl p-1' src={myPic} alt="" />
                    </div>
                    <div className='ml-5'>
                        <h1 className='text-xl mb-2'><span className='font-semibold'>Name:</span> Rocky Dey</h1>
                        <p className='mb-2'><span className='font-semibold'>Email:</span> coderrocky25@gmail.com</p>
                        <p className='mb-2'><span className='font-semibold'>Institute Name:</span> Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj</p>
                        <p className='mb-2'><span className='font-semibold'>Department:</span> Electrical and Electronic Engineering</p>
                        <p className='mb-2'><span className='font-semibold'>Skills:</span> </p>
                        <div className='ml-5'>
                            <p>HTML : <progress class="progress progress-secondary w-56" value="95" max="100"></progress></p>
                            <p>CSS : <progress class="progress progress-secondary w-56" value="85" max="100"></progress></p>
                            <p>JavaScript : <progress class="progress progress-secondary w-56" value="80" max="100"></progress></p>
                            <p>React : <progress class="progress progress-secondary w-56" value="70" max="100"></progress></p>
                            <p>NodeJS : <progress class="progress progress-secondary w-56" value="55" max="100"></progress></p>
                            <p>mongoDB : <progress class="progress progress-secondary w-56" value="50" max="100"></progress></p>
                            <p>Firebase : <progress class="progress progress-secondary w-56" value="70" max="100"></progress></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="divider">
                    <h1 className='text-center text-3xl uppercase tracking-wide'>My Portfolio</h1>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10'>
                    <div>
                        <div class="card bg-base-100 shadow-xl">
                            <figure><img src={website1} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="card-actions justify-end">
                                    <a target='_blank' href='https://laptop-warehouse-management.web.app/' class="btn btn-secondary">See website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card bg-base-100 shadow-xl">
                            <figure><img src={website2} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="card-actions justify-end">
                                    <a target='_blank' href='https://photography-portfolio-website.web.app/' class="btn btn-secondary">See website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div class="card bg-base-100 shadow-xl">
                            <figure><img src={website3} alt="Shoes" /></figure>
                            <div class="card-body">
                                <div class="card-actions justify-end">
                                    <a target='_blank' href='https://enfield-bullet-exploration-rocky.netlify.app/home' class="btn btn-secondary">See website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPortfolio;