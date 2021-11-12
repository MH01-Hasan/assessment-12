import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ProductManeg.css'
import Swal from 'sweetalert2'

const ProductManeg = () => {
 
const [managesProduct ,setManagesProduct]=useState([])
console.log(managesProduct)
useEffect(()=>{
    fetch('http://localhost:5000/Product')
    .then(res => res.json())
    .then(data =>setManagesProduct(data))
},[]);


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
    const url = `http://localhost:5000/Product/${id}`
  
  fetch(url,{
    method:'DELETE'
  })
  .then(res =>res.json())
  .then(data =>{
    if(data.deletedCount>0){
      switealart()
      const remainguser = managesProduct.filter(manages =>manages._id!==id)
      setManagesProduct( remainguser)
    }
  })
  }
  }


    return (
        <div>
           <h3 className='manage'>Manage Product</h3>
            <Table striped bordered hover size="sm">
            <thead>
            <tr>
            <th>Sl.no</th>
            <th>Image</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Action</th>
            </tr>
            </thead>
            {managesProduct?.map((manages, index) =>  (
  
          <tbody key={manages._id}>
            <tr>
                <td>{index + 1}</td>
                <td><img src={manages.img} alt="" className='manege-image' /></td>
                <td>{manages.ProductName}</td>
                <td>{manages.price}</td>
                <td><button onClick={()=> handeldelet(manages._id)} className='delet-btn'>delet</button></td>
                
            </tr>
          </tbody>
        )
        )};
            </Table>             
        </div>
    );
};

export default ProductManeg;