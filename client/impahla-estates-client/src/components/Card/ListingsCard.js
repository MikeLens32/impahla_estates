import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user'
import '../Css/ListingCard.css'
const ListingsCard = ({ listing, listings, setListings }) => {

    const { user } = useContext(UserContext)
    const history = useNavigate()

    const handleDelete = (listingId) => {
        // console.log(`deleting listing with ID: ${eventID}`)
        fetch(`/listings/${listingId}`, {
            method: 'DELETE',
        })
        .then(() => {
            const filterListings = listings.filter((listed) => listed.id !== listingId);
            console.log(`filterEvents: ${JSON.stringify(filterListings)}`)
            setListings(filterListings)
        })
    }

    return (
        <div className='posted-property'>
        <div className='property-card'>
            <div className='propert-image'>
                <img src={listing.media} alt={listing.address}/>
            </div>
            <div className='property-content'>
                <div className='property-address'><h4>{listing.address}</h4></div>
                <div className='property-description'><p>Description:{listing.description}</p></div>
                <div className='property-price'><p>Price: {listing.price}k</p></div>
                <div className='property-bedroom'><p>Bedrooms: {listing.bedroom}</p></div>
                <div className='property-bath'><p>Baths: {listing.bath}</p></div>
                <div className='property-btn'>
                {user.id === listing.creator_id ?(
                    <div className='btn'>
                        <button onClick={() => handleDelete(listing.id)}><p style={{ color:'white'}}>Remove</p></button>
                        <button onClick={() => history(`/listings/${listing.id}/edit`)}><p style={{ color:'white'}}>Edit</p></button>
                    </div>)
                    : ''}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ListingsCard
