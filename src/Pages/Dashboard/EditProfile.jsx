import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const EditProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const imageStorageKey = '88904b39388d3bf1f4d02eb518ebcd7a';

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const updateUser = {
                        name: user?.displayName,
                        email: user?.email,
                        institutionName: data.institutionName,
                        department: data.department,
                        number: data.number,
                        address: data.address,
                        linkedIn: data.linkedIn,
                        image: img
                    };

                    fetch('http://localhost:5000/user', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(updateUser)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.acknowledged===true) {
                                navigate('/dashboard');
                                toast.success("Your Profile has been updated.");
                                reset();
                            } else {
                                toast.error("Opps! failed to update profile.");
                            }
                        });
                }
            });
    };
    if (loading) {
        return <Loading />
    }
    return (
        <div className='flex lg:flex-row flex-col justify-center'>
            <div className='my-20 lg:w-2/5'>
                <h1 className='text-2xl mt-3 font-semibold'>Update Profile</h1>
                <div className='border-b-2 mt-3'></div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full lg:max-w-lg md:max-w-base mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full md:max-w-base lg:max-w-lg"
                                {...register("name")}
                                value={user?.displayName}
                                disabled
                            />
                        </div>

                        <div className="form-control w-full lg:max-w-lg md:max-w-base mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full md:max-w-base lg:max-w-lg"
                                {...register("email")}
                                value={user?.email}
                                disabled
                            />
                        </div>

                        <div className="form-control w-full lg:max-w-lg md:max-w-base">
                            <label className="label">
                                <span className="label-text font-semibold">Institution Name</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Enter Your Institution Name"
                                className="input input-bordered w-full lg:max-w-lg md:max-w-base"
                                {...register("institutionName", {
                                    required: {
                                        value: true,
                                        message: "Institution Name is required."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.institutionName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.institutionName?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full lg:max-w-lg md:max-w-base">
                            <label className="label">
                                <span className="label-text font-semibold">Department/Degree</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Department/Degree Name"
                                className="input input-bordered w-full md:max-w-base lg:max-w-lg"
                                {...register("department", {
                                    required: {
                                        value: true,
                                        message: "This field is required."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.department?.type === 'required' && <span className="label-text-alt text-red-500">{errors.department?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full lg:max-w-lg md:max-w-base">
                            <label className="label">
                                <span className="label-text font-semibold">Phone</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Enter Your Phone Number"
                                className="input input-bordered w-full md:max-w-base lg:max-w-lg"
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: "Phone Number is required."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-red-500">{errors.number?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full lg:max-w-lg md:max-w-base">
                            <label className="label">
                                <span className="label-text font-semibold">Present Address</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Enter Your Present Address"
                                className="input input-bordered w-full md:max-w-base lg:max-w-lg"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: "Address is required."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full md:max-w-base lg:max-w-lg">
                            <label className="label">
                                <span className="label-text font-semibold">LinkedIn URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your LinkedIn Profile URL"
                                className="input input-bordered w-full "
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: "LinkedIn URL is required."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedIn?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full md:max-w-base lg:max-w-lg">
                            <label className="label">
                                <span className="label-text font-semibold">Photo</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Your Image"
                                className="w-full md:max-w-base lg:max-w-lg"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        <input className='btn text-white rounded-full btn-secondary mt-3' type="submit" value='Save Changes' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;