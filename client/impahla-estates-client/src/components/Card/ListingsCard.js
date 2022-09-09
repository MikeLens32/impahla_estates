import React from 'react';
import Card from 'react-bootstrap/Card';

const ListingsCard = ({ address, description, media, price, bedroom ,bath }) => {
    return (
        <div>
            <Card className="text-center">
                <Card.Img variant="top" src={media} /> 
                <Card.Body>
                    <Card.Title>{address}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Price: {price}K</Card.Text>
                    <Card.Text>Bedroom: {bedroom}</Card.Text>
                    <Card.Text>Bath: {bath}</Card.Text>
                </Card.Body>
                {/* <Card.Footer className="text-muted">{}</Card.Footer> */}
            </Card>
        </div>
    )
}

export default ListingsCard
