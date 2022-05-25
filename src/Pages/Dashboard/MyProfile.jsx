import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate('');

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>My Profile</h1>
            <div className='border-b-2 mt-3'></div>
            <div className='mt-3'>
                <div className="avatar">
                    <div className="w-48 rounded-full">
                        <img src={user?.photoURL || 'https://api.lorem.space/image/face?hash=92310'} alt='Profile' />
                    </div>
                </div>
                <div className=''>
                    <label className='font-semibold text-xs'>User Id</label>
                    <p className='text-sm md:text-lg mb-3'>{user?.uid}</p>
                    <label className='font-semibold text-xs'>Full Name</label>
                    <p className='text-sm md:text-lg mb-3'>{user?.displayName}</p>
                    <label className='font-semibold text-xs'>Email Address</label>
                    <p className='text-sm md:text-lg mb-3'>{user?.email}</p>
                    <button onClick={() => navigate('/dashboard/editProfile')} className='btn btn-secondary text-white tracking-wider'>Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;