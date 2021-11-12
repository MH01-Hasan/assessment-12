import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css'


const About = () => {
    const style={
        textDecoration:"none",
        fontSize: "18px",
        fontFamily: "serif",
        border: "1px  solid #d33a0d",
        borderRadius: "5px",
        padding: "5px 12px",
        color: "#060000",
        backgroundColor: "white",
        marginLeft: "39px",


        
            };
    return (
        <div>
            <div className='mx-3 mt-5' >
            <h4 className='about'>ABOUT US</h4>
            <h1 className='Unique'>A Unique watch that fits Your Style</h1>
            <p className='Lawson'> The new Lawson collection is already here! This quartz Lawson Franklin 38 model, designed with simplicity and elegance, is truly a cherry on the cake. Comes in different sizes and band colors, has a stainless steel back for a personalized engraving.</p>
            <NavLink to ='/explore' style={style}>Explore</NavLink>
        </div>

        </div>
        
    );
};

export default About;