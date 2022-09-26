import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const EventsCards = ({ events, setEvents, user }) => {

    const handleDelete = (eventID) => {
        // console.log(`deleting league with ID: ${eventID}`)
        fetch(`/events/${eventID}`, {
            method: 'DELETE',
        })
        .then(() => {
            const filterEvents = events.filter(event => event.id !== eventID);
            console.log(`filterEvents: ${JSON.stringify(filterEvents)}`)
            // setEvents(filterEvents)
        })
    }
    const history = useNavigate();


    return (
        <div>
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={events.media} />
                <Card.Body>
                    <Card.Title>{events.text}</Card.Title>
                    <Card.Text>
                    {events.date}
                    </Card.Text>
                </Card.Body>
                { user.id === events.host_id ? (
                <Card.Footer className="text-muted">
                    <button onClick={() => handleDelete(events.id)}>Remove</button>  
                    <button onClick={() => history(`/events/${events.id}/edit`)}>Edit</button>
                </Card.Footer>) : ''}
            </Card>
        </div>
    )
}

export default EventsCards
