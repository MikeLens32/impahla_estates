import React, { useContext, useEffect, useState  } from 'react';
import { UserContext } from '../context/user';
// import { useParams } from '/react-router-dom'
import EventsCards from './Card/EventsCards';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Events = () => {

    const { user } = useContext( UserContext )
    // const { id } = useParams()
    const [listedEvent, setListedEvent] = useState([])
    const [eventForm, setEventForm] = useState({
        text: '',
        media: '',
        date: ''
    })

    const handleChange = (e) => {
        setEventForm({
            ...eventForm,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newEventForm = {
            host_id: user.id,
            text: eventForm.text,
            media: eventForm.media,
            date: eventForm.date
        }
        fetch('/events', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEventForm)
        })
        .then(r => r.json())
        .then(eventData => {
            setListedEvent([...listedEvent, eventData])
            setEventForm({
                text:'',
                media: '',
                date:''
            })
        })
    }

    useEffect(() => {
        fetch('/events')
        .then(r => r.json())
        .then((eventInfo) => {
            setListedEvent(eventInfo)
        })
    }, [])

    const showEvents = listedEvent.map((listEvent) => (
        <EventsCards events={listEvent} setEvents={setListedEvent} user={user} />
    ))    

    return (
        <div>
            <h1>Events</h1>
            <Form onSubmit={handleSubmit}>
            <Row>
                <Form.Group as={Col} onChange={handleChange} value={eventForm.text}>
                <Form.Control required name='text' tepy='text' placeholder="Event Title" />
                </Form.Group>

                <Form.Group as={Col} onChange={handleChange} value={eventForm.date}>
                <Form.Control required name='date' type='date' placeholder="Date" />
                </Form.Group>

                <Form.Group as={Col} onChange={handleChange} value={eventForm.media}>
                <Form.Control name='media' type='file' placeholder="Media" />
                </Form.Group>
            </Row>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <CardGroup>
                {showEvents}
            </CardGroup>
        </div>
    )
}

export default Events
