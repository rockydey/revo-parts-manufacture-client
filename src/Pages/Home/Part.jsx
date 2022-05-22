import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {

    const { id, name, picture, minimumOrder, quantity, price, description } = part;
    const navigate = useNavigate();

    const handlePurchase = id => {
        navigate(`/purchase/${id}`);
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{name}</h2>
                <p>Price: ${price} <small>per unit</small></p>
                <p>Quantity: {quantity}</p>
                <p>Minimum Orders: {minimumOrder}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handlePurchase(id)} className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;