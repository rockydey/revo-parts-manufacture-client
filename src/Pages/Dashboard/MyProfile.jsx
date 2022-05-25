import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate('');
    const { data: updatedUser, isLoading } = useQuery('updatedUser', () => fetch(`http://localhost:5000/user?email=${user.email}`).then(res => res.json()));

    if (loading || isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>My Profile</h1>
            <div className='border-b-2 mt-3'></div>
            <div className='mt-3'>
                <div className="avatar">
                    <div className="w-48 rounded-full">
                        <img src={updatedUser[0]?.image || user?.photoURL || 'https://api.lorem.space/image/face?hash=92310'} alt='Profile' />
                    </div>
                </div>
                <div className=''>
                    <label className='font-semibold text-xs'>User Id</label>
                    <p className='text-sm md:text-lg mb-2'>{user?.uid}</p>
                    <label className='font-semibold text-xs'>Full Name</label>
                    <p className='text-sm md:text-lg mb-2'>{user?.displayName}</p>
                    <label className='font-semibold text-xs'>Email Address</label>
                    <p className='text-sm md:text-lg mb-2'>{user?.email}</p>
                    {
                        updatedUser[0]?.number && <span>
                            <label className='font-semibold text-xs'>Phone</label>
                            <p className='text-sm md:text-lg mb-2'>{updatedUser[0]?.number}</p>
                        </span>
                    }
                    {
                        updatedUser[0]?.institutionName && <span>
                            <label className='font-semibold text-xs'>Institution Name</label>
                            <p className='text-sm md:text-lg mb-2'>{updatedUser[0]?.institutionName}</p>
                        </span>
                    }
                    {
                        updatedUser[0]?.department && <span>
                            <label className='font-semibold text-xs'>Department or, Degree</label>
                            <p className='text-sm md:text-lg mb-2'>{updatedUser[0]?.department}</p>
                        </span>
                    }
                    {
                        updatedUser[0]?.address && <span>
                            <label className='font-semibold text-xs'>Address</label>
                            <p className='text-sm md:text-lg mb-2'>{updatedUser[0]?.address}</p>
                        </span>
                    }
                    <button onClick={() => navigate('/dashboard/editProfile')} className='btn btn-secondary text-white tracking-wider mb-5'>Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;