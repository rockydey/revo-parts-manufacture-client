import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

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
                    const review = {
                        name: data.name,
                        companyName: data.companyName,
                        feedback: data.feedback,
                        rating: data.rating,
                        img: img
                    };

                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Thank you for your feedback.");
                                reset();
                            } else {
                                toast.error("Opps! failed to add feedback.");
                            }
                        });
                }
            });
    };

    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>Give Your Feedback</h1>
            <div className='border-b-2 mt-3'></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required."
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Your Company Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Company Name"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("companyName", {
                                required: {
                                    value: true,
                                    message: "Company Name is required."
                                }
                            })}
                        />
                        <label className="label">
                            {errors.companyName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.companyName?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Your Rating</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Rating Between 1 to 5"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("rating", {
                                required: {
                                    value: true,
                                    message: "Rating is required."
                                },
                                max:{
                                    value: 5,
                                    message: "Maximum 5 start rating only"
                                },
                                min:{
                                    value: 1,
                                    message: "Minimum 1 start rating only"
                                }
                            })}
                        />
                        <label className="label">
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating?.message}</span>}
                            {errors.rating?.type === 'max' && <span className="label-text-alt text-red-500">{errors.rating?.message}</span>}
                            {errors.rating?.type === 'min' && <span className="label-text-alt text-red-500">{errors.rating?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Your Feedback</span>
                        </label>
                        <textarea
                            placeholder="Enter Your Feedback"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("feedback", {
                                required: {
                                    value: true,
                                    message: "Feedback is required."
                                }
                            })}
                        />
                        <label className="label">
                            {errors.feedback?.type === 'required' && <span className="label-text-alt text-red-500">{errors.feedback?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Photo</span>
                        </label>
                        <input
                            type="file"
                            placeholder="Your Image"
                            className="w-full max-w-xs"
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

                    <input className='btn text-white rounded-full btn-secondary mt-3 tracking-widest' type="submit" value='Add Feedback' />
                </form>
            </div>
        </div>
    );
};

export default AddReview;