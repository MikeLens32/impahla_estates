import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user'
import Card from 'react-bootstrap/Card';

const ListingsCard = ({ listing, listings, setListings }) => {

    const { user } = useContext(UserContext)
    const history = useNavigate()

    const handleDelete = (listingId) => {
        // console.log(`deleting listing with ID: ${eventID}`)
        fetch(`/listings/${listingId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(() => {
            const filterListings = listings.filter((listed) => listed.id !== listingId);
            console.log(`filterEvents: ${JSON.stringify(filterListings)}`)
            setListings(filterListings)
        })
    }

    return (
        <div>
            
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={listing.media} /> 
                <Card.Body>
                    <Card.Title>{listing.address}</Card.Title>
                    <Card.Text>{listing.description}</Card.Text>
                    <Card.Text>Price: {listing.price}K</Card.Text>
                    <Card.Text>Bedroom: {listing.bedroom}</Card.Text>
                    <Card.Text>Bath: {listing.bath}</Card.Text>
                </Card.Body>
                {user.id === listing.creator_id ?(
                <Card.Footer className="text-muted">
                    <button onClick={() => handleDelete(listing.id)}>Remove</button>
                    <button onClick={() => history(`/listings/${listing.id}/edit`)}>Edit</button>
                </Card.Footer>) : ''}
            </Card>
        </div>
    )
}

export default ListingsCard
