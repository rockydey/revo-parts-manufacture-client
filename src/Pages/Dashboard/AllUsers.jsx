import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery("users", () => fetch("http://localhost:5000/user").then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>All Users</h1>
            <div className='border-b-2 mt-3'></div>
            <div className='mt-3'>
                <div class="overflow-x-auto">
                    <table class="table w-full">
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
                                ></UserRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;