import React, { useContext, useEffect, useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostCard from './Card/PostCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserContext } from '../context/user';

const Networking = () => {

    const { user } = useContext(UserContext)
    const [posts, setPosts] = useState([])
    const [newPost, setNewPost] = useState({
        author_id: user.id,
        text: '',
        media: ''
    })

    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const postInfo = {
            author_id: newPost.author_id,
            text: newPost.text,
            media: newPost.media
        }
        fetch('/posts', {
            method: 'POST',
            headers:{
                'COntent-Type':'application/json'
            },
            body: JSON.stringify(postInfo)
        })
        .then(r => r.json())
        .then(postData => setPosts([...posts, postData]))
    }
    
    const showPostings = () => {
        return posts.map((post) => (<PostCard post={post} setPosts={setPosts}/>))
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
                    {/* <Col><Form.Control placeholder="Post" /></Col>
                    <Col><Form.Control type='file' placeholder="Media" /></Col> */}
                    <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={newPost.text}>
                        <Form.Control required name='text' type="text" placeholder="Post" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={newPost.media}>
                        <Form.Control name='media' type="file" placeholder="Media" />
                    </Form.Group>
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
