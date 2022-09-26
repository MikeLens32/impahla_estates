import React, { useContext } from 'react';
import { UserContext } from '../../context/user'
import Card from 'react-bootstrap/Card';

const ListingsCard = ({ listings }) => {

    const { user } = useContext(UserContext)
    return (
        <div>
            
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={listings.media} /> 
                <Card.Body>
                    <Card.Title>{listings.address}</Card.Title>
                    <Card.Text>{listings.description}</Card.Text>
                    <Card.Text>Price: {listings.price}K</Card.Text>
                    <Card.Text>Bedroom: {listings.bedroom}</Card.Text>
                    <Card.Text>Bath: {listings.bath}</Card.Text>
                </Card.Body>
                {user.id === listings.creator_id ?(
                <Card.Footer className="text-muted">
                    <button>Remove</button>
                    <button>Edit</button>
                </Card.Footer>) : ''}
            </Card>
        </div>
    )
}

export default ListingsCard
