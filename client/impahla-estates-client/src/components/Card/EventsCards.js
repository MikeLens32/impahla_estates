import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const EventsCards = ({ event, events, setEvents, user }) => {
    console.log(events)
    const handleDelete = (eventID) => {
        // console.log(`deleting league with ID: ${eventID}`)
        fetch(`/events/${eventID}`, {
            method: 'DELETE',
        })
        .then(() => {
            const filterEvents = events.filter(eventP => eventP.id !== eventID);
            console.log(`filterEvents: ${JSON.stringify(filterEvents)}`)
            setEvents(filterEvents)
        })
    }
    const history = useNavigate();


    return (
        <div>
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={event.media} />
                <Card.Body>
                    <Card.Title>{event.text}</Card.Title>
                    <Card.Text>
                    {event.date}
                    </Card.Text>
                </Card.Body>
                { user.id === event.host_id ? (
                <Card.Footer className="text-muted">
                    <button onClick={() => handleDelete(event.id)}>Remove</button>  
                    <button onClick={() => history(`/events/${event.id}/edit`)}>Edit</button>
                </Card.Footer>) : ''}
            </Card>
        </div>
    )
}

export default EventsCards
