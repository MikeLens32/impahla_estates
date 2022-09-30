import React from 'react'
import './Css/ListingModal.css'

const ListingModal = ({ open, onClose, handleChange, handleSubmit, listForm }) => {

    if(!open) return null

    return (
        <div className='listing-modal-overlay'>
            <form className='listing-modal-form' style={{ border:'flex', flexWrap:'wrap' }}
             onSubmit={handleSubmit}>
                <h4 className='listing-modal-title'>Listing Form</h4>
                <div className='listing-modal-inline'>
                    <div className='listing-modal-label'>
                        <label>Address: </label>
                        <input className='listing-text'name='address' type='text' onChange={handleChange} value={listForm.address}/>
                    </div>
                    <div className='listing-modal-label'>
                        <label>Media: </label>
                        <input name='media' type='file' onChange={handleChange} value={listForm.media}/>
                    </div>
                </div>
                <div className='listing-modal-label'>
                <label>Description: </label>
                        <input name='description' type='textarea' onChange={handleChange} value={listForm.description}/>
                </div>
                <div className='listing-modal-inline'>
                    <div className='listing-modal-label'>
                        <label>Price: </label>
                        <input name='price' type='number' min='1' onChange={handleChange} value={listForm.price}/>
                    </div>
                    <div>
                        <label className='listing-modal-label'>Bedroom: </label>
                        <input name='bedroom' type='number' min='1' onChange={handleChange} value={listForm.bedroom}/>
                    </div>
                    <div>
                        <label className='listing-modal-label'>Bath: </label>
                        <input name='bath' type='number' min='1' onChange={handleChange} value={listForm.bath}/>
                    </div>
                </div>

                <div className='btn-container'>
                    <input className='bold' type='submit' value='Submit' />
                    <button onClick={onClose} className='bold'>Close</button>
                </div>
            </form>
        </div>
    )
}

export default ListingModal
