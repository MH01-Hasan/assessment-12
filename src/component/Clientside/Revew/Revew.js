import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Revew.css'
import UseAuth from '../../../hooks/UseAuth'
import Swal from 'sweetalert2'
import { FaStar } from 'react-icons/fa';




const Revew = () => {
    const{user}= UseAuth()
    const[reting,setReting]=useState(null)
    const[hover,setHover]=useState(null)
    console.log(reting)


    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {  
        console.log(data)
    axios.post('https://stormy-meadow-32930.herokuapp.com/review',data)
    .then(res => {
        if(res.data.insertedId){
            sweetalart()
            reset()
            setReting(null)
         
        } 
    })  
    };
///************ Swite Alearte set******************* */

    const sweetalart = () =>{
        Swal.fire({
            position: 'top-ecnter',
            icon: 'success',
            title: 'Successfully review !',
            showConfirmButton: false,
            timer: 2100
          })

    }
///************ Swite Alearte set******************* */

    return (
        <div className='container mt-5'>
        <h3 className='reviw'>Please Your Review</h3>



            <div className='comment-fild'>
            <form className='from-fild' onSubmit={handleSubmit(onSubmit)}>
               <p className='review-cmt'>Email</p>
            <input
                {...register("email" , { required: true }) }
                defaultValue={user?.email}
                className="p-2 m-2  email-fild"
              />
              

            <br />
            <p className='review-cmt'>comment Section</p>
            <textarea className='comment' {...register("comment")} placeholder='Your Comment Our Web-site' />
            <br />
            <div className='reting-fild'>
           {[...Array(5)].map((star,i)=>{
               const ratingvalue = i+1
                      return (
                          <label className='radio-inline mx-3"'>
                          <input  type="radio"
                          name="rating" 
                          {...register("reting" ,{ required: true })}
                           value={ratingvalue}
                           onClick={()=>setReting(ratingvalue)}
                           
                            />
                          {<FaStar className='star' 
                          size={30}
                          color={ratingvalue <= ( hover || reting) ? "#D09500" : "#333333" }
                          onMouseEnter={()=> setHover(ratingvalue)}
                          onMouseLeave={()=> setHover(null)}
                          />}
                        </label>
                         
                     )
                  })};
                  <p>this Rating is {reting}</p>
           </div>
           
            <input type="submit" className='submit' />
             </form>
            </div>
           
        </div>
    );
};

export default Revew;