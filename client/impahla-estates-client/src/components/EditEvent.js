import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Css/EditListing.css'

const EditEvent = () => {

    const [eventName, setEventName] = useState('')
    const { id } = useParams()
    const history = useNavigate()
    
    const handleChange = (e) => {
        setEventName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const eventForm = {
            text: eventName
        }
        // console.log(eventForm)
        fetch(`/events/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(eventForm)
        })
        .then(r => r.json())
        // .then(event => console.log(event))
        history('/events')
    }

    useEffect(() => {
        fetch(`/events/${id}`)
        .then(r => r.json())
        .then(event => setEventName(event.text))
    }, [id])

    return (
        <div className='bg-zinc-50 h-screen w-full flex justify-center'>
            <div className='pt-24'>
                <form className='bg-white border p-4 rounded-xl px-16' onSubmit={handleSubmit}>
                <h1 className='text-4xl font-light my-2'>Edit Title</h1>
                    <input className='bg-blue-100 rounded-md mb-5 pl-2' name={eventName} type="text" placeholder="Change Event Name" onChange={handleChange} value={eventName} />
                    <div>
                        <input className='px-4 py-2 mr-4 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-lg cursor-pointer' type="submit" value='Change'/>
                        <button onClick={() => history('/events')}>Cancel</button>
                    </div>
                    
            </form>
            </div>
            
        </div>
    )
}

export default EditEvent
