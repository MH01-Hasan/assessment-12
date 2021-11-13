import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth'
import './Details.css'
import axios from 'axios';
import Swal from 'sweetalert2'

const Details = () => {
    const {id}=useParams();
    const [data ,setData]=useState({})
    const{user}= UseAuth()


    useEffect(()=>{
        fetch(`https://stormy-meadow-32930.herokuapp.com/Product/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])


    const sweetalart = () =>{
        Swal.fire({
            position: 'top-ecnter',
            icon: 'success',
            title: 'Successfully Order !',
            showConfirmButton: false,
            timer: 2200
          })

    }


    const { register, handleSubmit,reset, formState: { errors },} = useForm();
      const onSubmit = data => {
        axios.post('https://stormy-meadow-32930.herokuapp.com/order',data)
        .then(res => {
            if(res.data.insertedId){
                sweetalart()
                reset()
            }
           
        })      
        
          
          reset()



        };
      

    


    return (
        <div className='mx-3'>
           <div className='row'>
               <h1 className='order'>Order Please</h1>
               <div className='col-lg-6 col-sm-12 mt-5 mb-5'>
               <Card>
                    <Card.Img variant="top" src={data.img} />
                    <Card.Body>
                    <Card.Text>
                      <h4>{data.ProductName}</h4>
                    
                        <h5>Price:- $ {data.price} USD</h5>
                    </Card.Text>
                    <Card.Text>
                        <h2>Discription</h2>
                        <p>{data.discription}</p>
                        
                   
                    </Card.Text>
                    </Card.Body>
                </Card>

               </div>
               <div className='col-lg-6 col-sm-12 mt-5 mb-5'>
               <form onSubmit={handleSubmit(onSubmit)} className='from-fild'>
               <h5 className='paragraph'> Product Name</h5>
               <input
                {...register("ProductName", { required: true }  )}
                readOnly
                defaultValue={data?.ProductName}
                className="p-2 m-2 w-100 input-field"
               
             
              />
               <h5 className='paragraph'> Price</h5>
             <input
                {...register("price" , { required: true })}
                readOnly
                defaultValue={data?.price}
                className="p-2 m-2 w-100 input-field"
              />
               <h5 className='paragraph'> Email</h5>

              <input
                {...register("email" , { required: true }) }
                defaultValue={user?.email}
                className="p-2 m-2 w-100 input-field"
              
                 
              />

             <h5 className='paragraph'> Your Name</h5>
              <input
                {...register("name" )}
                placeholder="name"
                className="p-2 m-2 w-100 input-field"
                required
              />
              <h5 className='paragraph'> Address</h5>
              <input
                {...register("address" )}
                placeholder="address"
                className="p-2 m-2 w-100 input-field"
                required
              />
              <h5 className='paragraph'> Phone Number</h5>
              <input
                {...register("number" )}
                placeholder="number"
                type="number"
                className="p-2 m-2 w-100 input-field"
                required
              />

             
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>





             </div>
           </div>
        </div>
    );
};

export default Details;

