// import { v4 as uuid } from 'uuid';
import CommentCard from './CommentCard'
import React, { useState } from 'react';
const PostCard = ({ index, post, setPosts }) => {

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
            // debugger
            // const postIndex = post.findIndex((postObj) => {
            //     return post.id === postObj.id
            // })
            const finalPost = {
                ...post,
                comments: [...post.comments, comData]
            }
            setPosts(finalPost, index)
            // setPosts([
            //     ...post.comments.slice(0, index),
            //     finalPost,
            //     ...post.comments.slice(index +1)
            // ])
            setPostComments({
                post_id: '',
                text: ''
            })
        })
    }

    

    return (
        <div className='bg-white items-center rounded-2xl mx-2 my-4 shadow-sm'>
            <div className='pb-3'>
                <div className='post-image'>
                    <img className='w-full object-cover rounded-t-lg' src={post.media} alt={post.id}/>
                </div>
                <div className='flex'>
                    <p className='text-black font-thin text-lg mx-auto my-3'>{post.text}</p>
                </div>
                <div className='post-line'></div>
                <div className='post-comments'>
                    <form className='post-comment-form' onSubmit={e => handleSubmit(e, post)}>
                        <div className='post-comment-label'>
                            <label>Comments: </label>
                            <input className='bg-blue-100 rounded-md ml-2 pl-9 cursor-pointer my-2' name='text' type='textarea' onChange={handleChange} value={postComments.text}/>
                        </div>

                        <div className='comment-btn'>
                            <input className='btn' type='submit' value='Comment' style={{ color:'white'}}/>
                        </div>
                    </form>
                </div>
                <div>
                {post.comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default PostCard
