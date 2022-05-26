import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManagePart = ({ managePart, setDeleteModal }) => {
    const { _id, name, picture, minimumOrder, quantity, price, description } = managePart;
    const navigate = useNavigate();

    const handlePurchase = id => {
        navigate(`/purchase/${id}`);
    };

    return (
        <section className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{name}</h2>
                <p>Price: ${price} <small>/per unit</small></p>
                <p>Quantity: {quantity}</p>
                <p>Minimum Orders: {minimumOrder}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handlePurchase(_id)} className="btn btn-secondary text-white outline-0">Update</button>
                    <label htmlFor="delete-product" onClick={() => setDeleteModal(managePart)} className="btn btn-primary text-white outline-0">Delete</label>
                </div>
            </div>
        </section>
    );
};

export default ManagePart;