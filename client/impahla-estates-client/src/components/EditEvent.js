import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Css/EditListing.css'

const EditEvent = () => {

    const [eventName, setEventName] = useState('')
    const { id } = useParams()
    const history = useNavigate()
    
    const handleChange = (e) => {
        setEventName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const eventForm = {
            text: eventName
        }
        // console.log(eventForm)
        fetch(`/events/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(eventForm)
        })
        .then(r => r.json())
        // .then(event => console.log(event))
        history('/events')
    }

    useEffect(() => {
        fetch(`/events/${id}`)
        .then(r => r.json())
        .then(event => setEventName(event.text))
    }, [id])

    return (
        <div className='edit-listing-container'>
            <h1 style={{ color:'white'}}>Edit Title</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group  onChange={handleChange} value={eventName}>
                    <FloatingLabel controlId="floatingTextarea2" label="Change Event Name">
                    <Form.Control name={eventName} type="text" placeholder="Change Event Name" style={{ height: '100px' }} />
                    </FloatingLabel>
                    <Button variant="dark" type="submit">Change</Button>
                    <Button variant="dark" onClick={() => history('/events')}>Cancel</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default EditEvent
