import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PlaceOrder = ({ setOpen, purchase, refetch }) => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        const orderQuantity = data.orderQuantity;

        const { quantity, ...rest } = purchase;
        const newQuantity = parseInt(quantity) - parseInt(orderQuantity);
        const newItem = { quantity: newQuantity, ...rest };

        const url = `http://localhost:5000/purchase/${purchase._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    refetch();
                }
            });

        const partsOrder = {
            partsId: purchase._id,
            name: purchase.name,
            email: user.email,
            orders: orderQuantity,
            image: purchase.picture,
            address: data.address,
            phone: data.number
        };

        fetch('http://localhost:5000/purchase', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(partsOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Your order has been recoded.");
                }
                setOpen(false);
                refetch();
            })
    };

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold tracking-wider">Checkout for {purchase.name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                value={user?.displayName}
                                {...register("name")}
                                disabled
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                {...register("email")}
                                value={user?.email}
                                disabled
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Product Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                {...register("productName")}
                                value={purchase.name}
                                disabled
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Order Quantity</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                {...register("orderQuantity", {
                                    max: {
                                        value: purchase.quantity,
                                        message: "Sorry, we don't have enough product."
                                    },
                                    min: {
                                        value: purchase.minimumOrder,
                                        message: "Sorry, minimum 400 products order required."
                                    },
                                    required: {
                                        value: true,
                                        message: "Minimum Order is required."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.orderQuantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.orderQuantity?.message}</span>}
                                {errors.orderQuantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.orderQuantity?.message}</span>}
                                {errors.orderQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.orderQuantity?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Phone Number</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
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

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Address</span>
                            </label>
                            <textarea
                                type="text"
                                className="input input-bordered w-full"
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


                        <input className='btn text-white outline-0 btn-primary mt-3' type="submit" value='Place Order' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;