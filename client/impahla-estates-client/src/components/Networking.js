import React, { useEffect, useState } from 'react';

const Networking = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('/posts')
        .then(r => r.json())
        .then()
    })

    return (
        <div>
            
        </div>
    )
}

export default Networking
