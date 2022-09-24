import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const EventsCards = ({ events, setEvents, user }) => {

    const handleDelete = (eventID) => {
        fetch(`events/${eventID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(() => {
            const filterEvents = events.filter(event => events.id !== eventID);
            setEvents(filterEvents)
        })
    }

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
                    <button onClick={() => handleDelete(events.id)}>Edit</button>  
                    <button>Remove</button>
                </Card.Footer>) : ''}
            </Card>
        </div>
    )
}

export default EventsCards
