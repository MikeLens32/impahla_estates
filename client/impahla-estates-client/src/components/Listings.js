import './Css/Listing.css'
import React, { useEffect, useState } from 'react';
import ListingsCard from './Card/ListingsCard';
import ListingModal from './ListingModal';

const Listings = () => {

    const [property, setProperty] = useState([])
    const [ openModal, setOpenModal ]= useState(false)
    const [listForm, setListForm] = useState({
        address: '',
        description:'',
        price: '',
        bedroom: '',
        bath: '',
        media:''
    })

    const handleChange = (e) => {
        setListForm({
            ...listForm,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const listFormInfo ={
            address: listForm.address,
            description:listForm.description,
            price: listForm.price,
            bedroom: listForm.bedroom,
            bath: listForm.bath,
            media: listForm.media
        }
        fetch('/listings', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(listFormInfo)
        })
        .then(r => r.json())
        .then(listData => {
            setProperty([...property,listData])
            setOpenModal(false)
        })

    }

    useEffect(() => {
        fetch('/listings')
        .then(r => r.json())
        .then(propData => setProperty(propData))
    }, [])

    const listedProperties = property.map((listedP) => (
            <ListingsCard listing={listedP} listings={property} setListings={setProperty}/>
    ))

    return (
        <div>
            <img className='listing-banner' alt='banner' src='https://www.medishare.com/hs-fs/hubfs/Medishare%20Blog%20Assets/AdobeStock_44460269.jpeg?width=1200&name=AdobeStock_44460269.jpeg'/>
            <h1 className='listing-title'>Listings</h1>
            <div className='listing-modal-btn'> 
                <button onClick={() => setOpenModal(true)}>Post Listing</button>
            </div>
            <div>
                <ListingModal 
                open={openModal}
                onClose={() => setOpenModal(false)}
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                listForm={listForm}
                />
            </div>
            <div className='listing-line'></div>
            <div className='listed-properties' style={{ border:'flex', flexWrap:'wrap' }}>
                {listedProperties}
            </div>
                
        </div>
    )
}

export default Listings
