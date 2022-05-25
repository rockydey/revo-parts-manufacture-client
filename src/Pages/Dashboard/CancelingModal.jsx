import React from 'react';
import { toast } from 'react-toastify';

const CancelingModal = ({ cancelModal, setCancelModal, refetch }) => {
    const { _id, productName } = cancelModal;
    const handleCancelOrder = id => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Your order has been canceled successfully");
                    setCancelModal(null);
                    refetch();
                }
            })
    };

    return (
        <div>
            <input type="checkbox" id="cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg tracking-wider">Are you sure you want to cancel Car <span className='text-red-500'>{productName}</span> order!</h3>
                    <div className="modal-action">
                        <button onClick={() => handleCancelOrder(_id)} className="btn btn-sm text-white btn-error">Yes</button>
                        <label htmlFor="cancel-modal" className="btn btn-sm text-white">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CancelingModal;