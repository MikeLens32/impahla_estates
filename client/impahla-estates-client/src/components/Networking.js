import React, { useContext, useEffect, useState } from 'react';
import PostCard from './Card/PostCard';
import { UserContext } from '../context/user';
import NetworkingModal from './NetworkingModal';
import networkingBanner from '../assets/pexels-eziz-charyyev-1475938.jpg'

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

    const handleSubmit = (e, formMedia) => {
        console.log(`submitting the form...`);

        e.preventDefault();        

        const formData = new FormData();
        formData.append("author_id", user.id);
        formData.append("media", formMedia.current.files[0]);
        formData.append("text", newPost.text);

        console.log(`submitting the form... fetch posts`);

        fetch('/posts', {
            method: 'POST',
            body: formData,
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
        .then(postsData => {
            console.log(postsData)
            setPosts(postsData)})
    }, [])

    return (
        <div className='bg-zinc-50'>
            <div className='w-full h-[90vh]'>
                <img className='w-full h-full object-cover'  src={networkingBanner} alt='Networking Banner'/>
            </div>
            <div className='flex'>
                <h1 className='mx-auto my-4 font-bold text-6xl'>Networking</h1>
            </div>
                
                <div className='flex'>
                    <button className='items-center mx-auto' onClick={() => setOpenModal(true)}>Create Post</button>
                </div>
                <div>
                    <NetworkingModal 
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    newPost={newPost}/>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                    {showPostings()}
                </div>
        </div>
    )
}

export default Networking
