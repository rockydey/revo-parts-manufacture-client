import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import ManagePart from './ManagePart';

const ManageProducts = () => {
    const [deleteProduct, setDeleteModal] = useState(null);
    const { data: manageParts, isLoading, refetch } = useQuery('manageParts', () => fetch('https://salty-scrubland-47217.herokuapp.com/managePart', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
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
                            setDeleteModal={setDeleteModal}
                        ></ManagePart>)
                    }
                </div>
            }
            {
                deleteProduct && <DeleteProduct
                    deleteProduct={deleteProduct}
                    setDeleteModal={setDeleteModal}
                    refetch={refetch}
                ></DeleteProduct>
            }
        </div>
    );
};

export default ManageProducts;