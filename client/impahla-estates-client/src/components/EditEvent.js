import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEvent = () => {

    const [eventName, setEventName] = useState('')
    const { id } = useParams()
    const history = useNavigate()

    const handleChange = (e) => {
        setEventName({
            ...eventName,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const eventForm = {
            text: eventName
        }
        fetch(`/events/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(eventForm)
        })
        .then(r => r.json())
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
                <Form.Group onChange={handleChange} value={eventName}>
                    <FloatingLabel   controlId="floatingTextarea2" label="Change Event Name">
                    <Form.Control name='text' type="textarea" placeholder="Change Event Name" style={{ height: '100px' }} />
                    </FloatingLabel>
                    <Button variant="primary" type="submit">Change</Button>
                    <Button variant="primary" onClick={() => history('/events')}>Cancel</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default EditEvent
