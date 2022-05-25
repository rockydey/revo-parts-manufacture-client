import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3MhxEc7R4Dk6wCCTztOJN25ovHC6ZKOxa44LogphRp6Zeq16Ccx2jE8ZJXMfM2036T1ax2aRM5YX4miILwEEJA00srSWJbnR');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className=''>
            <div class="card md:w-1/2 mt-5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className='card-title tracking-wider text-2xl text-secondary'>Hello, {order.name}</h1>
                    <h2 class="tracking-wider font-semibold text-lg">Please Pay For <span className='text-primary'>Cars {order.productName}</span></h2>
                    <p>Total orders: {order.orders}</p>
                    <p>Total Amount: ${parseInt(order.price) * parseInt(order.orders)}</p>
                </div>
                <div className='card-body mb-5'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;