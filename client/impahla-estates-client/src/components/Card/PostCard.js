import { u4 as uuid } from 'uuid';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../../context/user';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState, useEffect, useContext } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const PostCard = ({ posts }) => {

    const unique_id = uuid()
    const { user } = useContext(UserContext)
    const [postList, setPostList] = useState(posts)
    const [postComments, setPostComments] = useState({
        post_id: "",
        user_id: "",
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
            user_id: user.id,
            text: comment.text
        }

        fetch(`/comments/${posts.comments.id}`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then(comData => {
            const postIndex = postList.findIndex((postObj) => {
                return post.id === postObj.id
            })
            const finalPost = {
                ...post,
                comments: [...post.comments, comData]
            }
            setPostList([
                ...postList.slice(0, postIndex),
                finalPost,
                ...postList.slice(postIndex +1)
            ])
            setPostComments({
                post_id: '',
                user_id: '',
                text: ''
            })
        })
    }

    const showComments = posts.comments.map((comment) => (
        <ListGroup key={comment.unique_id} className="list-group-flush">
            <ListGroup.Item>{comment.text}</ListGroup.Item>
        </ListGroup>
    ))

    useEffect(() => {
        setPostList(posts)
    }, [posts])

    return (
        <div>
            <Card key={postList.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={postList.media} />
                <Card.Body>
                    <Card.Text>{postList.text}</Card.Text>
                </Card.Body>
                <FloatingLabel onChange={handleChange} value={postComments.text} name='text' controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                />
            </FloatingLabel>
                {showComments}
            </Card>
        </div>
    )
}

export default PostCard
