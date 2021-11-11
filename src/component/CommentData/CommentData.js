import React from 'react';
import { Card } from 'react-bootstrap';
import './CommentData.css'

const CommentData = (props) => {
    const{comment,email}=props.comment;
    return (
        <div className='col-lg-6  col-sm-12 mt-3'>
            <Card>
            <Card.Header><i class="fas fa-user-circle icon"></i> {email}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                 <p>{comment}</p>
                </blockquote>
            </Card.Body>
            </Card>
        </div>
    );
};

export default CommentData;