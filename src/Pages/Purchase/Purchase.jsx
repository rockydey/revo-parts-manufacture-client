import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';
import PlaceOrder from './PlaceOrder';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const updateStockRef = useRef('');

    const { data: purchase, isLoading, refetch } = useQuery("purchase", () => fetch(`http://localhost:5000/purchase/${id}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    const handleRestock = event => {
        event.preventDefault();
        const updateStock = updateStockRef.current.value;

        const update = {
            quantity: parseInt(updateStock) + parseInt(purchase.quantity)
        }

        const url = `http://localhost:5000/update/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Product quantity updated successfully.');
                refetch();
            });
        updateStockRef.current.value = '';
    };

    return (
        <section className='lg:m-20 md:m-16 m-10'>
            <div className='h-[600px] flex items-center z-10'>
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
            </div>
            {
                admin && <div className='flex flex-col items-center'>
                    <div className="divider mb-5">
                        <h1 className='text-center text-3xl uppercase tracking-wide'>Update Stock</h1>
                    </div>
                    <div className='text-center'>
                        <input ref={updateStockRef} type="number" placeholder="Update Stock" class="input input-bordered w-full max-w-xs my-3" />
                        <button onClick={handleRestock} className='btn btn-primary'>Restock</button>
                    </div>
                </div>
            }
        </section>
    );
};

export default Purchase;