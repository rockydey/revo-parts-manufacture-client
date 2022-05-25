import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user || gUser);

    const [email, setEmail] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    const onSubmit = data => {
        setEmail(data.email);
        signInWithEmailAndPassword(data.email, data.password);
    };

    const handleResetEmail = async () => {
        await sendPasswordResetEmail(email);
        toast.success("Reset email sent!");
    };

    let logInError;
    if (error || gError || resetError) {
        logInError = <p className='text-red-500'>{error?.message || gError?.message || resetError?.message}</p>
    }
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    return (
        <section className='md:flex items-center justify-center lg:mx-0 md:mx-10 my-28'>
            <div className=''>
                <div className="rounded-2xl bg-base-100 shadow-xl h-[500px]">
                    <div className="card-body">
                        <h2 className='card-title uppercase tracking-wider'>Log in to your account</h2>
                        <div className='mt-3 text-center'>
                            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary rounded-full w-full">Continue with Google</button>
                        </div>
                        <div className="divider mb-0">OR</div>
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
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
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
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
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                </label>
                            </div>
                            <p onClick={handleResetEmail} className='cursor-pointer text-sm hover:text-primary font-semibold'>Forget Your Password?</p>
                            {logInError}
                            <input className='btn w-full rounded-full outline-0 btn-primary mt-3' type="submit" value='Login' />
                        </form>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary shadow-xl h-[500px] flex items-center justify-center">
                    <div className="card-body flex flex-col items-center">
                        <h2 className="text-center text-3xl text-base-100 font-bold">Hello, Friend!</h2>
                        <p className='text-center text-base-200 text-base mt-4'>Don't have an account? <br /> Enter your personal details and start journey with us</p>
                        <Link to='/signUp' className='mt-4 w-3/4 btn rounded-full glass text-base-100  tracking-wider'>Create New Account</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;