import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Css/EditListing.css'

const EditListing = () => {

    // const [ listingInfo, setListingInfo ] = useState([])
    const [ listForm, setListForm ] = useState({
        address: '',
        description: '',
        media: '',
        price: '',
        bedroom: '',
        bath: ''
    })
    const { id } = useParams()
    const history = useNavigate()

    const handleChange = (e) => {
        setListForm({
            ...listForm,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const listingForm = {
            address: listForm.address,
            description: listForm.description,
            media: listForm.media,
            price: listForm.price,
            bedroom: listForm.bedroom,
            bath: listForm.bath
        }
        console.log(listingForm)
        fetch(`/listings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(listingForm)
        })
        .then(r => r.json())
        .then(data => console.log(data))
        history('/listings')

    }

    useEffect(() => {
        fetch(`/listings/${id}`)
        .then(r => r.json())
        .then(listingData => {
            setListForm(listingData)
            console.log(JSON.stringify(listingData))
        })
    }, [id])
    console.log(listForm.address)

    return (
        <div className='edit-listing-container'>
            <h1 style={{ color:'white'}}>Edit Listing</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={listForm.address}>
                    <Form.Control required name='address' type="address" placeholder='{listingInfo.address}' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.media}>
                    <Form.Control name='media' type="file" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1" onChange={handleChange} value={listForm.description}>
                    <Form.Control requied name='description' placeholder='{listingInfo.description}' />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={listForm.price}>
                    <Form.Control required name='price' type="number" min='1' placeholder='{listingInfo.price}' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.bedroom}>
                    <Form.Control required name='bedroom' type="number" min='0' placeholder='{listingInfo.bedroom}' />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.bath}>
                    <Form.Control required name='bath' type="number" min='0' placeholder='{listingInfo.bath}' />
                    </Form.Group>
                </Row>
                <br/>
                <Button variant="dark" type="submit">Submit</Button>
                <Button variant="dark" onClick={() => history('/listings')}>Cancel</Button>
            </Form>
        </div>
    )
}

export default EditListing
