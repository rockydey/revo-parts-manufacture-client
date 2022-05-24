import React from 'react';

const UserRow = ({ user, index }) => {
    const { name, email } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><button className="btn text-white btn-sm btn-secondary">Make Admin</button></td>
            <td>
                <label className="btn btn-sm text-white btn-error">Remove</label>
            </td>
        </tr>
    );
};

export default UserRow;