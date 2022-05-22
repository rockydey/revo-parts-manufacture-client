import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner';
import BusinessGrowth from './BusinessGrowth';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Parts />
            <BusinessGrowth />
            <Footer />
        </div>
    );
};

export default Home;