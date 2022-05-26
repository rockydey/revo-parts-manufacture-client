import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({ deleteProduct, setDeleteModal, refetch }) => {
    const { _id, name } = deleteProduct;

    const handleDeleteProduct = id => {
        const url = `https://salty-scrubland-47217.herokuapp.com/managePart/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Product has been deleted.');
                    setDeleteModal(null);
                    refetch();
                }
            })
    };

    return (
        <div>
            <input type="checkbox" id="delete-product" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg tracking-wider">Are you sure you want to delete car <span className='text-red-500'>{name}</span></h3>
                    <div className="modal-action">
                        <button onClick={() => handleDeleteProduct(_id)} className="btn btn-sm text-white btn-error">Yes</button>
                        <label htmlFor="delete-product" className="btn btn-sm text-white">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;