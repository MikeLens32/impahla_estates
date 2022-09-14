// import { v4 as uuid } from 'uuid';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CommentCard from './CommentCard';

const PostCard = ({ posts, setPosts }) => {

    // const unique_id = uuid()
    const [postComments, setPostComments] = useState({
        text: ""
    })

    function handleChange(e) {
        setPostComments({
            ...postComments,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, posts) {
        e.preventDefault();
        const newComment = {
            text: postComments.text
        }

        fetch('/comments', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then(comData => {
            const postIndex = posts.findIndex((postObj) => {
                return posts.id === postObj.id
            })
            const finalPost = {
                ...posts,
                comments: [...posts.comments, comData]
            }
            setPosts([
                ...posts.slice(0, postIndex),
                finalPost,
                ...posts.slice(postIndex +1)
            ])
            
        })
    }

    

    return (
        <div>
            <Card key={posts.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={posts.media} />
                <Card.Body>
                    <Card.Text>{posts.text}</Card.Text>
                </Card.Body>
                <Form onSubmit={e => handleSubmit(e, posts)}>
                    <Form.Group onChange={handleChange} value={postComments.text}>
                        <FloatingLabel   controlId="floatingTextarea2" label="Comments">
                        <Form.Control name='text' type="textarea" placeholder="Comment" style={{ height: '100px' }} />
                        </FloatingLabel>
                        <Button variant="primary" type="submit">Comment</Button>
                    </Form.Group>
                    
                </Form>
                
                {posts.comments.map((comment) => (
                    <CommentCard comments={comment} />
                ))}
            </Card>
        </div>
    )
}

export default PostCard
