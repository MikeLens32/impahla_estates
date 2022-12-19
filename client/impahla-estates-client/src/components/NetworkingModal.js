import React, { useRef } from 'react';

const NetworkingModal = ({ open, onClose, handleChange, handleSubmit, newPost }) => {    
    const formMedia = useRef();

    if(!open) return null

    return (
        <div className='bg-zinc-200/80 fixed inset-0 z-50'>
            <div className='flex h-screen justify-center items-center'>
                <form className='bg-white border p-4 rounded-xl' onSubmit={e => handleSubmit(e, formMedia)}>
                <h4 className='mx-auto text-2xl font-bold'>Update Your Network</h4>
                <div className='mt-2'>
                    <label className='text-lg font-light mt-2'>Post: </label>
                    <input className='bg-blue-100 rounded-md ml-2' required name='text' type='text' onChange={handleChange} value={newPost.text} />
                    <br/>
                </div>

                <div className='mt-2'>
                    <label className='text-lg font-light my-2'>Media</label>
                    <input className='mb-1 bg-blue-100 rounded-md' 
                    name='media' type='file' ref={formMedia}/>
                    <br/>
                </div>

                <div className='mt-4'>
                    <input className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg cursor-pointer' type='submit' value='Submit' />
                    <button onClick={onClose} className='bold'>Close</button>
                </div>
            </form>
            </div>
            
            
        </div>
    )
}

export default NetworkingModal
