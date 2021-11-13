import React, { useState } from 'react';
import { Button,Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Login.css'

const Login = () => {
    const{singingoogle,loginuser}= UseAuth()
    const location = useLocation();
    const redairect = location.state?.from || '/home'
    const history = useHistory();
    const [logindata,setLogindata]=useState({})


// handel google//
const hamdelgoogle = ()=>{
    singingoogle()
    .then((result) => {
        history.push(redairect)
                  
      })
    
};
// handel google//


///gmail and password sinf in//
const handelonBlur =(e)=>{
    const field = e.target.name;
    const value = e.target.value;
    const Newlogindata ={...logindata}
    Newlogindata[field] = value
    setLogindata(Newlogindata)

}
const handelloginSubmit = (e) =>{
   
    e.preventDefault()
  loginuser(logindata.email, logindata.password ,location,history)

}

///gmail and password sinf in//

    return (
  
        <div className='login-from'>
        <div className='login '>
         <div className='login-fild'>
                 <h1 className="login-text">Login Form</h1>
                 <Form onSubmit={handelloginSubmit}>
                    <Form.Group as={Row} className="mb-3 input " controlId="formHorizontalEmail">
                        <Col sm={10}>
                        <Form.Control  className=" input-fild" type="email" name='email' onBlur={handelonBlur} placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 input " controlId="formHorizontalPassword">
                       
                        <Col sm={10}>
                        <Form.Control  className="input-fild" type="password" name='password' onBlur={handelonBlur} placeholder="Password " required />
                        
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button className='submit-btn' type="submit">Sign in</Button>
                        </Col>
                 </Form.Group>
                 </Form>

                 <div className='or'>---------------- Or login with ----------------</div>
                 <div className='other-signin'>
                   
                 
                 <Button onClick={hamdelgoogle} className='singin-g'> <i className="fab fa-google google-icon"></i>Google</Button>
                 <br />
                 <NavLink to ='/regester' className='New-User'> New User ? please Register </NavLink>
                 </div>
                
                


          </div>
         

    </div>
        </div>
      
    );
};

export default Login;