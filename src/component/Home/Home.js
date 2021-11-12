import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Comment from '../Comment/Comment';
import Footer from '../Footer/Footer';
import WatchProduct from '../WatchProduct/WatchProduct';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <WatchProduct></WatchProduct>
            <About></About>
            <Comment></Comment>
            <Footer></Footer>
        
            
        </div>
    );
};

export default Home;