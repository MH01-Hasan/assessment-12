import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../../hooks/UseAuth'
import './Allorder.css'
import Swal from 'sweetalert2'

const Allorder = () => {
    const {user}= UseAuth()
    const [orders, setOrders] = useState([]);


    //All order data Load///
  useEffect(() => {
    fetch('https://stormy-meadow-32930.herokuapp.com/order')
      .then((res) => res.json())

      .then((data) => setOrders(data));
  }, [user?.email]);
//All order data Load///


///swite arart ////

const switealart =()=>{
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: ' Delete Successfully',
    showConfirmButton: false,
    timer: 2200
  })
}
///swite arart ////

const handeldelet = (id)=>{
  const prosid =window.confirm('are you sure delete')
if(prosid){
  const url = `https://stormy-meadow-32930.herokuapp.com/order/${id}`

fetch(url,{
  method:'DELETE'
})
.then(res =>res.json())
.then(data =>{
  if(data.deletedCount>0){
    switealart()
    const remainguser = orders.filter(order =>order._id!==id)
    setOrders( remainguser)
  }
})
}
}


    return (
        <div>
           <h3 className='manage'>Manage All Order</h3>
            <Table striped bordered hover size="sm">
            <thead>
            <tr>
            <th>Sl.no</th>
           
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
               
               
          <tbody key={order._id}>
            <tr>
                <td>{index + 1}</td>
               
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.number}</td>
                <td>{order.address}</td>
                <td>{order.ProductName}</td>
                <td>{order.price}</td>
                <td><button onClick={()=> handeldelet(order._id)} className='delet-btn'>delet</button></td>
                
            </tr>
          </tbody>
        )
        )};
            </Table>             
        </div>
    );
};

export default Allorder;
