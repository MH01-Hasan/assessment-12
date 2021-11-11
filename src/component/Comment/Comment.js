import React, { useEffect, useState } from 'react';
import CommentData from '../CommentData/CommentData';
import './Comment.css'

const Comment = () => {
const [comments ,setComments]=useState([])

useEffect(()=>{
fetch('http://localhost:5000/review')
.then(res => res.json())
.then(data =>setComments(data))


},[])


    return (
        <div className='mx-3 mt-5 mb-5'>
            <h2 className='review-com'>Review</h2>
            <div className="row">
                {
                  comments.map(comment => <CommentData comment={comment}
                    key={comment._id}
                  ></CommentData>)  
                }

            </div>
          
        </div>
    );
};

export default Comment;