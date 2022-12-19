import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditListing = () => {

    const [ listForm, setListForm ] = useState({
        address: '',
        description: '',
        // media: '',
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
            // media: listForm.media,
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
        <div className='bg-zinc-50 h-screen w-full flex justify-center'>
            <div className='pt-24'>
                <form className='bg-white border p-4 rounded-xl px-16' onSubmit={handleSubmit}>
                    <h1 className='text-4xl font-bold my-2'>Edit Listing</h1>
                    <label className='text-lg font-light my-2 mr-2'>Address</label>
                    <input className='bg-blue-100 rounded-md mb-5 pl-2' name='address' type="text" placeholder="Change Event Name" onChange={handleChange} value={listForm.address} />
                    {/* <label className='text-2xl font-light my-2'>Media</label>
                    <input className='bg-blue-100 rounded-md mb-5 pl-2' name='media' type="file" placeholder="Change Event Name" onChange={handleChange} value={listForm.media} /> */}
                    
                    <div className='flex'>
                        <label className='text-lg font-light my-2 mr-2'>Description</label>
                        <textarea 
                        className='bg-blue-100 rounded-md mb-5 pl-2' 
                        cols="80" rows="5"
                        name='description' type="text" placeholder="Change Event Name" 
                        onChange={handleChange} value={listForm.description} />
                    </div>
                    <div>
                        <label className='text-lg font-light my-2 mr-2'>Price</label>
                    <input className='bg-blue-100 rounded-md mb-5 pl-2' name='price' type="number" min='1' placeholder="Change Event Name" onChange={handleChange} value={listForm.price} />
                    <label className='text-lg font-light my-2 mr-2'>Bedroom</label>
                    <input className='bg-blue-100 rounded-md mb-5 pl-2' name='bedroom' type="number" min='0' placeholder="Change Event Name" onChange={handleChange} value={listForm.bedroom} />
                    <label className='text-lg font-light my-2 mr-2'>Bath</label>
                    <input className='bg-blue-100 rounded-md mb-5 pl-2' name='bath' type="number" min='0' placeholder="Change Event Name" onChange={handleChange} value={listForm.bath} />
                    </div>
                    
                    <div>
                        <input className='px-4 py-2 mr-4 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg cursor-pointer' type="submit" value='Change'/>
                        <button onClick={() => history('/listings')}>Cancel</button>
                    </div>
                    
            </form>
            </div>
            
        </div>
        // <div className='edit-listing-container'>
        //     <h1 style={{ color:'white'}}>Edit Listing</h1>
        //     <Form onSubmit={handleSubmit}>
        //         <Row className="mb-3">
        //             <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={listForm.address}>
        //             <Form.Control required name='address' type="address" placeholder='{listingInfo.address}' />
        //             </Form.Group>

        //             <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.media}>
        //             <Form.Control name='media' type="file" />
        //             </Form.Group>
        //         </Row>

        //         <Form.Group className="mb-3" controlId="formGridAddress1" onChange={handleChange} value={listForm.description}>
        //             <Form.Control requied name='description' placeholder='{listingInfo.description}' />
        //         </Form.Group>

        //         <Row className="mb-3">
        //             <Form.Group as={Col} controlId="formGridEmail" onChange={handleChange} value={listForm.price}>
        //             <Form.Control required name='price' type="number" min='1' placeholder='{listingInfo.price}' />
        //             </Form.Group>

        //             <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.bedroom}>
        //             <Form.Control required name='bedroom' type="number" min='0' placeholder='{listingInfo.bedroom}' />
        //             </Form.Group>

        //             <Form.Group as={Col} controlId="formGridPassword" onChange={handleChange} value={listForm.bath}>
        //             <Form.Control required name='bath' type="number" min='0' placeholder='{listingInfo.bath}' />
        //             </Form.Group>
        //         </Row>
        //         <br/>
        //         <Button variant="dark" type="submit">Submit</Button>
        //         <Button variant="dark" onClick={() => history('/listings')}>Cancel</Button>
        //     </Form>
        // </div>
    )
}

export default EditListing
