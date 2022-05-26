import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManagePart from './ManagePart';

const ManageProducts = () => {
    const { data: manageParts, isLoading } = useQuery('manageParts', () => fetch('https://salty-scrubland-47217.herokuapp.com/managePart').then(res => res.json()))
    return (
        <div>
            <h1 className='text-2xl mt-3 font-semibold'>Manage Products</h1>
            <div className='border-b-2 mt-3'></div>
            {
                isLoading ? <Loading /> : <div id='parts' className='mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        manageParts.map(managePart => <ManagePart
                            key={managePart._id}
                            managePart={managePart}
                        ></ManagePart>)
                    }
                </div>
            }
        </div>
    );
};

export default ManageProducts;