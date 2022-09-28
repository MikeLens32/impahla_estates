import Axios from 'axios';
// import { Image } from 'cloudinary-react'
import './Css/Listing.css'
import React, { useEffect, useState } from 'react';
import ListingsCard from './Card/ListingsCard';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Listings = () => {

    const [property, setProperty] = useState([])
    const [listingId, setListingId] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [listForm, setListForm] = useState({
        address: '',
        description:'',
        price: '',
        bedroom: '',
        bath: '',
        media:''
    })

    // const handleUpdatePost = () => {
    //     console.log(`imageUrl: ${imageUrl}`)

    //     const file = {
    //         image: imageUrl,
    //     }

    //     fetch(`/listings${listingId}`, {
    //         method: 'PATCH',
    //         header: {
    //             'Content-Type':'application/json',
    //             'Accept':'application/json'
    //         },
    //         body: JSON.stringify(file)
    //     })
    //     .then(r => r.json())
    // }

    const handleChange = (e) => {
        setListForm({
            ...listForm,
            [e.target.name]: e.target.value,
        })
    }

    const uploadImage = () => {
        const formData = new FormData()
        formData.append('file', listForm.media)
        formData.append('uploadPreset', 'sb8uogjx')

        Axios.post('https//api.cloudinary.com/v1_1/da3q0bau5/image/upload', formData)
        .then(r => {
            setImageUrl(r.data.url)
            console.log(`response url: ${r}`)
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
            uploadImage()
            setListingId(listData.id)
        })

    }

    useEffect(() => {
        fetch('/listings')
        .then(r => r.json())
        .then(propData => setProperty(propData))
    }, [])

    useEffect(() => {
        if (imageUrl) {
            const handleUpdatePost = () => {
                console.log(`imageUrl: ${imageUrl}`)
        
                const file = {
                    image: imageUrl,
                }
        
                fetch(`/listings${listingId}`, {
                    method: 'PATCH',
                    header: {
                        'Content-Type':'application/json',
                        'Accept':'application/json'
                    },
                    body: JSON.stringify(file)
                })
                .then(r => r.json())
            }
            handleUpdatePost();
        }
    }, [imageUrl, listingId])

    const listedProperties = property.map((listedP) => (
            <ListingsCard listing={listedP} listings={property} setListings={setProperty}/>
    ))

    return (
        <div>
            <h1>Listings</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={listForm.address}>
                    <Form.Control required name='address' type="address" placeholder="Enter address" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.media}>
                    <Form.Control name='media' type="file" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control requied name='description' placeholder="Description" onChange={handleChange} value={listForm.description} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={listForm.price}>
                    <Form.Control required name='price' type="number" min='1' placeholder="Price" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.bedroom}>
                    <Form.Control required name='bedroom' type="number" min='1' placeholder="Bedroom(s)" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.bath}>
                    <Form.Control required name='bath' type="number" min='1' placeholder="Bath(s)" />
                    </Form.Group>
                </Row>
                <br/>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <div className='listed-properties' style={{ border:'flex', flexWrap:'wrap' }}>
                {listedProperties}
            </div>
                
        </div>
    )
}

export default Listings
