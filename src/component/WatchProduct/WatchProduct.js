import React, { useEffect, useState } from 'react';
import WatchData from '../WatchData/WatchData';


const WatchProduct = () => {
    const [watchs, setWatch]=useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/Product')
        .then(res => res.json())
        .then(data => setWatch(data))
      
    },[])


    return (
       <div className='mx-3'>
           <div>
                    <h4 className='all-watch'>WATCHES</h4>
                    <h6 className='update'> All watches are supplied unworn with box & papers. All the watches we sell are verified 100% authentic. Please note we are not affiliated with any manufacturer, all of the watches customised by Cagau will void any existing warranty. We provide a 12-months Cagau Warranty as standard.</h6>
                    
                </div>
            <div className='row'>
            {
                watchs.slice(0,6).map (watch => <WatchData watch={watch}
                key = {watch._id}
                ></WatchData>)
            }
        </div> 
       </div>
    );
};

export default WatchProduct;