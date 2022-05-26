import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
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
                    const part = {
                        name: data.productName,
                        price: data.productPrice,
                        quantity: data.productQuantity,
                        minimumOrder: data.orderQuantity,
                        description: data.description,
                        picture: img
                    };

                    fetch('http://localhost:5000/part', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(part)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.acknowledged) {
                                reset();
                                toast.success("Product added successfully.");
                            } else {
                                toast.error("Opps! failed to add product.");
                            }
                        });
                }
            });
    };

    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>Add a Product</h1>
            <div className='border-b-2 mt-3'></div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Product Name"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("productName", {
                                required: {
                                    value: true,
                                    message: "Product Name is required."
                                }
                            })}
                        />
                        <label className="label">
                            {errors.productName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productName?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Product Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Product Price"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("productPrice", {
                                required: {
                                    value: true,
                                    message: "Product Price is required."
                                }
                            })}
                        />
                        <label className="label">
                            {errors.productPrice?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productPrice?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Product Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Product Quantity"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("productQuantity", {
                                required: {
                                    value: true,
                                    message: "Product Quantity is required."
                                }
                            })}
                        />
                        <label className="label">
                            {errors.productQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.productQuantity?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Minimum Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Minimum Order Quantity"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("orderQuantity", {
                                required: {
                                    value: true,
                                    message: "Minimum Order Quantity is required."
                                }
                            })}
                        />
                        <label className="label">
                            {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Product Description</span>
                        </label>
                        <textarea
                            placeholder="Enter Product Description"
                            className="input input-bordered w-full md:max-w-lg max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Product Description is required."
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description?.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full md:max-w-lg max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Product Image</span>
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

                    <input className='btn text-white rounded-full btn-secondary mt-3 tracking-widest' type="submit" value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;