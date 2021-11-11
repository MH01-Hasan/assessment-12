import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import WatchProduct from '../WatchProduct/WatchProduct';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <WatchProduct></WatchProduct>
            <About></About>
            
        </div>
    );
};

export default Home;