import React, { useEffect, useState } from 'react';
import PostCard from './Card/PostCard';

const Networking = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/posts')
        .then(r => r.json())
        .then(postsData => setPosts(postsData))
    }, [])

    const showPostings = () => {
        return posts.map((post) => (<PostCard posts={post} setPosts={setPosts}/>))
    }

    return (
        <div>
            {showPostings()}
        </div>
    )
}

export default Networking
