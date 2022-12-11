import React, { useContext, useEffect, useState  } from 'react';
import { UserContext } from '../context/user';
import EventsCards from './Card/EventsCards';
import EventsModal from './EventsModal';
import eventBanner from '../assets/pexels-julian-v-860227.jpg';

const Events = () => {

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

        const formData = new FormData();
        formData.append("host_id", user.id);
        formData.append("media", formMedia.current.files[0]);
        formData.append("text", eventForm.text);
        formData.append("data", eventForm.date);

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
        <div className='bg-zinc-50'>
             <div className='w-full h-[90vh]'>
            <img className='w-full h-full object-cover' src={eventBanner} alt='Home Banner'/>
            </div>
            <div className='flex'>
                <h1 className='mx-auto my-4 font-bold text-6xl'>Let's Build Our Networking</h1>
            </div>
            <div className='flex'>
                <button className='items-center mx-auto' onClick={() => setOpenModal(true)}>Post Event</button>
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
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {showEvents}
            </div>
        </div>
    )
}

export default Events
