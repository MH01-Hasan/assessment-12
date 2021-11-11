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