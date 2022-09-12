import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const PostCard = ({ post }) => {

    const [omments, setComments] = useState([])

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.media} />
                <Card.Body>
                    <Card.Text>{post.text}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{post.comments.text}</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default PostCard
