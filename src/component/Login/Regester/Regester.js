
import { NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import './Regester.css'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";




const Regester = () => {
  
    const{regester,user}= UseAuth()
    console.log(user)
///swite alart ////
    const alert = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'regester successfully',
            showConfirmButton: false,
            timer: 2200
          })

    }
///swite alart ////


const { register, handleSubmit, reset  , formState: { errors } } = useForm();
  const onSubmit = data => {
    regester(data.email, data.password)
    reset ()
   
  };
    
    return (
        <div className=' regester mt-5'>
          <h2 className='reg-h'>Please Regester</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='mb-5'>
          {/* <input
            className="input-field"
            name="displayName"
            placeholder="name"
            type="text"
            {...register("displayName", { required: true })}
          /> */}
          <br />
          <input
            className="regester-fild"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="regester-fild"
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
  
          <input
            className="reg-submit-btn btn btn-danger mt-3"
            type="submit"
            value="Register"
          />
        </form>
       {user?.email && <div>
         {alert()}
         </div>
             } 
      </div>
    
    );
};

export default Regester;