import React, { useEffect, useState } from 'react';
import PostCard from './Card/PostCard';

const Networking = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/posts')
        .then(r => r.json())
        .then(postsData => setPosts(postsData))
    })

    return (
        <div>
            <PostCard post={posts}/>
        </div>
    )
}

export default Networking
