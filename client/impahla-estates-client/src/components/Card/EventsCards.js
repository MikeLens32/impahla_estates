import React from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const EventsCards = ({ events }) => {
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
                {/* <Card.Footer className="text-muted">{events.created_at}</Card.Footer> */}
            </Card>
        </div>
    )
}

export default EventsCards
