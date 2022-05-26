import React from 'react';
import { FcRating } from "react-icons/fc";

const Review = ({ review, refetch }) => {
    const { name, companyName, feedback, rating, img } = review;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-full w-32" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p className='font-semibold italic'>{companyName}</p>
                <p className='flex items-start'>Rating: {rating} <span className='ml-1 mt-1'><FcRating /></span></p>
                <p>{feedback}</p>
            </div>
        </div>
    );
};

export default Review;