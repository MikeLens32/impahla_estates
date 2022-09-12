import React from 'react';
import Card from 'react-bootstrap/Card';

const ListingsCard = ({ listings }) => {
    return (
        <div>
            <Card className="text-center">
                <Card.Img variant="top" src={listings.media} /> 
                <Card.Body>
                    <Card.Title>{listings.address}</Card.Title>
                    <Card.Text>{listings.description}</Card.Text>
                    <Card.Text>Price: {listings.price}K</Card.Text>
                    <Card.Text>Bedroom: {listings.bedroom}</Card.Text>
                    <Card.Text>Bath: {listings.bath}</Card.Text>
                </Card.Body>
                {/* <Card.Footer className="text-muted">{}</Card.Footer> */}
            </Card>
        </div>
    )
}

export default ListingsCard
