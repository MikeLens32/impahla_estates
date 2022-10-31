import React from 'react';
import './Css/NetworkingModal.css'

const NetworkingModal = ({ open, onClose, handleChange, handleSubmit, newPost }) => {

    if(!open) return null

    return (
        <div className='networking-modal-overlay'>
            <form className='networking-modal-form' style={{ border:'flex', flexWrap:'wrap' }} onSubmit={handleSubmit}>
                <h4 className='networking-modal-title'>Update Your Network</h4>
                <div className='networking-modal-label'>
                    <label>Post: </label>
                    <input required name='text' type='text' onChange={handleChange} value={newPost.text} />
                    <br/>
                </div>
                <div className='networking-modal-label'>
                    <label>Media: </label>
                    <input className='bold' name='media' type='file' onChange={handleChange} value={newPost.media}/>
                    <br/>
                </div>

                <div className='btn-container'>
                    <input className='bold' type='submit' value='Submit' />
                    <button onClick={onClose} className='bold'>Close</button>
                </div>
            </form>
            
        </div>
    )
}

export default NetworkingModal
