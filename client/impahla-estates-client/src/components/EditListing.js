import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EditListing = () => {

    const [ listingInfo, setListingInfo ] = useState({
        address: '',
        description: '',
        media: '',
        price: '',
        bedroom: '',
        bath: ''
    })
    const { id } = useParams()

    const handlseSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        fetch(`/listings/${id}`)
        .then(r => r.json())
    }, [])

    return (
        <div>
            <h1>Edit Listing</h1>
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
            <CardGroup>
                {listedProperties}
            </CardGroup>
        </div>
    )
}

export default EditListing
