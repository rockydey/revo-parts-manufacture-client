import React from 'react';
import Banner from './Banner';
import BusinessGrowth from './BusinessGrowth';
import ChooseUs from './ChooseUs';
import OurPromise from './OurPromise';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessGrowth />
            <Reviews />
            <ChooseUs />
            <OurPromise />
        </div>
    );
};

export default Home;