import React, { useEffect, useState } from 'react';
import ListingsCard from './Card/ListingsCard';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Listings = () => {

    const [property, setProperty] = useState([])
    const [listForm, setListForm] = useState({
        address: '',
        description:'',
        price: '',
        bedroom: '',
        bath: '',
        media:''
    })
    // const uploadImage = (files) => {
    //     console.log(file[0])
    // }

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
        .then(listData => setProperty([...property,listData]))
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
            <CardGroup>
                {listedProperties}
            </CardGroup>
        </div>
    )
}

export default Listings
