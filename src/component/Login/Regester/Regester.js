import React, { useState } from 'react';
import { Button,Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../../hooks/UseAuth';
import './Regester.css'
import Swal from 'sweetalert2'




const Regester = () => {
    const [logindata,setLogindata]=useState({})
    const{regester,user}= UseAuth()

    const handelonBlur =(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const Newlogindata = {...logindata}
        Newlogindata[field] = value;
        setLogindata(Newlogindata)
    
    
    console.log(Newlogindata)
    
    }

    const alert = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'regester successfully',
            showConfirmButton: false,
            timer: 2000
          })

    }



    const handelloginSubmit = (e) =>{
        regester(logindata.email, logindata.password)
        e.preventDefault()
       

    }
    return (
        <div className='container mt-5 '>
         
               <div className=' mt-5'>
                   <h3 className='reg-h'> Plese Regester</h3>
           
                <Form onSubmit={handelloginSubmit} className='regester-fild mt-5 '>
                
                <Form.Group as={Row} className="mb-3 input " controlId="formHorizontalEmail">
                    <Col sm={10}>
                    <Form.Control  className=" input-fild" type="email" name='email' onBlur={handelonBlur} placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3 input " controlId="formHorizontalPassword">
                    
                    <Col sm={10}>
                        <small className='pass'>password must be 6 charctror</small>
                    <Form.Control  className="input-fild" type="password" name='password' onBlur={handelonBlur} placeholder="Password " />
                    
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button className='submit-btn' type="submit">Regester</Button>
                    </Col>
                </Form.Group>
                    {
                        user?.email && <div>
                        {alert()}
                        </div>

                    }

            
                 <div className='or'>--------------------------------</div>
                  <NavLink to ='/login'>Are you regester? then Login </NavLink>
                 </Form>
                  
               </div>
            
            
            
        </div>
    );
};

export default Regester;