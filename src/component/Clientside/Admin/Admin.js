import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'


const Admin = () => {
    const [admin,setAdmin]=useState({})
    console.log(admin)

    useEffect(()=>{
        fetch("http://localhost:5000/user")
        .then(res =>res.json())
        .then(data => setAdmin(data))
    },[])



    ///************ Swite Alearte set******************* */

    const sweetalart = () =>{
        Swal.fire({
            position: 'top-ecnter',
            icon: 'success',
            title: 'Successfully make Admin !',
            showConfirmButton: false,
            timer: 2200
          })

    }
///************ Swite Alearte set******************* */

    const { register, handleSubmit, reset, errors } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/makeadmin", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
           sweetalart()
        reset()          

      };

    return (
        <div>
      <h1>make admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="make as Admin"
        />

      </form>
      
    </div>
    );
};

export default Admin;