import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EditListing = () => {

    const [ listingInfo, setListingInfo ] = useState([])
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
            price: listForm.bedroom,
            bedroom: listForm.bath,
            bath: listForm.bath
        }
        console.log(listingForm)
        fetch(`listings/${id}`, {
            method: 'PATCH',
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
            setListingInfo(listingData)
        })
    }, [id])

    return (
        <div>
            <h1>Edit Listing</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={listForm.address}>
                    <Form.Control required name={listForm.address} type="address" placeholder={listingInfo.address} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.media}>
                    <Form.Control name={listForm.media} type="file" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1" onChange={handleChange} value={listForm.description}>
                    <Form.Control requied name={listForm.description} placeholder={listingInfo.description} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={listForm.price}>
                    <Form.Control required name={listForm.price} type="number" min='1' placeholder={listingInfo.price} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.bedroom}>
                    <Form.Control required name={listForm.bedroom} type="number" min='1' placeholder={listingInfo.bedroom} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.bath}>
                    <Form.Control required name={listForm.bath} type="number" min='1' placeholder={listingInfo.bath} />
                    </Form.Group>
                </Row>
                <br/>
                <Button variant="primary" type="submit">Submit</Button>
                <Button variant="primary" onClick={() => history('/listings')}>Cancel</Button>
            </Form>
        </div>
    )
}

export default EditListing
