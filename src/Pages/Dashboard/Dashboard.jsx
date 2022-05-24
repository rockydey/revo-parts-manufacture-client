import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className='navbar-end lg:hidden flex justify-start px-0 pt-3'>
                    <label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <p className='text-4xl'><BsFillArrowRightCircleFill /></p>
                    </label>
                </div>
                <div className='ml-5 mt-5'>
                    <h2 className='md:text-3xl text-2xl font-semibold text-secondary'>Welcome to Your Dashboard</h2>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add a Review</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                    <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                    <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;