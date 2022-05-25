import React from 'react';

const ManageOrderRow = ({ order, index, setDeleteModal }) => {
    const { name, email, productName, orders } = order;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{orders}</td>
            <td><button className='btn btn-sm text-white'>UnPaid</button></td>
            <td><label onClick={() => setDeleteModal(order)} htmlFor="delete-modal" className="btn btn-sm text-white btn-error">Delete</label></td>
        </tr>
    );
};

export default ManageOrderRow;