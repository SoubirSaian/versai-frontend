import React from 'react';
import Header from './Header/Header';
import './Home.css';
import UpcomingShow from './UpcomingShow/UpcomingShow';

const Home = () => {
    return (
        <div className='homepage'>
            <Header></Header>
            <UpcomingShow></UpcomingShow>
        </div>
    );
};

export default Home;