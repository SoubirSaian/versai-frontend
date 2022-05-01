import React from 'react';
import Header from './Header/Header';
import './Home.css';
import Review from './Review/Review';
import UpcomingShow from './UpcomingShow/UpcomingShow';

const Home = () => {
    return (
        <div className='homepage'>
            <Header></Header>
            <UpcomingShow></UpcomingShow>
            <Review></Review>
        </div>
    );
};

export default Home;