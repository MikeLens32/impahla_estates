import React, { useContext, useEffect, useState  } from 'react';
import { UserContext } from '../context/user';
// import { useParams } from '/react-router-dom'
import EventsCards from './Card/EventsCards';
// import CardGroup from 'react-bootstrap/CardGroup';
import './Css/Event.css'
import EventsModal from './EventsModal';

const Events = () => {

    // const { id } = useParams()
    const { user } = useContext( UserContext )
    const [ openModal, setOpenModal ] = useState(false)
    const [listedEvent, setListedEvent] = useState([])
    const [formMedia, setFormMedia] = useState('')
    const [eventForm, setEventForm] = useState({
        text: '',
        date: ''
    })

    const handleChange = (e) => {
        setEventForm({
            ...eventForm,
            [e.target.name]:e.target.value,
        })
    }

    //Creating another change specifically for the media so it can upload to Cloudinary and creating a state to use in the handle submit
    const handleMediaChange = (e) => {
        setFormMedia({
            ...formMedia,
            [e.target.name]:e.target.files[0]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //creating FormData Object for the media and append it to the AJAX request using the state for the image
        const formData = new FormData()
        formData.append('file', formMedia)
        const newEventForm = {
            host_id: user.id,
            text: eventForm.text,
            media: formData,
            date: eventForm.date
        }
        fetch('/events', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEventForm)
        })
        .then(r => r.json())
        .then(eventData => {
            setListedEvent([...listedEvent, eventData])
            setEventForm({
                text:'',
                media: '',
                date:''
            })
            setOpenModal(false)
        })
    }

    useEffect(() => {
        fetch('/events')
        .then(r => r.json())
        .then((eventInfo) => {
            setListedEvent(eventInfo)
        })
    }, [])

    const showEvents = listedEvent.map((listEvent) => (
        <EventsCards event={listEvent} events={listedEvent} setEvents={setListedEvent} user={user} />
    ))    

    return (
        <div>
            
            <img className='event-image' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.atulhost.com%2Fwp-content%2Fuploads%2F2016%2F06%2Fbusiness-networking-event.jpg&f=1&nofb=1&ipt=ffe15b72274c1b7798e156d127dfbd0e82b03ef1cc633a23d77e4f08ab1a6928&ipo=images' alt='Event-Banner'/>
            <h1 className='event-title'>Events</h1>
            <p className='event-slogan'>If You're New To World Of Real Estate Or Someone Seasoned, Look No Further.</p>
            <div className='event-modal-btn'>
                <button  onClick={() => setOpenModal(true) } >Post Event</button>
            </div>
            <div>
                <EventsModal 
                open={openModal} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange} 
                media={formMedia}
                handleMedia={handleMediaChange}
                eventForm={eventForm}
                onClose={() => setOpenModal(false)}
                />
            </div>
            <div className='event-line'></div>
            <div className='event-cards' style={{ border:'flex', flexWrap:'wrap' }}>
                {showEvents}
            </div>
        </div>
    )
}

export default Events
