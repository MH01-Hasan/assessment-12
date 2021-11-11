import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WatchData.css'

const WatchData = (props) => {
    const{ProductName,img,price,_id}=props.watch;
    return (
     
             <div className='col-lg-4 col-sm-6'>
                 <Card className='card-fild'>
                <Card.Img variant="top" src={img} className='img-fluid max-width: 100% card-image' />
                <Card.Body>
                    
                    <Card.Text className='text' > {ProductName} </Card.Text>
                     <h5>$ {price} USD</h5>
                     <Link to ={`/order/${_id}`}>
                     <Button variant="primary" className='bay-btn'>Buy Now</Button>
                    </Link>
                   
                </Card.Body>
                </Card>
             </div>
            
       
    );
};

export default WatchData;