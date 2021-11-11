import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Revew.css'
import UseAuth from '../../../hooks/UseAuth'
import Swal from 'sweetalert2'




const Revew = () => {
    const{user}= UseAuth()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {  
    axios.post('http://localhost:5000/review',data)
    .then(res => {
        if(res.data.insertedId){
            sweetalart()
            reset()
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
            
            <input type="submit" className='submit' />
             </form>
            </div>
        </div>
    );
};

export default Revew;