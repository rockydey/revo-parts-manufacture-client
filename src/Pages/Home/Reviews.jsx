import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';


const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch("https://salty-scrubland-47217.herokuapp.com/review", {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    const start = reviews?.length - 6;
    const end = reviews?.length;

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='my-20 lg:mx-28 md:mx-12'>
            <div className="divider">
                <h1 className='text-center text-3xl uppercase tracking-wide'>CUSTOMERS REVIEW</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    reviews.slice(start, end).map(review => <Review
                        key={review._id}
                        review={review}
                        refetch={refetch}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;