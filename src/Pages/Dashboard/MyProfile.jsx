import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>My Profile</h1>
            <div className='border-b-2 mt-3'></div>
            <div className='mt-3 flex'>
                <div class="avatar">
                    <div class="md:rounded-full md:w-48 w-20 rounded-lg">
                        <img src={user?.photoURL || 'https://api.lorem.space/image/face?hash=92310'} alt='Profile' />
                    </div>
                </div>
                <div className='md:ml-5 ml-2'>
                    <label className='font-semibold text-xs'>User Id</label>
                    <p className='text-sm md:text-lg mb-3'>{user?.uid}</p>
                    <label className='font-semibold text-xs'>Full Name</label>
                    <p className='text-sm md:text-lg mb-3'>{user?.displayName}</p>
                    <label className='font-semibold text-xs'>Email Address</label>
                    <p className='text-sm md:text-lg mb-3'>{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;