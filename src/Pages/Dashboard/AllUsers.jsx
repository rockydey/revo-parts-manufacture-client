import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import RemoveModal from './RemoveModal';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery("users", () => fetch("https://salty-scrubland-47217.herokuapp.com/users", {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    const [removeModal, setRemoveModal] = useState(null);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>All Users</h1>
            <div className='border-b-2 mt-3'></div>
            <div className='mt-3'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <UserRow
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                    setRemoveModal={setRemoveModal}
                                ></UserRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    removeModal && <RemoveModal
                        removeModal={removeModal}
                        setRemoveModal={setRemoveModal}
                        refetch={refetch}
                    ></RemoveModal>
                }
            </div>
        </div>
    );
};

export default AllUsers;