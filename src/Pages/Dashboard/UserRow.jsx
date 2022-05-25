import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({ user, index, refetch }) => {
    const [dUser] = useAuthState(auth);
    const { name, email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin");
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name || dUser?.displayName}</td>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn text-white btn-sm btn-secondary">Make Admin</button> : <button className="btn text-white btn-sm btn-success">Admin</button>}</td>
            <td>
                <label className="btn btn-sm text-white btn-error">Remove</label>
            </td>
        </tr>
    );
};

export default UserRow;