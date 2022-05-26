import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ order, index, setDeleteModal, refetch }) => {
    const { _id, name, email, productName, orders } = order;
    const handleApprove = id => {
        const approve = {
            approve: true
        };
        const url = `https://salty-scrubland-47217.herokuapp.com/order/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(approve)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Product sent for shipping.")
                refetch();
            });
    };
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orders}</td>
            <td>
                {!order.paid && <button className='btn btn-sm text-white'>UnPaid</button>}
                {order.paid && <button onClick={() => handleApprove(_id)} disabled={order.approve} className='btn btn-sm btn-success text-white'>Paid</button>}
            </td>
            <td><label onClick={() => setDeleteModal(order)} htmlFor="delete-modal" className="btn btn-sm text-white btn-error">Delete</label></td>
        </tr>
    );
};

export default ManageOrderRow;