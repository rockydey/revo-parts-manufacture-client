import React from 'react';
import Banner from './Banner';
import BusinessGrowth from './BusinessGrowth';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessGrowth />
            <Reviews />
        </div>
    );
};

export default Home;