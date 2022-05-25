import React from 'react';
import { toast } from 'react-toastify';

const RemoveModal = ({ removeModal, setRemoveModal, refetch }) => {
    const { _id, name } = removeModal;
    const handleRemoveUser = id => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("User has been removed successfully.");
                    setRemoveModal(null);
                    refetch();
                }
            })
    };

    return (
        <div>
            <input type="checkbox" id="remove-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg tracking-wider">Are you sure you want to remove <span className='text-red-500'>{name}</span> </h3>
                    <div className="modal-action">
                        <button onClick={() => handleRemoveUser(_id)} className="btn btn-sm text-white btn-error">Yes</button>
                        <label htmlFor="remove-modal" className="btn btn-sm text-white">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveModal;