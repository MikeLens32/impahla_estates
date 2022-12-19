import React, { useRef } from 'react';
const EventsModal = ({ open, onClose, handleSubmit, handleChange, eventForm }) => {

    const formMedia = useRef();

    if(!open) return null

    return (
        <div className='bg-zinc-200/80 fixed inset-0 z-50'>
            <div className='flex h-screen justify-center items-center'>
                <form className='bg-white border p-4 rounded-xl'
             onSubmit={e => handleSubmit(e, formMedia)}>
                <h4 className='mx-auto text-2xl font-bold'>Event Form</h4>
                <div className='text-lg font-light mt-2'>
                     <label >Event Title</label>
                    <input className='bg-blue-100 rounded-md ml-2' required name='text' onChange={handleChange} value={eventForm.text} />
                    <br/>
                </div>
                <div>
                    <label className='text-lg font-light my-2'>Date</label>
                    <input className='bg-blue-100 rounded-md ml-2 pl-1 cursor-pointer my-2' required name='date' type='date' onChange={handleChange} value={eventForm.date}/>
                    <br/>
                </div>
                <div>
                    <label className='text-lg font-light my-2'>Media</label>
                    <input className='mb-1 bg-blue-100 rounded-md' 
                    name='media' type='file' ref={formMedia}/>
                    <br/>
                </div>
                
                <div className='flex my-2'>
                    <input className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg cursor-pointer' type='submit' value='Submit' />
                    <button onClick={onClose} className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg'>Close</button>
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default EventsModal
