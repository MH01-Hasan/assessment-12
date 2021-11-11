import React from 'react';
import './AddProduct.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const alert = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Add Product successfully',
            showConfirmButton: false,
            timer: 2000
          })

    }
  const onSubmit = data => {
    axios.post('http://localhost:5000/Product',data)
    .then(res => {
        if(res.data.insertedId){
            alert()
            reset()
        }
       
    })  
    };
    return (
        <div>
            <div className='container add '>
            <div className='add-fild'>
              <form onSubmit={handleSubmit(onSubmit)} className='fild'>
              <h3>Add-New Product</h3>
                <input  type='text'{...register("ProductName")} placeholder="ProductName" required /> 
                <input  type='text'{...register("img")} placeholder="image-url" required /> 
                <textarea  type='text'{...register("discription")} placeholder="discription" required /> 
                <input type='number'{...register("price",)} placeholder="price" required />
               
                <input type="submit" />

                </form>
            </div>
     </div>
            
        </div>
    );
};

export default AddProduct;