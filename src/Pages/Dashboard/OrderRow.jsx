import React from 'react';
import { Link } from 'react-router-dom';

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
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success btn-sm text-white'>Pay</button></Link>}
                {(order.price && order.paid && !order.approve) && <span className='text-orange-500 btn-sm font-semibold text-base'>Pending</span>}
                {(order.price && order.paid && order.approve) && <span className='text-success btn-sm font-semibold text-base'>Shipped</span>}
            </td>
            <td><label onClick={() => setCancelModal(order)} disabled={order.paid} htmlFor="cancel-modal" className="btn btn-sm text-white btn-error">Cancel</label></td>
        </tr>
    );
};

export default OrderRow;