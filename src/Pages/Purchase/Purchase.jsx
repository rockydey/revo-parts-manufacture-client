import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import PlaceOrder from './PlaceOrder';

const Purchase = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);

    const { data: purchase, isLoading, refetch } = useQuery("purchase", () => fetch(`http://localhost:5000/purchase/${id}`).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='h-[600px] flex items-center lg:mx-20 lg:my-0 md:m-16 m-10 z-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='lg:w-3/5'><img src={purchase.picture} alt={purchase.name} /></figure>
                <div className="m-5 flex flex-col justify-center">
                    <h2 className="card-title uppercase">{purchase.name}</h2>
                    <p className='lg:my-2 mb-1'><span className='font-semibold'>Price: </span> ${purchase.price} <span>/per unit</span></p>
                    <p className='lg:my-2 mb-1'><span className='font-semibold'>Quantity: </span> {purchase.quantity}</p>
                    <p className='lg:my-2 mb-1'><span className='font-semibold'>Minimum Order: </span> {purchase.minimumOrder}</p>
                    <p className='lg:my-2 mb-1'><span className='font-semibold'>Description: </span> {purchase.description}</p>
                    <div className="card-actions justify-start">
                        <label
                            htmlFor="booking-modal"
                            onClick={() => setOpen(true)}
                            className="btn btn-primary text-white border-0 tracking-wider">Purchase
                        </label>
                    </div>
                    {
                        open && <PlaceOrder setOpen={setOpen} purchase={purchase} refetch={refetch}></PlaceOrder>
                    }
                </div>
            </div>
        </section>
    );
};

export default Purchase;