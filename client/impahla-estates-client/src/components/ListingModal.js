import React, { useRef } from 'react';

const ListingModal = ({ open, onClose, handleChange, handleSubmit, listForm }) => {

    const formMedia = useRef();
    if(!open) return null

    return (
        <div className='bg-zinc-200/80 fixed inset-0 z-50'>
            <div className='flex h-screen justify-center items-center'>
                <form className='bg-white border p-4 rounded-xl'
                onSubmit={e => handleSubmit(e, formMedia)}>
                    <h4 className='mx-auto text-2xl font-bold'>Listing Form</h4>
                    <div className='listing-modal-inline'>
                        <div className='text-lg font-light mt-2 my-2'>
                            <label>Address: </label>
                            <input className='bg-blue-100 rounded-md ml-2' name='address' type='text' onChange={handleChange} value={listForm.address}/>
                        </div>
                        <div className='listing-modal-label'>
                            <label className='text-lg font-light my-2'>Media: </label>
                            <input className='bg-blue-100 rounded-md ml-2' 
                            name='media' type='file' ref={formMedia}/>
                        </div>
                    </div>
                    <div className='listing-modal-label'>
                        <label className='text-lg font-light my-2'>Description: </label>
                            <input className='bg-blue-100 rounded-md ml-2' name='description' type='textarea' onChange={handleChange} value={listForm.description}/>
                    </div>
                    <div className='listing-modal-inline'>
                        <div className='listing-modal-label'>
                            <label className='text-lg font-light my-2'>Price: </label>
                            <input className='bg-blue-100 rounded-md ml-2' name='price' type='number' min='1' onChange={handleChange} value={listForm.price}/>
                        </div>
                        <div>
                            <label className='text-lg font-light my-2'>Bedroom: </label>
                            <input className='bg-blue-100 rounded-md ml-2' name='bedroom' type='number' min='1' onChange={handleChange} value={listForm.bedroom}/>
                        </div>
                        <div>
                            <label className='text-lg font-light my-2'>Bath: </label>
                            <input className='bg-blue-100 rounded-md ml-2' name='bath' type='number' min='1' onChange={handleChange} value={listForm.bath}/>
                        </div>
                    </div>

                <div className='flex my-2'>
                    <input className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg cursor-pointer' type='submit' value='Submit' />
                    <button onClick={onClose} className='px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg cursor-pointer'>Close</button>
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default ListingModal
