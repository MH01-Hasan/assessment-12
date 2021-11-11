import React from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Allorder from '../Clientside/Allorder/Allorder';
import Payment from '../Clientside/Payment/Payment';
import Revew from '../Clientside/Revew/Revew';
import './Dashbord.css'
import UseAuth from '../../hooks/UseAuth';
import AddProduct from '../AddProduct/AddProduct';
import Myorder from '../Clientside/Myorder/Myorder';


const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const {logout} =UseAuth()

    const style={
        textDecoration:"none",
        
            };
    return (
        <div className='dashbord-fild ' >
            
            <div className='row '>
                <div className='col-lg-2 col-sm-12 dashbord-list'>
                      <Link style={style} to={`${url}/allorder`}>
                      <li className="dashboard-menu mt-5 ">All Order</li>
                    </Link>

                      <Link style={style} to={`${url}/myOrder`}>
                      <li className="dashboard-menu  "> MY-order</li>
                    </Link>

                    <Link style={style} to={`${url}/review`}>
                      <li className="dashboard-menu ">Review</li>
                    </Link>
                    <Link style={style} to={`${url}/payment`}>
                    <li className="dashboard-menu "> Payment</li>
                    </Link>
                    <Link style={style} to={`${url}/addproduct`}>
                    <li className="dashboard-menu "> Add Product</li>
                    </Link>
                    <li className="dashboard-menu "> <button className='log-out-btn' onClick ={logout}> <i class="fas fa-sign-out-alt"></i>log-Out</button></li>

             

                </div>





                <div className='col-lg-10 col-sm-12'>
                <Switch>
              <Route exact path={`${path}/allorder`}>
                <Allorder></Allorder>
              </Route>
              <Route exact path={`${path}/myOrder`}>
                <Myorder></Myorder>
              </Route>
              <Route exact path={`${path}/review`}>
               <Revew></Revew>
              </Route>
              <Route exact path={`${path}/payment`}>
               <Payment></Payment>
              </Route>
              <Route exact path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
              </Route>
              
            </Switch>

                </div>

            </div>
          
        </div>
    );
};

export default Dashbord;