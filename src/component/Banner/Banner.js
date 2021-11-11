import React from 'react';
import './Banner.css'
import banner from '../../image/banner2.jpg'
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Banner = () => {


    const style={
        textDecoration:"none",
        fontSize: "18px",
        fontFamily: "serif",
        color:' white',
        border: "1px  solid yellow",
        borderRadius: "5px",
         padding: "5px 12px"
        
            };
    return (
     <div className='mx-3 bannaer'>
                    <Carousel>
                    <Carousel.Item className='item'>
                        <img
                        className="d-block w-100 image"
                        src={banner}
                        alt="First slide"
                        />
                        <Carousel.Caption className='caption'>
                            <h4 className='arivel'>NEW ARRIVALS</h4>
                        <h3 className='best'>Our Best <br></br>  Collections </h3>

                        <NavLink to ='/explore' style={style}>Explore</NavLink>

                        
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
     </div>

 
    );
};

export default Banner;