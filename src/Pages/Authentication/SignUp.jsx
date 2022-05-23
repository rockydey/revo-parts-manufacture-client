import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatedError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log(data);
    };

    if (user || gUser) {
        console.log(user || gUser);
        navigate('/');
    }
    let signUpError;
    if (error || gError || updatedError) {
        signUpError = <p className='text-red-500'>{error?.message || gError?.message || updatedError?.message}</p>
    }
    if (loading || gLoading || updating) {
        return <Loading />
    }

    return (
        <section className='h-[100vh] bg-gradient-to-r from-primary to-secondary flex items-center justify-center'>
            <div className="card lg:w-3/12 md:w-1/2 w-11/12 bg-base-100 shadow-xl">
                <div className="card-body">

                    <h2 className="card-title tracking-wider">Get Started Now</h2>
                    <p className='text-xs font-semibold'>Already have an account? <Link to='/login' className='text-primary'>Login Now</Link></p>
                    <div className='mt-3 text-center'>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary rounded-full w-full">Continue with Google</button>
                    </div>
                    <div className="divider mb-0">OR</div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Username"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Username is required."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required."
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Provide valid email address."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required."
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Password should be minimum 8 character."
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                            </label>
                        </div>
                        {signUpError}
                        <input className='btn w-full text-white rounded-full outline-0 bg-gradient-to-r from-secondary to-primary mt-3' type="submit" value='Get Started' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;