import React from 'react';
import './Css/EventModal.css'
const EventsModal = ({ open, onClose, handleSubmit, handleChange, eventForm }) => {

    if(!open) return null

    return (
        <div className='event-modal-overlay'>
            
            <form className='edit-modal-form' style={{ border:'flex', flexWrap:'wrap' }}
             onSubmit={handleSubmit}>
                <h4 className='event-modal-title'>Event Form</h4>
                <div className='event-modal-label'>
                     <label >Event Title</label>
                    <input className='event-text' required name='text' onChange={handleChange} value={eventForm.text} />
                    <br/>
                </div>
                <div>
                    <label className='event-modal-label'>Date</label>
                    <input required name='date' type='date' onChange={handleChange} value={eventForm.date}/>
                    <br/>
                </div>
                <div>
                    <label className='event-modal-label'>Media</label>
                    <input className='bold' name='media' type='file' onChange={handleChange} value={eventForm.media}/>
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

export default EventsModal
