import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeletingModal from './DeletingModal';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [deleteModal, setDeleteModal] = useState(null);
    const url = `http://localhost:5000/order`
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>All Orders</h1>
            <div className='border-b-2 mt-3'></div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Buyer Name</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Order Quantity</th>
                                <th>Payment Status</th>
                                <th>Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <ManageOrderRow
                                    key={order._id}
                                    order={order}
                                    index={index}
                                    setDeleteModal={setDeleteModal}
                                ></ManageOrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deleteModal && <DeletingModal
                        deleteModal={deleteModal}
                        setDeleteModal={setDeleteModal}
                        refetch={refetch}
                    ></DeletingModal>
                }
            </div>
        </div>
    );
};

export default ManageOrders;