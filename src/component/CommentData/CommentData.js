import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './CommentData.css'
import { FaStar } from 'react-icons/fa';

const CommentData = (props) => {
    const{comment,email,reting}=props.comment;
    
    return (
        <div className='col-lg-6  col-sm-12 mt-3'>
            <Card>
            <Card.Header><i class="fas fa-user-circle icon"></i> {email}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                 <p>{comment}</p>
                </blockquote>
            </Card.Body>             
                <ListGroup variant="flush">
                <ListGroup.Item>
                <div className='show-reating'>
                    <h6 className='rting'>Rating :-</h6>
                {[...Array(5)].map((star,i)=>{
            
                    const ratingvalue = i+1
                           return (
                              <div >
                             {<FaStar  
                               size={20}
                               color={ratingvalue <=  reting ? "#D09500" : "#333333" }
                               
                               />}
                          
                              </div>
                              
                          )
                       })}
                </div>

                </ListGroup.Item>
                
            </ListGroup>

            </Card>
        </div>
    );
};

export default CommentData;