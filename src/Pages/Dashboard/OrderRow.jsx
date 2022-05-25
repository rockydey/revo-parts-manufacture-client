import React from 'react';

const OrderRow = ({ order, index, setCancelModal }) => {

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={order.image} alt={order.productName} />
                    </div>
                </div>
            </td>
            <td>{order.productName}</td>
            <td>{order.orders}</td>
            <td>${parseInt(order.orders) * parseInt(order.price)}</td>
            <td><button className='btn btn-success btn-sm text-white'>Pay</button></td>
            <td><label onClick={() => setCancelModal(order)} htmlFor="cancel-modal" className="btn btn-sm text-white btn-error">Cancel</label></td>
        </tr>
    );
};

export default OrderRow;