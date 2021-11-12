import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import logo from '../../image/Logo_115x.png'

import './Header.css'

const Header = () => {
  const{user,logout} = UseAuth()

    const style={
        textDecoration:"none",
        fontSize: "22px",
        fontFamily: "serif",
        marginLeft: "16px",
        fontWeight: "600",
        color:' white'
        
            };


            //
            // text-decoration: none;
            // font-size: 22px;
            // font-family: serif;
            // margin-left: 16px;
            // font-weight: 700;
            // color: white;
            //

    return (
        <Navbar className='header-fild mx-3' expand="lg">
        <Container>
        <Navbar.Brand style={style} href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <NavLink to='/home'style={style}>Home</NavLink>
            <NavLink to='/explore'style={style}>Explore</NavLink>
             {user?.email && <NavLink to='/dashbord'style={style}>Dashbord</NavLink>}

             {!user?.email ?<NavLink to='/login'style={style}>Login </NavLink>:
             <Button  className='logout' onClick ={logout}>Log out</Button>}
                             
                             
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;