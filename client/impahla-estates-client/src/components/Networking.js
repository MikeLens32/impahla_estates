import React, { useContext, useEffect, useState } from 'react';
import PostCard from './Card/PostCard';
import './Css/Networking.css'
import { UserContext } from '../context/user';
import NetworkingModal from './NetworkingModal';

const Networking = () => {

    const { user } = useContext(UserContext)
    const [ openModal, setOpenModal ] = useState(false)
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
        .then(postData => {
            setPosts([...posts, postData])
            setOpenModal(false)
        })
    }

    const handleUpdatePost = (finalPost, postIndex) => {
        setPosts([
                ...posts.slice(0, postIndex),
                finalPost,
                ...posts.slice(postIndex +1)
            ])
    }
    
    const showPostings = () => {
        return posts.map((post, i) => (<PostCard key={post.id} index={i} post={post} setPosts={handleUpdatePost}/>))
    }
    
    useEffect(() => {
        fetch('/posts')
        .then(r => r.json())
        .then(postsData => setPosts(postsData))
    }, [])

    return (
        <div>
            <img className='networking-banner'  src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biginternships.com%2Fwp-content%2Fuploads%2F2020%2F01%2FCrowdStrike-Summer-Professional-Services-Internship.jpg&f=1&nofb=1&ipt=06e87578b3fd6bb9c9593596e0d92959e0ae1f3728dea8e3b2036db84dab92fb&ipo=images' alt='Networking Banner'/>
            <h1 className='networking-title'>Networking</h1>
            <div className='networking-modal-btn'>
                <button onClick={() => setOpenModal(true)}>Create Post</button>
            </div>
            <div>
                <NetworkingModal 
                open={openModal}
                onClose={() => setOpenModal(false)}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                newPost={newPost}/>
            </div>
            <div className='networking-line'></div>
            <div className='networking-cards'>
                {showPostings()}
            </div>
        </div>
    )
}

export default Networking
