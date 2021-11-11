import React from 'react';
import './Footer.css'
import logo from '../../image/Logo_115x.png'

const Footer = () => {
    return (
        <div>
            <div className='row my-5 mx-3'>
                <div className='col-lg-3  col-sm-12'>
                    <img src={logo} alt="" />
                <p className='text-fild' >Dubai based custom watch & jewellery specialists, taking rarity to a whole new level. We are expert diamond setters with the ability to create beautiful custom jewellery and completely transform watches into pieces of art for your wrist.  </p>

                <div>
                <i class="fab fa-facebook-square f-icon"></i>
                <i class="fab fa-youtube-square f-icon"></i>
                <i class="fab fa-pinterest-square f-icon"></i>
                <i class="fab fa-twitter f-icon"></i>
                </div>

                </div>
                <div className='col-lg-3  col-sm-12  footer-div'>
                <h4 className='footer-heading'>EXPLORE</h4>
                <ul>
                    <li>Blog</li>
                    <li>All Watches</li>
                    <li>Before & After</li>
                    <li>Customise My Watch</li>
                    <li>Watch Servicing</li>
                </ul>

                </div>
                <div className='col-lg-3  col-sm-12 footer-div'>
                        <h4 className='footer-heading'>INFORMATION</h4>
                        <ul>
                            <li> About Us</li>
                            <li>Return Policy</li>
                            <li>Shipping Policy</li>
                            <li>Customer Reviews</li>
                            <li>Cagau Warranty</li>
                        </ul>
                  </div>
                <div className='col-lg-3  col-sm-12 footer-div'>
                <h4 className='footer-heading'>NEWSLETTER</h4>
                <span className='text-fild' >Subscribe to receive updates, access to exclusive deals, and more.</span>
                <input type="text" name="" id="" placeholder='Enter your email address'  className='sub-input' />
                <button className='sub-btn'>SUBSCRIBE</button>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;