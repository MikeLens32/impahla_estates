import React, { useEffect, useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostCard from './Card/PostCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Networking = () => {

    const [posts, setPosts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    
    const showPostings = () => {
        return posts.map((post) => (<PostCard posts={post} setPosts={setPosts}/>))
    }
    
    useEffect(() => {
        fetch('/posts')
        .then(r => r.json())
        .then(postsData => setPosts(postsData))
    }, [])

    return (
        <div>
            <h1>Networking</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Label>Create Post</Form.Label>
                    <Col><Form.Control placeholder="Post" /></Col>
                    <Col><Form.Control type='file' placeholder="Media" /></Col>
                    <Col xs='auto'><Button variant="primary" type="submit">Submit</Button></Col>
                </Row>
            </Form>
            <CardGroup>
                {showPostings()}
            </CardGroup>
        </div>
    )
}

export default Networking
