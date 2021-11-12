import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import WatchData from '../WatchData/WatchData';
import './Explore.css'

const Explore = () => {
    const [watchs, setWatch]=useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/Product')
        .then(res => res.json())
        .then(data => setWatch(data))
      
    },[])
    return ( 
         <div className='mx-3'>  

                <div>
                    <h4 className='all-watch'>ALL WATCHES</h4>
                    <h6 className='update'>All of the watches in our latest collection have been uniquely customised in-house by our highly skilled team of diamond setters. All watches are supplied unworn with box & papers. All the watches we sell are verified 100% authentic. Please note we are not affiliated with any manufacturer, all of the watches customised by Cagau will void any existing warranty. We provide a 12-months Cagau Warranty as standard.</h6>
                    
                </div>

                <div className='row'>
                            {
                            watchs.map (watch => <WatchData watch={watch}
                                key = {watch._id}
                            ></WatchData>)
                            }
                </div>
               <Footer></Footer>
           </div>
           
          

       
    );
};

export default Explore;