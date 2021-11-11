import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth'

const Allorder = () => {
    const {user}= UseAuth()
    const [orders, setOrders] = useState([]);
    
  useEffect(() => {
    fetch('http://localhost:5000/order')
      .then((res) => res.json())

      .then((data) => setOrders(data));
  }, [user?.email]);

    return (
        <div>
            <Table striped bordered hover size="sm">
            <thead>
            <tr>
            <th>#</th>
           
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
            </tr>
            </thead>
            {orders?.map((order, index) =>  (
               
               
          <tbody>
            <tr>
                <td>{index + 1}</td>
               
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.number}</td>
                <td>{order.address}</td>
                <td>{order.ProductName}</td>
                <td>{order.price}</td>
                <td><button  className='btn-button'>delet</button></td>
                
            </tr>
          </tbody>
        )
        )}
            </Table>             
        </div>
    );
};

export default Allorder;
//
// onClick={()=> handeldelet(order._id)}
//