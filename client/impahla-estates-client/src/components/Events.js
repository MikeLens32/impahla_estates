import React, { useContext, useEffect, useState  } from 'react';
import { UserContext } from '../context/user';
// import { useParams } from '/react-router-dom'
import EventsCards from './Card/EventsCards';
// import CardGroup from 'react-bootstrap/CardGroup';
import './Css/Event.css'
import EventsModal from './EventsModal';
// import axios from 'axios';

const Events = () => {

    // const { id } = useParams()
    const { user } = useContext( UserContext )
    const [ openModal, setOpenModal ] = useState(false)
    const [listedEvent, setListedEvent] = useState([])
    const [eventForm, setEventForm] = useState({
        text: '',
        date: '',
        media: ''
    })

    const handleChange = (e) => {
        setEventForm({
            ...eventForm,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e, formMedia) => {
        e.preventDefault();
    
        // const formInfoData = new FormData();
        // formInfoData.append("file", formMedia.current.files[0]);
        // formInfoData.append("upload_preset", "sb8uogjx");

        const formData = new FormData();
        formData.append("host_id", user.id);
        formData.append("media", formMedia.current.files[0]);
        formData.append("text", eventForm.text);
        formData.append("data", eventForm.date);


        //send image to cloudinary
        // axios.post("https://api.cloudinary.com/v1_1/da3q0bau5/image/upload", formInfoData)
        // .then((response) => {
        //     console.log(response.data.secure_url)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })

        fetch("/events", {
          method: "POST",
          body: formData,
        })
          .then((r) => r.json())
          .then((eventData) => {
            setListedEvent([...listedEvent, eventData]);
            setEventForm({
              text: "",
              date: "",
              media: ''
            });
            setOpenModal(false);
          });
      };

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
