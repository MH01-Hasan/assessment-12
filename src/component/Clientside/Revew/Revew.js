import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Revew.css'

const Revew = () => {
    const { register, handleSubmit,reset } = useForm();

    
    const onSubmit = data => {
    axios.post('http://localhost:5000/review',data)
    .then(res => {
        if(res.data.insertedId){
            alert('Successfully your data load')
            reset()
        }
       
    })  




        console.log(data)
    };
    return (
        <div className='container mt-5'>
        <h4 className='reviw'>Please Your Reviw</h4>

            <div className='comment-fild'>
            <form className='from-fild' onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name")} />
            <br />
            <textarea className='comment' {...register("comment")} placeholder='Your Comment Our Web-site' />
            <br />
            
            <input type="submit" className='submit' />
             </form>
            </div>
        </div>
    );
};

export default Revew;