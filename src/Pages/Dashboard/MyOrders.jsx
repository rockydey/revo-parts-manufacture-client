import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CancelingModal from './CancelingModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [cancelModal, setCancelModal] = useState(null);
    const navigate = useNavigate();
    const url = `https://salty-scrubland-47217.herokuapp.com/purchase?email=${user?.email}`
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()
    }));

    if (loading || isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>My Orders</h1>
            <div className='border-b-2 mt-3'></div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Number of Order</th>
                                <th>Total Price</th>
                                <th>Payment</th>
                                <th>Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <OrderRow
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    setCancelModal={setCancelModal}
                                ></OrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    cancelModal && <CancelingModal
                        cancelModal={cancelModal}
                        setCancelModal={setCancelModal}
                        refetch={refetch}
                    ></CancelingModal>
                }
            </div>
        </div>
    );
};

export default MyOrders;