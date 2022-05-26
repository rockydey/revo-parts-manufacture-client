import React from 'react';
import { toast } from 'react-toastify';

const DeletingModal = ({ deleteModal, setDeleteModal, refetch }) => {
    const { _id, productName } = deleteModal;
    const handleDeleteOrder = id => {
        const url = `https://salty-scrubland-47217.herokuapp.com/purchase/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${productName} orders has been deleted successfully`);
                    setDeleteModal(null);
                    refetch();
                }
            })
    };
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-red-500 text-lg tracking-wider">Are you sure you want to delete!</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDeleteOrder(_id)} className="btn btn-sm text-white btn-error">Yes</button>
                        <label htmlFor="delete-modal" className="btn btn-sm text-white">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletingModal;