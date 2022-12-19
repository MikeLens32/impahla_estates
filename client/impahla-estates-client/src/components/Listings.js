import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user';
import ListingsCard from './Card/ListingsCard';
import ListingModal from './ListingModal';
import listBanner from '../assets/pexels-the-lazy-artist-gallery-1642125.jpg'

const Listings = () => {

    const { user } = useContext( UserContext )
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

    const handleSubmit = (e, formMedia) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("creator_id", user.id);
        formData.append("media", formMedia.current.files[0]);
        formData.append("description", listForm.description);
        formData.append("price", listForm.price);
        formData.append("address", listForm.address);
        formData.append("bedroom", listForm.bedroom);
        formData.append("bath", listForm.bath);

        fetch('/listings', {
            method: "POST",
            body: formData,
        })
        .then(r => r.json())
        .then(listData => {
            setProperty([...property,listData]);
            setListForm({
                address: '',
                description:'',
                price: '',
                bedroom: '',
                bath: '',
                media:''
            });
            setOpenModal(false);
        });

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
        <div className='bg-zinc-50'>
            <img className='w-full h-full object-cover' alt='banner' src={listBanner}/>
            <div className='flex'>
            <h1 className='mx-auto my-4 font-bold text-6xl'>Find Your Future Home</h1>
            </div>
            <div className='flex'> 
                <button className='items-center mx-auto' onClick={() => setOpenModal(true)}>Post Listing</button>
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
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {listedProperties}
            </div>
                
        </div>
    )
}

export default Listings
