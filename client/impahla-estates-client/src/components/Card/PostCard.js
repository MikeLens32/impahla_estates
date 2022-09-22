// import { v4 as uuid } from 'uuid';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CommentCard from './CommentCard';

const PostCard = ({ post, setPosts }) => {

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

    function handleSubmit(e, post) {
        e.preventDefault();
        const newComment = {
            post_id: post.id,
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
            const postIndex = post.findIndex((postObj) => {
                return post.id === postObj.id
            })
            const finalPost = {
                ...post,
                comments: [...post.comments, comData]
            }
            setPosts([
                ...post.slice(0, postIndex),
                finalPost,
                ...post.slice(postIndex +1)
            ])
            setPostComments({
                post_id: '',
                text: ''
            })
        })
    }

    

    return (
        <div>
            <Card key={post.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.media} />
                <Card.Body>
                    <Card.Text>{post.text}</Card.Text>
                </Card.Body>
                <Form onSubmit={e => handleSubmit(e, post)}>
                    <Form.Group onChange={handleChange} value={postComments.text}>
                        <FloatingLabel   controlId="floatingTextarea2" label="Comments">
                        <Form.Control name='text' type="textarea" placeholder="Comment" style={{ height: '100px' }} />
                        </FloatingLabel>
                        <Button variant="primary" type="submit">Comment</Button>
                    </Form.Group>
                </Form>
                
                {post.comments.map((comment) => (
                    <CommentCard comments={comment} />
                ))}
            </Card>
        </div>
    )
}

export default PostCard
