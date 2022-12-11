import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/user'
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
        <div className='bg-white items-center rounded-2xl mx-2 my-3'>
        <div className='mb-4'>
            <div className='propert-image'>
                <img className='w-full object-cover rounded-t-lg' src={listing.media} alt={listing.address}/>
            </div>
            <div className='property-content'>
                <div className='text-black text-xl font-bold text-center '><h4>{listing.address}</h4></div>
                <div className='flex'>
                    <p className='ml-1'>Description </p>
                    <p>: {listing.description}</p>
                </div>
                <div className='flex'>
                    <p className='ml-1'>Price </p>
                    <p>: {listing.price} k</p>
                </div>
                <div className='flex'>
                    <p className='ml-1'>Bedrooms </p>
                    <p>: {listing.bedroom}</p>
                    </div>
                <div className='flex'>
                    <p className='ml-1'>Baths </p>
                    <p>: {listing.bath}</p>
                    </div>
                <div className='property-btn'>
                {user.id === listing.creator_id ?(
                    <div className='mx-auto'>
                        <button className='py-2 rounded-2xl mb-2 mx-2 cursor-pointer' onClick={() => handleDelete(listing.id)}><p style={{ color:'white'}}>Remove</p></button>
                        <button className='py-2 rounded-2xl mb-2 mx-2 cursor-pointer' onClick={() => history(`/listings/${listing.id}/edit`)}><p style={{ color:'white'}}>Edit</p></button>
                    </div>)
                    : ''}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ListingsCard
