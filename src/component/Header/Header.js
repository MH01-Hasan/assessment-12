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



    return (
        <Navbar className='header-fild mx-3' expand="lg">
        <Container>
        <Navbar.Brand style={style} href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <NavLink to='/home'style={style}>Home</NavLink>
            <NavLink to='/explore'style={style}>Explore</NavLink>
             {user?.email && <NavLink to='/dashbord'style={style}>Dashboard</NavLink>}

             {!user?.email ?<NavLink to='/login'style={style}>Login </NavLink>:
             <Button  className='logout' onClick ={logout}>Log out</Button>}
                             
              {user?.email && <small className='user-email'><i class="fas fa-user-circle user-fav"/>{user?.email}</small> }             
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;