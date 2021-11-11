import React, { useEffect, useState } from 'react';
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
              <div className='container'>
                    <div className='row'>
                {
                watchs.map (watch => <WatchData watch={watch}
                    key = {watch._id}
                ></WatchData>)

                }
             </div>

              </div>
          

       
    );
};

export default Explore;