import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEvent = () => {

    const [eventName, setEventName] = useState('')
    const { id } = useParams()
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`/events/${id}`, {
            method: 'PUT',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(eventName)
        })
        .then(r => r.json())
        .then(newEvent => setEventName(newEvent.text))
        history('/events')
    }

    useEffect(() => {
        fetch(`/events/${id}`)
        .then(r => r.json())
        .then(event => setEventName(event.text))
    }, [id])

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group onChange={(e) => setEventName(e.target.name)} value={eventName.text}>
                    <FloatingLabel controlId="floatingTextarea2" label="Change Event Name">
                    <Form.Control name='eventName' type="text" placeholder="Change Event Name" style={{ height: '100px' }} />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">Change</Button>
                    <Button variant="primary" onClick={() => history('/events')}>Cancel</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default EditEvent
