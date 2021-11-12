import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Allorder from '../Clientside/Allorder/Allorder';
import Payment from '../Clientside/Payment/Payment';
import Revew from '../Clientside/Revew/Revew';
import './Dashbord.css'
import UseAuth from '../../hooks/UseAuth';
import AddProduct from '../AddProduct/AddProduct';
import Myorder from '../Clientside/Myorder/Myorder';
import Admin from '../Clientside/Admin/Admin';
import ProductManeg from '../Clientside/ProductManeg/ProductManeg';


const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const {logout,user} =UseAuth()
   const [isAdmi, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);

    const style={
        textDecoration:"none",
        
            };
    return (
        <div className='dashbord-fild ' >
            
            <div className='row '>
             
                <div className='col-lg-3 col-sm-12 dashbord-list'>
                <li className='dash-user'><i class="fas fa-user-circle user-icon"></i> {user?.email}</li>
                      

              {
                isAdmi ? <div>
                  <Link style={style} to={`${url}`}>
                    <li className="dashboard-menu mt-5 ">All Order</li>
                  </Link>
                  <Link style={style} to={`${url}/addproduct`}>
                      <li className="dashboard-menu "> Add Product</li>
                  </Link>
                  <Link style={style} to={`${url}/makeadmin`}>
                    <li className="dashboard-menu "> Make Admin</li>
                  </Link>
                  <Link style={style} to={`${url}/manegeProduct`}>
                    <li className="dashboard-menu "> Manege Product</li>
                  </Link>



                </div>
              :

              <div>
                  <Link style={style} to={`${url}`}>
                      <li className="dashboard-menu  "> MY-order</li>
                    </Link>

                    <Link style={style} to={`${url}/review`}>
                        <li className="dashboard-menu ">Review</li>
                    </Link>
                      <Link style={style} to={`${url}/payment`}>
                        <li className="dashboard-menu "> Payment</li>
                      </Link>
                                
              </div>
              }
                    
             <li className="dashboard-menu "> <button className='log-out-btn' onClick ={logout}> <i class="fas fa-sign-out-alt"></i>log-Out</button></li> 
               </div>

                <div className='col-lg-9 col-sm-12'>
                <Switch>
             {isAdmi? <Route exact path={`${path}`}>
                <Allorder></Allorder>
              </Route>:
              <Route exact  path={`${path}`}>
                <Myorder></Myorder>
              </Route>}
              <Route  exact path={`${path}/review`}>
               <Revew></Revew>
              </Route>
              <Route exact path={`${path}/payment`}>
               <Payment></Payment>
              </Route>
              <Route exact path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
              </Route>
              <Route exact path={`${path}/makeadmin`}>
                <Admin></Admin>
              </Route>
              <Route exact path={`${path}/manegeProduct`}>
                <ProductManeg></ProductManeg>
              </Route>
              
            </Switch>

                </div>

            </div>
        
        </div>
    );
};

export default Dashbord;