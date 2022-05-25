import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserRow = ({ user, index }) => {
    const [dUser] = useAuthState(auth);
    const { name, email } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name || dUser?.displayName}</td>
            <td>{email}</td>
            <td><button className="btn text-white btn-sm btn-secondary">Make Admin</button></td>
            <td>
                <label className="btn btn-sm text-white btn-error">Remove</label>
            </td>
        </tr>
    );
};

export default UserRow;