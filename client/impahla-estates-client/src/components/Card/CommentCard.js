import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const CommentCard = ({ comments }) => {



    return (
        <>
            <ListGroup key={comments.id} className="list-group-flush">
                <ListGroup.Item>{comments.text}</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default CommentCard
